import { SafeAreaView } from "react-native-safe-area-context"
import { AnimatedMapMarker, LineLayer, Map, MapCamera, ShapeSource } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Location } from "../../types/location"
import { Car } from "lucide-react-native"
import { StartTaximeter } from "./components/StartTaximeter"
import { RunningTaximeter } from "./components/RunningTaximeter"
import { useFlag } from "./hooks/useFlag"

type TaximeterProps = {
  initialLocation:  Location
}


export const Taximeter = ({ initialLocation} : TaximeterProps) => {
  
  const { location } = useLocation(initialLocation) as { location : Location}  

  const { cameraRef } = useCamera(location)
  
  const { flag, start, started } = useFlag()
  
  return <SafeAreaView>
      <Map>
        <MapCamera ref={cameraRef} zoomLevel={17} centerCoordinate={[location.longitude, location.latitude]}/>
        <AnimatedMapMarker coordinate={[location.longitude, location.latitude]}>
          <Car height={40} width={40}/>
        </AnimatedMapMarker>
        {
          flag.route.length > 1 ?
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
        started ?
          <RunningTaximeter flag={flag}/>
          :
          <StartTaximeter onStart={(formValues) => start({
            currency:formValues.currency,
            price: formValues.price,
            route: [ [ location.longitude, location.latitude ] ],
            distance: 0
          })}/> 
      }
  </SafeAreaView>
}
