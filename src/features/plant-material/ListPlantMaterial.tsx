import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Modal, ModalBackground, ModalContainer } from "../../components/Modal"
import { PlantMaterialForm } from "./components/PlantMaterialForm"
import { RegisterPlantMaterialButton } from "./components/RegisterPlantMaterialButton"

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">

export const ListPlantMaterial= ({ navigation } : Props)=> {
  return <SafeAreaView className="w-full h-full bg-background">
    <ModalContainer>
      <RegisterPlantMaterialButton/>
      <Modal transparent>
        <ModalBackground className="flex flex-col justify-end">
          <PlantMaterialForm/>
        </ModalBackground>  
      </Modal>
      <View className="w-full absolute bottom-0 p-4 flex items-center justify-center">
        <Button className="w-full" onPressOut={() => modalStore.show("register-plant-material-modal")}>
          <Text className="text-white text-xl">Registrar</Text>
        </Button> 
      </View>
    </ModalContainer>
  </SafeAreaView>
}
