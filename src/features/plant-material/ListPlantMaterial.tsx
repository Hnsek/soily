import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/Button"
import { BottomTabRouteList, StackRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { CompositeScreenProps } from "@react-navigation/native"

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">,
  NativeStackScreenProps<StackRouteList,"CreatePlantMaterial">
>

export const ListPlantMaterial= ({ navigation } : Props)=> {
  return <SafeAreaView className="w-full h-full bg-background">
    <View className="w-full absolute bottom-0 p-4 flex items-center justify-center">
      <Button className="w-full" onPressOut={() => navigation.navigate("CreatePlantMaterial")}>
        <Text className="text-white text-xl">Registrar</Text>
      </Button> 
    </View> 
  </SafeAreaView>
}
