import { getPathLength } from "../../../services/geospatial"
import { Location } from "../../../types/location"
import { Flag } from "../types/Flag"
import { convertCoordinatesArrayToObject } from "./convert-coordinates"

export const generateNewFlag = (oldFlag : Flag, location: Location) => {
  const route : [longitude : number, latitude : number][] = [...oldFlag.route, [location.longitude, location.latitude]]  
  const distance = getPathLength(convertCoordinatesArrayToObject(route))

  return Object.assign(oldFlag, { route, distance })
    
}
