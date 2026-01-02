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
import { Button } from "../../components/Button"
import { Controller } from "react-hook-form"
import { filterTextAsNumber } from "./utils/filterTextAsNumber"

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
      <BottomSheet snapPoints={["5%","25%"]} className="absolute h-full w-full" enableDynamicSizing enableHandlePanningGesture enableContentPanningGesture>
        <BottomSheetView className="p-5 gap-2">
          <Controller
            control={form.control}
            name="value"
            render={({field}) => {
             return <View>
              <Text className="text-xl font-bold">Price per KM ($)</Text>     
                <TextInput onChangeText={(text) => field.onChange(filterTextAsNumber(text))} value={`${field.value}`} inputMode="numeric" keyboardType="numeric"/>
              </View>                                                               
            }}
            />
          
          <View>
            <Button onPress={()=> {
                if(!form.formState.isValid){
                   return
                }

                console.warn(form.getValues())

            }}>
              <Text className="text-xl text-white font-bold">Start</Text>
            </Button>
          </View>
        </BottomSheetView>
      </BottomSheet>
</SafeAreaView>
}
