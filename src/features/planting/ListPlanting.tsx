import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/Button"

export const ListPlanting = () => {
  return <SafeAreaView className="h-screen w-screen bg-background">
    <View className="w-full absolute bottom-0 p-4 flex items-center justify-center">
      <Button className="w-full">
        <Text>Registrar</Text>
      </Button> 
    </View> 
  </SafeAreaView>
}
