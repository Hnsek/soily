import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Modal, ModalBackground, modalStore } from "../../components/Modal"
import { PlantingMaterialForm } from "./components/PlantingMaterialForm"
import { View } from "react-native"
import { Button } from "../../components/Button"
import { Text } from "../../components/Text"
import { usePlantingMaterial } from "./hooks/usePlantingMaterial"
import { PlantingMaterialList } from "./components/PlantingMaterialList"
import { PlantingMaterialCard } from "./components/PlantingMaterialCard"
import { useState } from "react"
import { PlantingMaterial } from "../../database/models/planting-material"
import { CreatePlantingModal } from "./components/CreatePlantingModal"

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">

export const ListPlantMaterial= ({ navigation } : Props)=> {
  
  const { plantMaterials, create } = usePlantingMaterial()
  const [selectedPlantingMaterial, setSelectedPlantingMaterial] = useState<PlantingMaterial>()

  return <SafeAreaView className="w-full h-full bg-background p-4 flex flex-col items-center">
    <View className="w-full py-6">
      <Text className="text-black text-2xl font-bold">Sementes/Mudas</Text>
    </View>
    <PlantingMaterialList 
      plantMaterials={plantMaterials}
      renderItem={({item: plantMaterial}) => <PlantingMaterialCard plantMaterial={plantMaterial} onCreatePlanting={() => setSelectedPlantingMaterial(plantMaterial)}/>}
      />
    <CreatePlantingModal plantMaterial={selectedPlantingMaterial!}/> 
    <View className="w-full flex items-center justify-center pt-5">
      <Button className="w-full" onPress={() => modalStore.show("register-planting-material-modal")}>
        <Text className="text-white text-xl">Registrar</Text>
      </Button> 
    </View>
    <Modal id="register-planting-material-modal" transparent>
      <ModalBackground className="flex flex-col justify-end">
        <PlantingMaterialForm 
          onSubmit={(plantMaterial) => { 
            create(plantMaterial)
            modalStore.close("register-planting-material-modal")
          }}
          onClose={() => modalStore.close("register-planting-material-modal")}
          />
      </ModalBackground>  
    </Modal>
  </SafeAreaView>
}
