import { PlantingMaterial } from "../../../database/models/planting-material"
import { useQuery, useRealm, Realm } from "@realm/react"
import { CreatePlantingMaterial } from "../../../dtos/planting-materials"


export const usePlantingMaterial = () => {
  const plantingMaterials = useQuery(PlantingMaterial)
  return {
    plantingMaterials: plantingMaterials as unknown as PlantingMaterial[],
  }

}
