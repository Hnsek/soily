import { PlantingMaterial } from "../../../database/models/planting-material"
import { useQuery, useRealm } from "@realm/react"

type CreatePlantMaterial = {
  name: string;
  quantity: number;
}

export const usePlantingMaterial = () => {
  const realm = useRealm()
  const plantMaterials = useQuery(PlantingMaterial)

    
  const create = (plantMaterial : CreatePlantMaterial) => {
    realm.write(() => {
      realm.create(PlantingMaterial.schemaName, PlantingMaterial.generate(plantMaterial))
    })
  }

  const update = (id : Realm.BSON.ObjectId, plantMaterial : Partial<PlantingMaterial>) => {
    realm.write(() => {
      const found = realm.objectForPrimaryKey(PlantingMaterial.schemaName, id)
    
      if(found){
        Object.entries(plantMaterial).forEach(([key,value]) => {
          found[key] = value
        })
      }
    })
  }
  
  return {
    plantMaterials: plantMaterials.toJSON() as unknown as PlantingMaterial[],
    create,
    update
  }

}
