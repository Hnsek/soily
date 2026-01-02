import { BottomSheet, BottomSheetView } from "../../../components/BottomSheet"
import { Text, View } from "react-native"
import { TextInput } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { Controller } from "react-hook-form"
import { filterTextAsNumber } from "../utils/filterTextAsNumber"
import { useTaximeterForm } from "../forms/useTaximeterForm"

export const StartTaximeter = () => {
  const form = useTaximeterForm()
  
  return <BottomSheet index={1} snapPoints={["5%","25%"]} className="absolute h-full w-full" enableDynamicSizing enableHandlePanningGesture enableContentPanningGesture>
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

}
