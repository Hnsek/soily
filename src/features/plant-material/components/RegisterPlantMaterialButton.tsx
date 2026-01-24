import { View } from "react-native"
import { Button } from "../../../components/Button"
import { Text } from "../../../components/Text"
import { useModal } from "../../../components/Modal"

export const RegisterPlantMaterialButton = () => {
  const { show } = useModal()

  return <>
    <View className="w-full absolute bottom-0 p-4 flex items-center justify-center">
      <Button className="w-full" onPressOut={() => show()}>
        <Text className="text-white text-xl">Registrar</Text>
      </Button> 
    </View>
  </>
}
