import { useEffect, useState } from "react"
import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";
import { Location, Position } from "../types/location";
import { getCurrentPosition, watchPosition } from "../services/location";


type UseLocationResult = {
  location: Location | undefined
}

const convertPositionToLocation = (position : GeolocationResponse) : Location => {
  return position.coords
}

export default (initialPosition?: Position) : UseLocationResult => {
    const [location, setLocation] = useState<Location>();

    useEffect(() => {
      
      if(initialPosition){
        setLocation(initialPosition.location)
      }
      else{
        getCurrentPosition()
          .then((position) => setLocation(position.location))
      }

      const watchPositionId = watchPosition((position) => setLocation(position.location))


      return () => {
        Geolocation.clearWatch(watchPositionId)
      }

    }, [])

    return {
      location
    }
}
