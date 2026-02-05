import { FlatList, View, Text } from "react-native"
import { usePlantingMaterial } from "../hooks/usePlantingMaterial"
import { PlantingMaterialCard } from "./PlantingMaterialCard"
import { usePlantingMaterialAction } from "../stores/usePlantingMaterialAction"

export const PlantingMaterialList = () => {
  const { plantingMaterials } = usePlantingMaterial()
  const { setAction } = usePlantingMaterialAction()

  return <View className="flex-1 w-full">
    <FlatList
      className="w-full gap-2 flex-1"
      data={plantingMaterials}
      keyExtractor={(item) => item._id.toHexString()}
      renderItem={({item: plantingMaterial}) => <PlantingMaterialCard 
          plantingMaterial={plantingMaterial} 
          onCreatePlanting={() => { setAction(plantingMaterial, "planting") }}/>}
      ListEmptyComponent={() => <ListEmptyComponent/>}
      contentContainerClassName="h-full gap-3" 
      />
  </View>
}

const ListEmptyComponent = () => {
  return <View className="w-full flex-1 flex flex-col justify-center items-center">
    <Text className="text-2xl">Nenhuma semente ou muda criada.</Text>
  </View>
}

