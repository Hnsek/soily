import { FlatList, View } from "react-native"
import { Card, CardContainer } from "../../../components/Card"
import { Text } from "../../../components/Text"
import { Button } from "../../../components/Button"
import { PlantMaterial } from "../../../database/models/plant-material"
import { Modal, ModalBackground, modalStore } from "../../../components/Modal"
import { PlantingForm } from "./PlantingForm"
import { useState } from "react"

type PlantMaterialListProps = {
  plantMaterials: PlantMaterial[]
}
export const PlantMaterialList = ({ plantMaterials } : PlantMaterialListProps) => {
  const [plantMaterialSelected, setPlantMaterialSelected] = useState<PlantMaterial>()
  
  const showPlantingForm = (plantMaterial : PlantMaterial) => {
    setPlantMaterialSelected(plantMaterial)
  }

  const hidePlantingForm = () => {
    setPlantMaterialSelected(undefined)
  }

  return <View className="flex-1 w-full">
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
          <Button onPressOut={() => showPlantingForm(item)}>
            <Text>Plantar</Text>
          </Button> 
        </Card> 
      }}
      contentContainerStyle={{gap: 10}}
      />
    <Modal visible={!!plantMaterialSelected} transparent>
      <ModalBackground className="flex flex-col justify-end">
        <PlantingForm
          onClose={hidePlantingForm}
        />
      </ModalBackground>
    </Modal>
  </View>
}
