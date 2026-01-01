import { SafeAreaView } from "react-native-safe-area-context"
import { AnimatedMapMarker, Map, MapCamera } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Location } from "../../types/location"
import { Car } from "lucide-react-native"
import { BottomSheet, BottomSheetView } from "../../components/BottomSheet"
import { Text, View } from "react-native"
import { TextInput } from "../../components/Input"
import { useTaximeterForm } from "./forms/useTaximeterForm"
// import Picker from "react-native-picker-select"

type TaximeterProps = {
  initialLocation:  Location
}


export const Taximeter = ({ initialLocation} : TaximeterProps) => {
  
  const { location } = useLocation(initialLocation) as { location : Location}  

  const { cameraRef } = useCamera(location)
  
  const form = useTaximeterForm()

  return <SafeAreaView>
      <Map>
        <MapCamera ref={cameraRef} zoomLevel={17} centerCoordinate={[location.longitude, location.latitude]}/>
        <AnimatedMapMarker coordinate={[location.longitude, location.latitude]}>
          <Car height={40} width={40}/>
        </AnimatedMapMarker>
      </Map>
      <BottomSheet className="absolute h-full w-full" enableDynamicSizing enableHandlePanningGesture enableContentPanningGesture>
        <BottomSheetView className="p-5 gap-2">
        <View>
            <Text className="text-xl font-bold">Currency</Text>
            {/* <Picker */}
            {/*   onValueChange={(value : string) => form.setValue("currency", value)} */}
            {/*   items={[ */}
            {/*     { label:"Dollar ($)", value:"dolar" }, */}
            {/*     { label:"Euro (€)", value: "euro"}, */}
            {/*     { label: "Real (R$)", value: "real"} */}
            {/*   ]} */}
            {/* /> */}
          </View>
          <View>
            <Text className="text-xl font-bold">Value per KM</Text>
            <TextInput {...form.register("value")} inputMode="numeric" keyboardType="numeric"/>
          </View>
        </BottomSheetView>
      </BottomSheet>
</SafeAreaView>
}
