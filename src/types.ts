export interface Flight {
  flightIdentifier: string;
  flightNumber: string;
  airport: string;
  expectedTime: string;
  originalTime: string;
  url: string;
  score: string;
}

export interface FlightsResult {
  flights: Flight[];
}

export type SortDirection = 'asc' | 'desc';
