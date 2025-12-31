import { CameraRef } from "@maplibre/maplibre-react-native"
import { useEffect, useRef } from "react"
import { Location } from "../types/location"

export const useCamera = (location? : Location) => {
  const cameraRef = useRef<CameraRef>(null)

  useEffect(() => {

      if(!location){
        return
      }

      cameraRef.current?.setCamera({
        centerCoordinate: [location.longitude, location.latitude],
        zoomLevel: 17
      })
      
  }, [location])


  return { cameraRef }
}
  
