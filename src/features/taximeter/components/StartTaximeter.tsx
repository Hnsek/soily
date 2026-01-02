import { BottomSheet, BottomSheetView } from "../../../components/BottomSheet"
import { Text, View } from "react-native"
import { TextInput } from "../../../components/Input"
import { Button } from "../../../components/Button"
import { Controller } from "react-hook-form"
import { filterTextAsNumber } from "../utils/filterTextAsNumber"
import { TaximeterFormValues, useTaximeterForm } from "../hooks/useTaximeterForm"
import { Fare } from "../types/Fare"

type StartTaximeter = {
  onStart: (data: Fare) => void
}

const format = (taximeterFormValues : TaximeterFormValues) : Fare => {
   return Object.assign(taximeterFormValues, { price: parseFloat(taximeterFormValues.price) })

}

export const StartTaximeter = ({onStart} : StartTaximeter) => {
  const form = useTaximeterForm()
  
  return <BottomSheet index={1} snapPoints={["5%","25%"]} className="absolute h-full w-full" enableDynamicSizing enableHandlePanningGesture enableContentPanningGesture>
    <BottomSheetView className="p-5 gap-2">
      <Controller
        control={form.control}
        name="price"
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
          
          onStart(format(form.getValues()))
          }}>
            <Text className="text-xl text-white font-bold">Start</Text>
        </Button>
      </View>        
    </BottomSheetView>
  </BottomSheet>

}
