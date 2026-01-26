import { PlantMaterial } from "../../../database/models/plant-material"
import { useQuery, useRealm } from "@realm/react"

type CreatePlantMaterial = {
  name: string;
  quantity: number;
}

export const usePlantMaterial = () => {
  const realm = useRealm()
  const plantMaterials = useQuery(PlantMaterial)

    
  const create = (plantMaterial : CreatePlantMaterial) => {
    console.warn(PlantMaterial.generate(plantMaterial))
    realm.write(() => {
      realm.create("PlantMaterial", PlantMaterial.generate(plantMaterial))
    })
  }
  
  return {
    plantMaterials: plantMaterials.toJSON() as unknown as PlantMaterial[],
    create
  }

}
