import { Button } from "../../../components/Button"
import { Card, CardContainer } from "../../../components/Card"
import { Text } from "../../../components/Text"
import { PlantingMaterial } from "../../../database/models/planting-material"

export type PlantingMaterialCardProps = {
  plantMaterial: PlantingMaterial,
  onCreatePlanting: ( plantMaterial : PlantingMaterial) => unknown
}
export const PlantingMaterialCard = ({plantMaterial, onCreatePlanting} : PlantingMaterialCardProps) => {
  return <Card key={ plantMaterial._id.toHexString()}>
          <CardContainer>
            <Text className="text-black font-bold">{plantMaterial.name}</Text>
            <Text className="text-black">{plantMaterial.quantity} KG</Text>
          </CardContainer>  
          <Button onPress={() => onCreatePlanting(plantMaterial)}>
            <Text>Plantar</Text>
          </Button> 
        </Card> 
}
