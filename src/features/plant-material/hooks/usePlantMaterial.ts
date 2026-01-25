import { useState } from "react"
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
    realm.write(() => {
      realm.create("PlantMaterial", PlantMaterial.generate(plantMaterial))
    })
  }
  
  return {
    plantMaterials,
    create
  }

}
