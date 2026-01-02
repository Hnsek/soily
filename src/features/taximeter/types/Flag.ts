import { Fare } from "./Fare";

export type Flag = {
  route: [longitude : number, latitude: number][]
} & Fare
