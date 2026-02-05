import { Button } from "../../../components/Button"
import { Card, CardContainer } from "../../../components/Card"
import { Text } from "../../../components/Text"
import { Planting } from "../../../database/models/planting"

const formatNumber = (number : number) => {
  return String(number).replace(".", ",")
}

export type PlantingCardProps = {
  planting: Planting,
  onHarvest: ( planting : Planting) => unknown
}
export const PlantingCard = ({planting, onHarvest} : PlantingCardProps) => {
  return <Card key={ planting._id.toHexString()}>
          <CardContainer>
            <Text className="text-black font-bold">{planting.plantingMaterial.name}</Text>
            <Text className="text-black">{formatNumber(planting.quantity)} KG</Text>
          </CardContainer>  
          <Button onPress={() => onHarvest(planting)}>
            <Text>Colher</Text>
          </Button> 
        </Card> 
}
