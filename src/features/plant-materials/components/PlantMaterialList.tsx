import { FlatList, ListRenderItem, View } from "react-native"
import { PlantingMaterial } from "../../../database/models/plant-material"

type PlantMaterialListProps = {
  plantMaterials: PlantingMaterial[]
  renderItem: ListRenderItem<PlantingMaterial>
}
export const PlantMaterialList = ({ plantMaterials, renderItem } : PlantMaterialListProps) => {
  return <View className="flex-1 w-full">
    <FlatList
      className="w-full gap-2 flex-1"
      data={plantMaterials}
      keyExtractor={(item) => item._id.toHexString()}
      renderItem={renderItem}
      contentContainerStyle={{gap: 10}}
      />
  </View>
}

