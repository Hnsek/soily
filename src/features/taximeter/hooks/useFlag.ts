import { useEffect, useState } from "react"
import { Flag } from "../types/Flag"
import { Location } from "../../../types/location"
import { getPathLength } from "../../../services/geospatial"
import { convertCoordinatesArrayToObject } from "../utils/convert-coordinates"

const generateNewFlag = (oldFlag : Flag, location: Location) => {
  const route : [longitude : number, latitude : number][] = [...oldFlag.route, [location.longitude, location.latitude]]  
  const distance = getPathLength(convertCoordinatesArrayToObject(route))

  return Object.assign(oldFlag, { route, distance })
    
}

const defaultFlag : Flag = {
  currency:"dollar",
  price: 0,
  route: [],
  distance: 0
}

export const useFlag = (location?: Location) => {
  const [ flag, setFlag ] = useState<Flag>(defaultFlag)
  const [started, setStarted] = useState<boolean>(false)
  
  useEffect(() => {
    
    if(!started || !location){
      return
    }
  
    setFlag(generateNewFlag(flag, location))

  }, [location, started])  

  const start = (flag : Flag ) => {
    setStarted(true)
    setFlag(flag)
  }

  const reset = () => setFlag(defaultFlag)
  const stop = () => setStarted(false)

  return {
    start,
    flag,
    reset,
    stop,
    started
  }
}
