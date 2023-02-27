import { useEffect, useMemo, useState } from 'react';
import { getFlights } from '../api';
import { Flight, SortDirection } from '../types';

export function useFlightsData() {
  const [allFlights, setAllFlights] = useState<Flight[]>([]);
  const [flightSearch, setFlightSearch] = useState('');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [debounceTimeout, setDebounceTimeout] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  // Set a debounce time of 150 milliseconds so we don't fetch the data on every keystroke.
  useEffect(() => {
    if (flightSearch.length < 3) {
      setLoading(false);
      setAllFlights([]);
      return;
    }

    setLoading(true);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(async () => {
      const res = await getFlights();
      setAllFlights(res.flights);
      setLoading(false);
      setDebounceTimeout(undefined);
    }, 150);

    setDebounceTimeout(timeout);
  }, [flightSearch, sortDirection]);

  // A list of filtered & sorted flights to display
  const filteredFlights = useMemo(() => {
    const filtered = allFlights.filter((flight) => {
      // We set the search term to lower case here so we don't have to do this for every flight.
      const lowerCaseSearch = flightSearch.toLowerCase();
      return flight.airport.toLowerCase().includes(lowerCaseSearch);
    });

    const sorted = sortFlights(filtered);
    return sorted.slice(0, 5);
  }, [allFlights, sortDirection, flightSearch]);

  // Sort by expectedTime. If expectedTime is the same, sort by flightNumber.
  function sortFlights(flights: Flight[]) {
    if (sortDirection === 'asc') {
      return flights.sort((a, b) => {
        if (a.expectedTime === b.expectedTime) {
          return a.flightNumber > b.flightNumber ? 1 : -1;
        }
        return a.expectedTime > b.expectedTime ? 1 : -1;
      });
    }

    return flights.sort((a, b) => {
      if (a.expectedTime === b.expectedTime) {
        return a.flightNumber > b.flightNumber ? -1 : 1;
      }
      return a.expectedTime > b.expectedTime ? -1 : 1;
    });
  }

  return {
    loading,
    allFlights,
    filteredFlights,
    sortDirection,
    setSortDirection,
    flightSearch,
    setFlightSearch,
  };
}
