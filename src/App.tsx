import Flight from './components/flight';
import SearchInput from './components/search-input';
import Layout from './components/layout';
import { useFlightsData } from './hooks/use-flights-data';
import './assets/index.css';
import { SortDirection } from './types';
import spinner from './assets/spinner.gif';

function App() {
  const {
    allFlights,
    filteredFlights,
    loading,
    flightSearch,
    setFlightSearch,
    sortDirection,
    setSortDirection,
  } = useFlightsData();

  function updateSortDirection(sortDirection: SortDirection) {
    setSortDirection(sortDirection);
  }

  function renderResults() {
    if (loading) {
      return <img src={spinner} className="h-8 w-8" />;
    }

    if (flightSearch.length < 3) {
      return <p className="text-schiphol-blue">Enter at least 3 characters to search</p>;
    }

    if (allFlights.length > 0 && filteredFlights.length === 0) {
      return (
        <p className="text-schiphol-blue">
          No flights found for <strong>{flightSearch}</strong>
        </p>
      );
    }

    return (
      <div>
        {filteredFlights.length > 0 && (
          <div className="flex justify-between items-center w-full mb-2">
            <span className="mr-3">
              <strong>{filteredFlights.length}</strong>{' '}
              {filteredFlights.length === 1 ? 'flight' : 'flights'}
            </span>

            <div>
              <span className="mr-2">Sort:</span>

              <select
                className="p-2 bg-white text-afternoon-blue rounded"
                onChange={(e) => updateSortDirection(e.target.value as SortDirection)}
                value={sortDirection}
              >
                <option value="asc">↑</option>
                <option value="desc">↓</option>
              </select>
            </div>
          </div>
        )}

        {filteredFlights.map((flight) => (
          <Flight key={flight.flightIdentifier} flight={flight} />
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <SearchInput value={flightSearch} setValue={setFlightSearch} />

      <div className="mt-4">{renderResults()}</div>
    </Layout>
  );
}

export default App;
