import { useRealm } from "@realm/react"
import { CreateHarvest } from "../../../dtos/harvest"
import { Harvest } from "../../../database/models/harvest"

export const usePersistHarvest = () => {
  const realm = useRealm()

  const createHarvest = (harvest : CreateHarvest) => {
    realm.write(() => {
      realm.create(Harvest.schemaName, Harvest.generate(harvest))
    })
  }
  
  const updateHarvest = (id : Realm.BSON.UUID, harvest : Partial<Harvest>) => {
    realm.write(() => {
      const found = realm.objectForPrimaryKey(Harvest.schemaName, id)
    
      if(found){
        Object.entries(harvest).forEach(([key,value]) => {
          found[key] = value
        })
      }
    })
  }

  return {
    createHarvest,
    updateHarvest
  }
}
