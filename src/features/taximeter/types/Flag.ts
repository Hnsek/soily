import { Fare } from "./Fare";

export type Flag = {
  _id:string,
  _rev:string,
  route: [longitude : number, latitude: number][],
  distance: number
} & Fare
