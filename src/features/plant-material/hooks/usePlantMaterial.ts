import { useState } from "react"
import { PlantMaterial } from "../../../database/models/plant-material"
import { useQuery, useRealm } from "@realm/react"

type CreatePlantMaterial = {
  name: string;
  quantity: number;
}

export const usePlantMaterial = () => {
  const realm = useRealm()
  const entity = useQuery(PlantMaterial)

  const [data, setData] = useState<PlantMaterial[]>([])
  
  const create = (plantMaterial : CreatePlantMaterial) => {
    realm.write(() => {
      realm.create("PlantMaterial", PlantMaterial.generate(plantMaterial))
    })
  }

  return {
    data,
    create
  }

}
