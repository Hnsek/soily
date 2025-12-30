import { useEffect, useState } from "react"
import { clearWatch, GeoPosition, getCurrentPosition, watchPosition } from "react-native-geolocation-service";

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

const convertPositionToLocation = (position : GeoPosition) : Location => {
  
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
      
      getCurrentPosition((position) => {
        const location = convertPositionToLocation(position)
        setLocation(location)
      })

      const watchPositionId = watchPosition((position) => {
        const location = convertPositionToLocation(position) 
        setLocation(location)
      }) 
      
      return () => {
        clearWatch(watchPositionId)
      }

    }, [])

    return {
      location
    }
}
