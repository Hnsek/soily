import { database } from "../database"
import { FlagModel } from "../database/models/flag"
import { Flag } from "../features/taximeter/types/Flag"

const table = database.get<FlagModel>("flag")

export const createFlag = async (flag: Flag) : Promise<Flag>=> {
  const model = await database.write(() => {
    return table.create((model) => {
      Object.assign(model, flag)
    })
  })
  return extractProperties(model)
}

export const updateFlag = async (id: string, flag: Flag) => {
  const model = await table.find(id);
  
  const updatedModel = await database.write(() => {
    return model.update((model) => Object.assign(model, flag))
  })

  return extractProperties(updatedModel)
}

// export const deleteFlag = (flag: Flag) => database.remove(flag)

export const getFlag = async (id: string) => {
  const model = await table.find(id)
  return extractProperties(model)
}
// export const watchFlag = (options?: PouchDB.Core.ChangesOptions) => database.changes(options)
//

export const upsertFlag = async (id: string, flag: Flag) => {
  const model = await table.find(id)

  if(model.id){
      return model.update((model) => Object.assign(model,flag))
  }

  return createFlag(flag)
}

const extractProperties = (model : FlagModel) => {
  const {price, distance, currency, route, id} = model
  return {price, distance, currency, route, id}  
}
