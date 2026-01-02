import { useEffect, useState } from "react"
import { Flag } from "../types/Flag"
import { Location } from "../../../types/location"

const generateNewFlag = (oldFlag : Flag, location: Location) => {
  const route = [...oldFlag.route, [location.longitude, location.latitude]]  
  const flag = Object.assign(oldFlag, { route })
  
  return flag
}

const defaultFlag : Flag = {
  currency:"dollar",
  price: 0,
  route: []
}

export const useFlag = (location?: Location) => {
  const [ flag, setFlag ] = useState<Flag>(defaultFlag)
  const [started, setStarted] = useState<boolean>(false)
  
  useEffect(() => {
    if(!started || !location){
      return
    }
  
    setFlag(generateNewFlag(flag, location))

  }, [location])  

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
