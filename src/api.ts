import { FlightsResult } from './types';

export async function getFlights(): Promise<FlightsResult> {
  const { port } = window.location;

  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(`http://localhost:${port}/flights.json`);
      const json = await res.json();
      resolve(json as FlightsResult);
    }, 400);
  });
}
