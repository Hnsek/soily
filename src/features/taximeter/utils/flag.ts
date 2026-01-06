import { getPathLength } from "../../../services/geospatial"
import { Location } from "../../../types/location"
import { Flag } from "../types/Flag"
import { convertCoordinatesArrayToObject } from "./convert-coordinates"

export const generateNewFlag = (oldFlag : Flag, location: Location) : Flag => {
  const route : [longitude : number, latitude : number][] = [...oldFlag.route, [location.longitude, location.latitude]]  
  const distance = getPathLength(convertCoordinatesArrayToObject(route))
  
  return Object.assign(oldFlag, { route, distance })
    
}

export const calculateFinalPrice = (distance : number, price: number) => {
  if(!distance) {
    return 0
  }

  return (distance / 1000) * price
} 
