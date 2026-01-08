import { Fare } from "./Fare";

export type Flag = {
  route: [longitude : number, latitude: number][],
  distance: number,
  finalPrice: number
} & Fare
