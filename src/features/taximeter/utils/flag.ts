import { getPathLength } from "../../../services/geospatial"
import { Location } from "../../../types/location"
import { Flag } from "../types/Flag"
import { convertCoordinatesArrayToObject } from "./convert-coordinates"

type Coordinates = {
  longitude: number,
  latitude: number
}

export const generateNewFlag = (oldFlag : Flag, coordinates: Coordinates) : Flag => {
  const route : [longitude : number, latitude : number][] = [...oldFlag.route, [coordinates.longitude, coordinates.latitude]]  
  const distance = getPathLength(convertCoordinatesArrayToObject(route))
  const finalPrice = calculateFinalPrice(distance, oldFlag.price)

  return Object.assign(oldFlag, { route, distance, finalPrice })
    
}

export const calculateFinalPrice = (distance : number, price: number) => {
  if(!distance) {
    return 0
  }

  return (distance / 1000) * price
} 
