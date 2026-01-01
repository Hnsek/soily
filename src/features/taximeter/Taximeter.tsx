import { SafeAreaView } from "react-native-safe-area-context"
import { AnimatedMapMarker, Map, MapCamera, MapMarker } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Location } from "../../types/location"
import useAnimatedLocation from "../../hooks/useAnimatedLocation"
import { Car } from "lucide-react-native"

type TaximeterProps = {
  initialLocation:  Location
}

// const AnimatedMapMarker = Animated.createAnimatedComponent(MapMarker as ComponentType<{coordinate: number[], children: ReactElement}>)

export const Taximeter = ({ initialLocation} : TaximeterProps) => {
  
  const { location } = useLocation(initialLocation) as { location : Location}  

  const { cameraRef } = useCamera(location)
  
  const animatedLocation = useAnimatedLocation(location)

  return <SafeAreaView>
      <Map>
        <MapCamera ref={cameraRef}/>
        <AnimatedMapMarker coordinate={[location.longitude, location.latitude]}>
          <Car height={40} width={40}/>
        </AnimatedMapMarker>

        {/*   coordinate:[animatedLocation.longitude, animatedLocation.latitude]  */}
              {/* }}>          */}
              {/*   <Car height={40} width={40}/> */}
              {/* </AnimatedMapMarker> */}
        {/* <MapMarker coordinate={location ? [location.longitude, location.latitude] : []}> */}
        {/*   <Car height={40} width={40}/> */}
        {/* </MapMarker> */}
      </Map>
</SafeAreaView>
}
