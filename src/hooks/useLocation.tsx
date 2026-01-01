import { useEffect, useState } from "react"
import { Location } from "../types/location";
import { clearWatch, getCurrentPosition, watchPosition } from "../services/location";


type UseLocationResult = {
  location: Location | undefined
}

export default (initialLocation?: Location) : UseLocationResult => {
    const [location, setLocation] = useState<Location | undefined>(initialLocation);

    useEffect(() => {
      
      if(!initialLocation){
        getCurrentPosition()
          .then((position) => setLocation(position.location))
      }

      const watchPositionId = watchPosition((position) => {
        setLocation(position.location)
      })


      return () => {
        clearWatch(watchPositionId)
      }

    }, [])

    return {
      location
    }
}
