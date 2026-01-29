import { Button } from "../../../components/Button"
import { Card, CardContainer } from "../../../components/Card"
import { Text } from "../../../components/Text"
import { PlantingMaterial } from "../../../database/models/plant-material"

export type PlantMaterialCardProps = {
  plantMaterial: PlantingMaterial,
  onCreatePlanting: ( plantMaterial : PlantingMaterial) => unknown
}
export const PlantMaterialCard = ({plantMaterial, onCreatePlanting} : PlantMaterialCardProps) => {
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
