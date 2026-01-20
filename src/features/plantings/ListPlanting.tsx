import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/Button"
import { BottomTabRouteList } from "../../Router"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<BottomTabRouteList,"ListPlanting">
export const ListPlanting = ({navigation} : Props) => {


  return <SafeAreaView className="h-screen w-screen bg-background">
    <View className="w-full absolute bottom-0 p-4 flex items-center justify-center">
      <Button className="w-full" onPressOut={() => navigation.getParent()?.navigate("CreatePlanting")}>
        <Text className="text-white text-2xl">Registrar</Text>
      </Button> 
    </View> 
  </SafeAreaView>
}
