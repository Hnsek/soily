import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Modal, ModalBackground, ModalContainer, modalStore } from "../../components/Modal"
import { PlantMaterialForm } from "./components/PlantMaterialForm"
import { View } from "react-native"
import { Button } from "../../components/Button"
import { Text } from "../../components/Text"

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">

export const ListPlantMaterial= ({ navigation } : Props)=> {
  return <SafeAreaView className="w-full h-full bg-background">
    <ModalContainer>
      <Modal id="register-plant-material-modal" transparent>
        <ModalBackground className="flex flex-col justify-end">
          <PlantMaterialForm onSubmit={() => modalStore.close("register-plant-material-modal")}/>
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
