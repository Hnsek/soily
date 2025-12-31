import { SafeAreaView } from "react-native-safe-area-context"
import { Map, MapCamera } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"


export const Taximeter = () => {
  const { location } = useLocation()  

  const { cameraRef } = useCamera(location)

  return <SafeAreaView>
      <Map>
        <MapCamera ref={cameraRef}/>
      </Map>
</SafeAreaView>
}
