import { Fare } from "./Fare";

export type Flag = {
  id?:string;
  route: [longitude : number, latitude: number][],
  distance: number
} & Fare
