export type Location = {
  latitude: number;
  longitude: number;
  altitude: number | null;
  speed: number | null;
  accuracy: number | null;
  heading: number | null;
  altitudeAccuracy: number | null;
}

export type Position = {
  location: Location,
  timestamp: number
}
