import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Map, MapCamera } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useEffect, useRef } from "react"
import { CameraRef } from "@maplibre/maplibre-react-native"


export const Taximeter = () => {
  const { location } = useLocation()  

  console.warn([location?.longitude, location?.latitude] )
  
  const cameraRef = useRef<CameraRef>(null)
  
  useEffect(() => {

      if(!location){
        return
      }

      cameraRef.current?.setCamera({
        centerCoordinate: [location.longitude, location.latitude],
        zoomLevel: 17
      })
  }, [location])

  return <SafeAreaView>
      <Map>
              <MapCamera ref={cameraRef}/>
      </Map>
</SafeAreaView>
}
