import { useEffect, useState } from "react"
import { Flag } from "../types/Flag"
import { createFlag, getFlag, upsertFlag } from "../../../services/flag"
import { BackgroundActionOptions, startBackgroundAction } from "../../../services/background-action"
import { clearWatch, watchPosition } from "../../../services/location"
import { AppState } from "react-native"
import { generateNewFlag } from "../utils/flag"
import { CreateFlag } from "../dtos/CreateFlag"

const backgroundActionOptions : BackgroundActionOptions = {
  taskDesc: "Easyroute is using your GPS to track your location.",
  taskTitle: "Tracking your location",
  taskName: "track-location",
  taskIcon:{
    name:'ic_launcher',
    type:'mipmap'
  },
  
}

let watchId : number | null = null

export const useFlag = () => {
  const [ flag, setFlag ] = useState<Flag>()

  useEffect(() => {
    if(!flag){
      return
    }

    startBackgroundAction(async ()=> {
      console.warn("watchId: ", watchId)

      if(watchId !== null){
        clearWatch(watchId)
      }
      
      watchId = watchPosition(async (position) => {
        console.warn("watchPosition")

        const newFlag = generateNewFlag(flag, position.location)
        
        const upserted = await upsertFlag(newFlag)

        setFlag(upserted)
      },
      (error) => error,
      {
        timeout:Infinity,
        distanceFilter: 0,
        enableHighAccuracy: true,
        maximumAge: 0
      }
      )
    }, backgroundActionOptions)

    AppState.addEventListener("change", async (state) => {
      if (state === "active" && flag.id){
        const gotten = await getFlag(flag.id)
        setFlag(gotten)
      }
    })

  }, [flag])  

  const start = async (newFlag : CreateFlag ) => {
    const created = await createFlag(newFlag)
    setFlag(created)
  }

  const reset = () => setFlag(undefined)
  const stop = () => setFlag(undefined)

  return {
    start,
    flag,
    reset,
    stop,
    started: !!flag
  }
}
