import { useEffect, useState } from "react"
import { Flag } from "../types/Flag"
import { createFlag, getFlag, upsertFlag } from "../../../services/flag"
import { BackgroundActionOptions, startBackgroundAction } from "../../../services/background-action"
import { watchPosition } from "../../../services/location"
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

export const useFlag = () => {
  const [ flag, setFlag ] = useState<Flag>()

  useEffect(() => {
    
    if(!flag){
      return
    }

    startBackgroundAction(async ()=> {
      watchPosition(async (position) => {
        const newFlag = generateNewFlag(flag, position.location)
        
        console.warn("newFlag: ", newFlag)

        const upserted = await upsertFlag(newFlag)

        setFlag(upserted)
      })
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
