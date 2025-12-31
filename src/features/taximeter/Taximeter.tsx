import { SafeAreaView } from "react-native-safe-area-context"
import { Map, MapCamera } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Loading } from "../../components/Loading"
import { useEffect, useState } from "react"
import { getCurrentPosition } from "../../services/location"
import { Location } from "../../types/location"

export const TaximeterScreen = () => {
  const [location, setLocation] = useState<Location>()

  useEffect(() => {
    getCurrentPosition()
      .then((position) => setLocation(position.location))
  }, [])


  if(!location){
    return <Loading/>
  }

  return <Taximeter initialLocation = {location}/>
}

type TaximeterProps = {
  initialLocation:  Location
}

export const Taximeter = ({ initialLocation} : TaximeterProps) => {
  
  const { location } = useLocation(initialLocation)  

  const { cameraRef } = useCamera(location)

  return <SafeAreaView>
      <Map>
        <MapCamera ref={cameraRef}/>
      </Map>
</SafeAreaView>
}
