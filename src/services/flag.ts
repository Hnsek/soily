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
  return model
}

export const updateFlag = async (id: string, flag: Flag) => {
  const model = await table.find(id);
  
  const updatedModel = await database.write(() => {
    return model.update((model) => Object.assign(model, flag))
  })

  return updatedModel
}

export const getFlag = async (id: string) => {
  const model = await table.find(id)
  return model
}

export const upsertFlag = async (flag: Flag) => {
  if(!flag.id){
    return createFlag(flag)
  }

  const model = await table.find(flag.id)

  if(model.id){
      return model.update((model) => Object.assign(model,flag))
  }

  return createFlag(flag)
}
