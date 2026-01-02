import { Fare } from "./Fare";

export type TaximeterRoute = {
  coordinates: [longitude : number, latitude: number][]
} & Fare
