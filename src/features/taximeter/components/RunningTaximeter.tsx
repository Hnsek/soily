import { BottomSheet, BottomSheetView } from "../../../components/BottomSheet"
import { Text, View } from "react-native"
import { Button } from "../../../components/Button"
import { Flag } from "../types/Flag"

type RunningTaximeterProps = {
  flag:Flag
}

const calculateFinalPrice = (distance : number, price: number) => {
  if(!distance) {
    return 0
  }

  return (distance / 1000) * price
} 

export const RunningTaximeter = ({ flag }: RunningTaximeterProps) => {
  
  

  return <BottomSheet index={1} snapPoints={["5%","25%"]} className="absolute h-full w-full" enableDynamicSizing enableHandlePanningGesture enableContentPanningGesture>
    <BottomSheetView className="p-5 gap-2">
      <View className="flex flex-row">
        <View className="flex-1">
          <Text className="text-xl font-bold">Price per KM: ${flag.price}</Text>     
          <Text className="text-xl font-bold">Distance: {flag.distance ? flag.distance / 1000 : 0} KM</Text>     
        </View>                      

        <View className="flex-1 flex flex-row items-center justify-end">
          <Text className="text-3xl font-bold">${calculateFinalPrice(flag.distance, flag.price)}</Text>     
        </View>
      </View>                                                               
      <View>
        <Button className="bg-red-500" onPress={()=> {
          }}>
            <Text className="text-xl text-white font-bold">Finish</Text>
        </Button>
      </View>        
    </BottomSheetView>
  </BottomSheet>

}
