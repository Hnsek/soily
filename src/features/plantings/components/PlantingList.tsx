import { FlatList, View, Text } from "react-native"
import { PlantingCard } from "./PlantingCard"
import { usePlantings } from "../hooks/usePlantings"
import { useHarvestAction } from "../../harvest/stores/useHarvestAction"

export const PlantingList = () => {
  const { plantings } = usePlantings()
  const { setAction } = useHarvestAction()

  return <View className="flex-1 w-full">
    <FlatList
      className="w-full gap-2 flex-1"
      data={plantings}
      keyExtractor={(item) => item._id.toHexString()}
      renderItem={({item: planting}) => <PlantingCard 
          planting={planting} 
          onHarvest={() => { setAction(planting,"harvest") }}/>}
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

