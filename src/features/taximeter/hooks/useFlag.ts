import { useEffect, useState } from "react"
import { Flag } from "../types/Flag"
import { generateNewFlag } from "../utils/flag"
import { useBackgroundLocation, useLocationUpdates } from "@gabriel-sisjr/react-native-background-location"
import { Fare } from "../types/Fare"

export const useFlag = () => {
  const [ flag, setFlag ] = useState<Flag>()
  
  const {
    startTracking,
    stopTracking,
    isTracking
  } = useBackgroundLocation({
    onError: (err) => console.error(err),
  });

  useLocationUpdates({
    onLocationUpdate: (location) => {
      if(!flag){
        return
      }

      console.warn("onLocationUpdate")    
  
      const { longitude, latitude} = location
      const newFlag = generateNewFlag(flag, {longitude : parseFloat(longitude), latitude: parseFloat(latitude)})
      
      console.warn("newFlag: ", newFlag)

      console.log('New location:', location);
    },
  });
  

    // AppState.addEventListener("change", async (state) => {
      // if (state === "active" && flag.id){
        // const gotten = await getFlag(flag.id)
        // setFlag(gotten)
      // }
    // })

  const start = async (newFlag : Fare ) => {
    startTracking()
    setFlag({
      ...newFlag,
      finalPrice:0,
     route:[],
     distance:0
    })
  }

  const reset = () => setFlag(undefined)
  const stop = async () => {
    await stopTracking()
    setFlag(undefined)
  }
  return {
    start,
    flag,
    reset,
    stop,
    started: !!flag
  }
}
