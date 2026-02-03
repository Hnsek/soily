import { useRealm } from "@realm/react"
import { Planting } from "../../../database/models/planting"
import { CreatePlanting } from "../../../dtos/planting"

export const usePersistPlanting = () => {
  const realm = useRealm()
  
  const createPlanting = (planting : CreatePlanting) => {
    realm.write(() => {
      realm.create(Planting.schemaName, Planting.generate(planting))
    })
  }

  const updatePlanting = (id : Realm.BSON.UUID, planting : Partial<Planting>) => {
    realm.write(() => {
      const found = realm.objectForPrimaryKey(Planting.schemaName, id)
    
      if(found){
        Object.entries(planting).forEach(([key,value]) => {
          found[key] = value
        })
      }
    })
  }

  return { createPlanting, updatePlanting }
}
