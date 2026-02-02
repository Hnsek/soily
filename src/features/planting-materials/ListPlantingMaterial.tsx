import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { modalStore } from "../../components/Modal"
import { PlantingMaterialFormData } from "./components/PlantingMaterialForm"
import { View } from "react-native"
import { Button } from "../../components/Button"
import { Text } from "../../components/Text"
import { PlantingMaterialList } from "./components/PlantingMaterialList"
import { usePersistPlantingMaterial } from "./hooks/usePersistPlantingMaterial"
import { PlantingMaterialTitle } from "./components/PlantingMaterialTitle"
import { CreatePlantingModal } from "../plantings/components/CreatePlantingModal"
import { CreatePlantingMaterialModal } from "./components/CreatePlantingMaterialModal"

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">

export const ListPlantingMaterial= ({ navigation } : Props)=> {
  
  const { createPlantingMaterial } = usePersistPlantingMaterial()

  return <SafeAreaView className="w-full h-full bg-background p-4 flex flex-col items-center">
    <PlantingMaterialTitle>Sementes/Mudas</PlantingMaterialTitle>
    <PlantingMaterialList />
    <CreatePlantingModal/>
    <View className="w-full flex items-center justify-center pt-5">
      <Button className="w-full" onPress={() => modalStore.show("register-planting-material-modal")}>
        <Text className="text-white text-xl">Registrar</Text>
      </Button> 
    </View>
    <CreatePlantingMaterialModal/>
  </SafeAreaView>
}
