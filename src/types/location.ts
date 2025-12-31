export type Location = {
  latitude: number;
  longitude: number;
  altitude: number;
  speed: number;
  accuracy: number;
  heading: number;
}

export type Position = {
  location: Location,
  timestamp: number
}
