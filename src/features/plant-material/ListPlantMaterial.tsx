import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/Button"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlanting">

export const ListPlantMaterial= ({ navigation } : Props)=> {
  return <SafeAreaView className="w-full h-full bg-background">
    <View className="w-full absolute bottom-0 p-4 flex items-center justify-center">
      <Button className="w-full" >
        <Text className="text-white text-xl">Registrar</Text>
      </Button> 
    </View> 
  </SafeAreaView>
}
