import { SafeAreaView } from "react-native-safe-area-context"
import { Map, MapCamera } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Location } from "../../types/location"


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
