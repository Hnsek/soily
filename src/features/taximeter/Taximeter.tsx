import { SafeAreaView } from "react-native-safe-area-context"
import { AnimatedMapMarker, LineLayer, Map, MapCamera, ShapeSource } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Location } from "../../types/location"
import { Car } from "lucide-react-native"
import { StartTaximeter } from "./components/StartTaximeter"
import { RunningTaximeter } from "./components/RunningTaximeter"
import { useFlag } from "./hooks/useFlag"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteList } from "../../Router"
import { Fare } from "./types/Fare"
import { CreateFlag } from "./dtos/CreateFlag"

type TaximeterProps = {
  initialLocation:  Location
}

type Navigation = NativeStackNavigationProp<RouteList,"Taximeter">

export const Taximeter = ({ initialLocation} : TaximeterProps) => {
  
  const { location } = useLocation(initialLocation) as { location : Location}  

  const { cameraRef } = useCamera(location)
  
  const { flag, start } = useFlag()
  
  const navigation = useNavigation<Navigation>()

  return <SafeAreaView>
      <Map>
        <MapCamera ref={cameraRef} zoomLevel={17} centerCoordinate={[location.longitude, location.latitude]}/>
        <AnimatedMapMarker coordinate={[location.longitude, location.latitude]}>
          <Car height={40} width={40}/>
        </AnimatedMapMarker>
        {
          flag && flag.route.length > 1 ?
           <ShapeSource id="route-shape" shape={{
             type: 'Feature',
             geometry: {
               type: 'LineString',
               coordinates: flag.route,
             },
             properties: {},
           }}>
             <LineLayer id="route-line" style={{ lineColor: '#36D7F4', lineWidth: 5 }} />
          </ShapeSource>
          :
            undefined
        }
      </Map>
      {
        flag ?
          <RunningTaximeter flag={flag} onStop={() => navigation.navigate("TaximeterDetails",{ flag })}/>
          :
          <StartTaximeter onStart={(fare) => start(fare)}/> 
      }
  </SafeAreaView>
}
