import { PlantingMaterial } from "../../../database/models/planting-material"
import { useQuery } from "@realm/react"


export const usePlantingMaterial = () => {
  const plantingMaterials = useQuery(PlantingMaterial)
  return {
    plantingMaterials: plantingMaterials as unknown as PlantingMaterial[],
  }

}
