import { SafeAreaView } from "react-native-safe-area-context"
import { BottomTabRouteList } from "../../Router"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { Modal, ModalBackground, modalStore } from "../../components/Modal"
import { PlantMaterialForm } from "./components/PlantMaterialForm"
import { View } from "react-native"
import { Button } from "../../components/Button"
import { Text } from "../../components/Text"
import { usePlantMaterial } from "./hooks/usePlantMaterial"
import { FlatList } from "react-native-gesture-handler"
import { Card, CardContainer} from "../../components/Card"

type Props = BottomTabScreenProps<BottomTabRouteList,"ListPlantMaterial">

export const ListPlantMaterial= ({ navigation } : Props)=> {
  
  const { plantMaterials, create } = usePlantMaterial()
  
  return <SafeAreaView className="w-full h-full bg-background p-4 flex flex-col items-center">
    <View className="w-full py-6">
      <Text className="text-black text-2xl font-bold">Sementes/Mudas</Text>
    </View>
    <FlatList
      className="w-full gap-2 flex-1"
      data={plantMaterials}
      keyExtractor={(item) => item._id.toHexString()}
      renderItem={({ item }) => {
        return <Card key={ item._id.toHexString()}{...item}>
          <CardContainer>
            <Text className="text-black font-bold">{item.name}</Text>
            <Text className="text-black">{item.quantity} KG</Text>
          </CardContainer>  
          <Button>
            <Text>Plantar</Text>
          </Button> 
        </Card> 
      }}
      contentContainerStyle={{gap: 10}}
      />
    <View className="w-full flex items-center justify-center pt-5">
      <Button className="w-full" onPressOut={() => modalStore.show("register-plant-material-modal")}>
        <Text className="text-white text-xl">Registrar</Text>
      </Button> 
    </View>
    <Modal id="register-plant-material-modal" transparent>
      <ModalBackground className="flex flex-col justify-end">
        <PlantMaterialForm 
          onSubmit={(plantMaterial) => { 
            create(plantMaterial)
            modalStore.close("register-plant-material-modal")
          }}
          onClose={() => modalStore.close("register-plant-material-modal")}
          />
      </ModalBackground>  
    </Modal>
  </SafeAreaView>
}
