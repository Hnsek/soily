import { Fare } from "./Fare";

export type Route = {
  coordinates: [longitude : number, latitude: number][]
} & Fare
