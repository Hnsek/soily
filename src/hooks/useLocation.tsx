import { useEffect, useState } from "react"
import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";

type Location = {
  latitude: number;
  longitude: number;
  altitude: number;
  speed: number;
  accuracy: number;
  heading: number;
}

type UseLocationResult = {
  location: Location | undefined
}

const convertPositionToLocation = (position : GeolocationResponse) : Location => {
  
  return {
    heading: position.coords.heading || 0,
    longitude: position.coords.longitude,
    latitude: position.coords.latitude,
    speed: position.coords.speed || 0,
    accuracy: position.coords.accuracy,
    altitude: position.coords.altitude || 0
  }

}

export default () : UseLocationResult => {
    const [location, setLocation] = useState<Location>();

    useEffect(() => {
      
      Geolocation.getCurrentPosition((position) => {
        const location = convertPositionToLocation(position)
        setLocation(location)
      })

      const watchPositionId = Geolocation.watchPosition((position) => {
        const location = convertPositionToLocation(position) 
        setLocation(location)
      }) 
      
      return () => {
        Geolocation.clearWatch(watchPositionId)
      }

    }, [])

    return {
      location
    }
}
