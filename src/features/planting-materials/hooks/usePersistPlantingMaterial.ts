import { useRealm } from "@realm/react"
import { CreatePlantingMaterial } from "../../../dtos/planting-materials"
import { PlantingMaterial } from "../../../database/models/planting-material"

export const usePersistPlantingMaterial = () => {
  const realm = useRealm()
  
  const createPlantingMaterial = (plantingMaterial : CreatePlantingMaterial) => {
    realm.write(() => {
      realm.create(PlantingMaterial.schemaName, PlantingMaterial.generate(plantingMaterial))
    })
  }

  const updatePlantingMaterial = (id : Realm.BSON.UUID, plantingMaterial : Partial<PlantingMaterial>) => {
    realm.write(() => {
      const found = realm.objectForPrimaryKey(PlantingMaterial.schemaName, id)
    
      if(found){
        Object.entries(plantingMaterial).forEach(([key,value]) => {
          found[key] = value
        })
      }
    })
  }

  return { createPlantingMaterial, updatePlantingMaterial }
}
