import { useEffect, useState } from "react"
import { Location } from "../types/location";
import { useBackgroundLocation, useLocationUpdates } from "@gabriel-sisjr/react-native-background-location";

type UseLocationResult = {
  location: Location | undefined
}

export default (initialLocation?: Location) : UseLocationResult => {
    const [location, setLocation] = useState<Location | undefined>(initialLocation);

    
  const {
    startTracking,
    stopTracking,
  } = useBackgroundLocation({
    onError: (err) => console.error(err),
  });

  useLocationUpdates({
    onLocationUpdate: (location) => {
      const { longitude, latitude, speed, accuracy, altitude } = location 
      setLocation({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        speed: speed || null,
        accuracy: accuracy || null,
        altitude: altitude || null,
        heading: 0,
        altitudeAccuracy:0
      })
    },
  });

    useEffect(() => {
      
      startTracking()    

      return () => {
        stopTracking()
      }

    }, [])

    return {
      location
    }
}
