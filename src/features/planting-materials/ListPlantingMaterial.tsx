import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Modal, ModalBackground, modalStore } from "../../components/Modal"
import { PlantingMaterialForm, PlantingMaterialFormData } from "./components/PlantingMaterialForm"
import { View } from "react-native"
import { Button } from "../../components/Button"
import { Text } from "../../components/Text"
import { PlantingMaterialList } from "./components/PlantingMaterialList"
import { useState } from "react"
import { PlantingMaterial } from "../../database/models/planting-material"
import { CreatePlanting } from "../../dtos/planting"
import { usePersistPlantingMaterial } from "./hooks/usePersistPlantingMaterial"
import { PlantingMaterialTitle } from "./components/PlantingMaterialTitle"
import { PlantingForm } from "../plantings/components/PlantingForm"
import { CreatePlantingModal } from "../plantings/components/CreatePlantingModal"

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">

export const ListPlantingMaterial= ({ navigation } : Props)=> {
  
  const { createPlantingMaterial } = usePersistPlantingMaterial()

  const onSubmit = (plantingMaterial : PlantingMaterialFormData) => {
    createPlantingMaterial({...plantingMaterial, currentQuantity: plantingMaterial.initialQuantity})
    modalStore.close("register-planting-material-modal")
  }

  return <SafeAreaView className="w-full h-full bg-background p-4 flex flex-col items-center">
    <PlantingMaterialTitle>Sementes/Mudas</PlantingMaterialTitle>
    <PlantingMaterialList />
    <CreatePlantingModal/>
    <View className="w-full flex items-center justify-center pt-5">
      <Button className="w-full" onPress={() => modalStore.show("register-planting-material-modal")}>
        <Text className="text-white text-xl">Registrar</Text>
      </Button> 
    </View>
    <Modal id="register-planting-material-modal" transparent>
      <ModalBackground className="flex flex-col justify-end">
        <PlantingMaterialForm 
          onSubmit={onSubmit}
          onClose={() => modalStore.close("register-planting-material-modal")}
          />
      </ModalBackground>  
    </Modal>
  </SafeAreaView>
}
