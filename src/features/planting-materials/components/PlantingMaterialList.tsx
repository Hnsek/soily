import { FlatList, ListRenderItem, View, Text } from "react-native"
import { PlantingMaterial } from "../../../database/models/planting-material"
import { usePlantingMaterial } from "../hooks/usePlantingMaterial"

type PlantingMaterialListProps = {
  renderItem: ListRenderItem<PlantingMaterial>
}
export const PlantingMaterialList = ({ renderItem } : PlantingMaterialListProps) => {
  const { plantingMaterials } = usePlantingMaterial()

  return <View className="flex-1 w-full">
    <FlatList
      className="w-full gap-2 flex-1"
      data={plantingMaterials}
      keyExtractor={(item) => item._id.toHexString()}
      renderItem={renderItem}
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

