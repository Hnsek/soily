import { SafeAreaView } from "react-native-safe-area-context"
import { AnimatedMapMarker, Map, MapCamera } from "../../components/Map"
import useLocation from "../../hooks/useLocation"
import { useCamera } from "../../hooks/useCameraRef"
import { Location } from "../../types/location"
import { Car } from "lucide-react-native"
import { BottomSheet, BottomSheetView } from "../../components/BottomSheet"
import { Text } from "react-native"
import { TextInput } from "../../components/Input"
import { useState } from "react"
import { useTaximeterForm } from "./forms/useTaximeterForm"

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
          <Text className="text-xl font-bold">Value per KM</Text>
          <TextInput {...form.register("value")} inputMode="numeric" keyboardType="numeric"/>
        </BottomSheetView>
      </BottomSheet>
</SafeAreaView>
}
