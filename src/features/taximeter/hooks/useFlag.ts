import { useEffect, useState } from "react"
import { Flag } from "../types/Flag"
import { createFlag, getFlag, updateFlag } from "../../../services/flag"
import { BackgroundActionOptions, startBackgroundAction } from "../../../services/background-action"
import { watchPosition } from "../../../services/location"
import { AppState } from "react-native"
import { generateNewFlag } from "../utils/flag"

const backgroundActionOptions : BackgroundActionOptions = {
  taskDesc: "Easyroute is using your GPS to track your location.",
  taskTitle: "Tracking your location",
  taskName: "track-location",
  taskIcon:{
    name:'ic_launcher',
    type:'mipmap'
  },
  
}

const defaultFlag : Flag = {
  currency:"dollar",
  price: 0,
  route: [],
  distance: 0
}

export const useFlag = () => {
  const [ flag, setFlag ] = useState<Flag>(defaultFlag)
  const [started, setStarted] = useState<boolean>(false)
  
  useEffect(() => {
    
    if(!started){
      return
    }

    startBackgroundAction(async ()=> {
      watchPosition(async (position) => {
        const newFlag = generateNewFlag(flag, position.location)
        const updated = flag.id ? await updateFlag (flag.id, newFlag) : await createFlag(newFlag)

        setFlag(updated)
      })
    }, backgroundActionOptions)

    AppState.addEventListener("change", async (state) => {
      if (state === "active" && flag.id){
        const gotten = await getFlag(flag.id)
        setFlag(gotten)
      }
    })

  }, [started])  

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
