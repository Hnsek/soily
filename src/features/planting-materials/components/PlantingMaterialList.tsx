import { FlatList, ListRenderItem, View, Text } from "react-native"
import { PlantingMaterial } from "../../../database/models/planting-material"

type PlantingMaterialListProps = {
  plantMaterials: PlantingMaterial[]
  renderItem: ListRenderItem<PlantingMaterial>
}
export const PlantingMaterialList = ({ plantMaterials, renderItem } : PlantingMaterialListProps) => {
  return <View className="flex-1 w-full">
    <FlatList
      className="w-full gap-2 flex-1"
      data={plantMaterials}
      keyExtractor={(item) => item._id.toHexString()}
      renderItem={renderItem}
      contentContainerStyle={{gap: 10}}
      ListEmptyComponent={() => <ListEmptyComponent/>}
      contentContainerClassName="h-full" 
      />
  </View>
}

const ListEmptyComponent = () => {
  return <View className="w-full flex-1 flex flex-col justify-center items-center">
    <Text className="text-2xl">Nenhuma semente ou muda criada.</Text>
  </View>
}

