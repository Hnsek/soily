import { Button } from "../../../components/Button"
import { Card, CardContainer } from "../../../components/Card"
import { Text } from "../../../components/Text"
import { PlantingMaterial } from "../../../database/models/planting-material"

const formatNumber = (number : number) => {
  return String(number).replace(".", ",")
}

export type PlantingMaterialCardProps = {
  plantingMaterial: PlantingMaterial,
  onCreatePlanting: ( plantingMaterial : PlantingMaterial) => unknown
}
export const PlantingMaterialCard = ({plantingMaterial, onCreatePlanting} : PlantingMaterialCardProps) => {
  return <Card key={ plantingMaterial._id.toHexString()}>
          <CardContainer>
            <Text className="text-black font-bold">{plantingMaterial.name}</Text>
            <Text className="text-black">{formatNumber(plantingMaterial.currentQuantity)} KG</Text>
          </CardContainer>  
          <Button onPress={() => onCreatePlanting(plantingMaterial)}>
            <Text>Plantar</Text>
          </Button> 
        </Card> 
}
