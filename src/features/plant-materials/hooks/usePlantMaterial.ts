import { PlantingMaterial } from "../../../database/models/planting-material"
import { useQuery, useRealm } from "@realm/react"

type CreatePlantMaterial = {
  name: string;
  quantity: number;
}

export const usePlantMaterial = () => {
  const realm = useRealm()
  const plantMaterials = useQuery(PlantingMaterial)

    
  const create = (plantMaterial : CreatePlantMaterial) => {
    console.warn(PlantingMaterial.generate(plantMaterial))
    realm.write(() => {
      realm.create(PlantingMaterial.schemaName, PlantingMaterial.generate(plantMaterial))
    })
  }
  
  return {
    plantMaterials: plantMaterials.toJSON() as unknown as PlantingMaterial[],
    create
  }

}
