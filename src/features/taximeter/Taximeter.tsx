import { SafeAreaView } from "react-native-safe-area-context"
import { AnimatedMapMarker, Map, MapCamera } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Location } from "../../types/location"
import { Car } from "lucide-react-native"
import { StartTaximeterBottomSheet } from "./components/StartTaximeterBottomSheet"
import { useState } from "react"
import { RunningTaximeterBottomSheet } from "./components/RunningTaximeterBottomSheet"

type TaximeterProps = {
  initialLocation:  Location
}


export const Taximeter = ({ initialLocation} : TaximeterProps) => {
  
  const { location } = useLocation(initialLocation) as { location : Location}  

  const { cameraRef } = useCamera(location)
  
  const [isStarted, setIsStarted] = useState(false)

  return <SafeAreaView>
      <Map>
        <MapCamera ref={cameraRef} zoomLevel={17} centerCoordinate={[location.longitude, location.latitude]}/>
        <AnimatedMapMarker coordinate={[location.longitude, location.latitude]}>
          <Car height={40} width={40}/>
        </AnimatedMapMarker>
      </Map>
      {
        isStarted ?
          <RunningTaximeterBottomSheet/>
          :
          <StartTaximeterBottomSheet/> 
      }
  </SafeAreaView>
}
