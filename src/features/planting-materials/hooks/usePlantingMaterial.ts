import { PlantingMaterial } from "../../../database/models/planting-material"
import { useQuery, useRealm } from "@realm/react"

type CreatePlantMaterial = {
  name: string;
  quantity: number;
}

export const usePlantingMaterial = () => {
  const realm = useRealm()
  const plantingMaterials = useQuery(PlantingMaterial)

    
  const create = (plantingMaterial : CreatePlantMaterial) => {
    realm.write(() => {
      realm.create(PlantingMaterial.schemaName, PlantingMaterial.generate(plantingMaterial))
    })
  }

  const update = (id : Realm.BSON.UUID, plantingMaterial : Partial<PlantingMaterial>) => {
    realm.write(() => {
      const found = realm.objectForPrimaryKey(PlantingMaterial.schemaName, id)
    
      if(found){
        Object.entries(plantingMaterial).forEach(([key,value]) => {
          found[key] = value
        })
      }
    })
  }
  
  return {
    plantingMaterials: plantingMaterials.toJSON() as unknown as PlantingMaterial[],
    create,
    update
  }

}
