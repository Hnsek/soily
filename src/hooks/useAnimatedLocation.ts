import { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated"
import { Location } from "../types/location"
import { useEffect } from "react"

export default (location?: Location) => {
  const coordinates = useSharedValue([0,0])
  
  const animatedLocation = useAnimatedProps(() => ({
    longitude: coordinates.value[0],
    latitude: coordinates.value[1]
  }))

  useEffect(() => {
    if(!location){
      return
    }

    coordinates.value = withTiming([location.longitude, location.latitude], { duration : 1000 })
  }, [location])

  return animatedLocation
}
