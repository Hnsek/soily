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
    </ModalContainer>
  </SafeAreaView>
}
