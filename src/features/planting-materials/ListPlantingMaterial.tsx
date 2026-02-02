import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Modal, ModalBackground, modalStore } from "../../components/Modal"
import { PlantingMaterialForm, PlantingMaterialFormData } from "./components/PlantingMaterialForm"
import { View } from "react-native"
import { Button } from "../../components/Button"
import { Text } from "../../components/Text"
import { usePlantingMaterial } from "./hooks/usePlantingMaterial"
import { PlantingMaterialList } from "./components/PlantingMaterialList"
import { PlantingMaterialCard } from "./components/PlantingMaterialCard"
import { useState } from "react"
import { PlantingMaterial } from "../../database/models/planting-material"
import { PlantingForm, PlantingFormData } from "./components/PlantingForm"
import { CreatePlanting } from "../../dtos/planting"
import { usePersistPlantingMaterial } from "./hooks/usePersistPlantingMaterial"

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">

export const ListPlantingMaterial= ({ navigation } : Props)=> {
  
  const { plantingMaterials } = usePlantingMaterial()
  const { createPlantingMaterial } = usePersistPlantingMaterial()

  const [selectedPlantingMaterial, setSelectedPlantingMaterial] = useState<PlantingMaterial>()
  
  const onSubmit = (plantingMaterial : PlantingMaterialFormData) => {
    createPlantingMaterial({...plantingMaterial, currentQuantity: plantingMaterial.initialQuantity})
    modalStore.close("register-planting-material-modal")
  }
  
  const onPlantingSubmit = (planting : CreatePlanting) => {
    console.warn("planting: ", planting)      
  }

  return <SafeAreaView className="w-full h-full bg-background p-4 flex flex-col items-center">
    <View className="w-full py-6">
      <Text className="text-black text-2xl font-bold">Sementes/Mudas</Text>
    </View>
    <PlantingMaterialList 
      plantingMaterials={plantingMaterials}
      renderItem={({item: plantingMaterial}) => <PlantingMaterialCard plantingMaterial={plantingMaterial} onCreatePlanting={() => setSelectedPlantingMaterial(plantingMaterial)}/>}
      />
    <Modal visible={!!selectedPlantingMaterial} transparent>
      <ModalBackground className="flex flex-col justify-end">
        { selectedPlantingMaterial && <PlantingForm 
          title={selectedPlantingMaterial.name} 
          onClose={() => setSelectedPlantingMaterial(undefined)} 
          onSubmit={(planting) => onPlantingSubmit({...planting, plantingMaterial: selectedPlantingMaterial})}/>
        } 
      </ModalBackground>
    </Modal>
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
