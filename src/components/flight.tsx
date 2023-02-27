import React from 'react';
import { Flight as IFlight } from '../types';

interface FlightProps {
  flight: IFlight;
}

function FlightTimes({ flight }: FlightProps) {
  if (flight.expectedTime === flight.originalTime) {
    return <div className="font-bold">{flight.expectedTime}</div>;
  } else {
    return (
      <div className="font-bold flex flex-col">
        <span className="text-dark-red">{flight.expectedTime}</span>
        <span className="text-schiphol-blue line-through">{flight.originalTime}</span>
      </div>
    );
  }
}

function FlightScore({ flight }: FlightProps) {
  const roundedScore = parseFloat(flight.score).toFixed(2);
  return (
    <span className="rounded-sm text-afternoon-blue font-bold text-center">{roundedScore}</span>
  );
}

function Flight({ flight }: FlightProps) {
  return (
    <div className="p-4 border rounded mb-4 text-schiphol-blue grid grid-cols-5 md:grid-cols-6 bg-white shadow-sm">
      <div className="col-span-1">
        <FlightTimes flight={flight} />
      </div>

      <div className="col-span-2">
        <div>{flight.airport}</div>
        <div>{flight.flightNumber}</div>
      </div>

      <div className="col-span-2">
        <span className="underline">{flight.flightIdentifier}</span>
        <div className="md:hidden">
          <FlightScore flight={flight} />
        </div>
      </div>

      <div className="hidden md:block grid-cols-1">
        <FlightScore flight={flight} />
      </div>
    </div>
  );
}

export default Flight;
