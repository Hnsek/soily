import { database } from "../database"
import { FlagModel } from "../database/models/flag"
import { CreateFlag } from "../features/taximeter/dtos/CreateFlag"
import { UpdateFlag } from "../features/taximeter/dtos/UpdateFlag"
import { Flag } from "../features/taximeter/types/Flag"

const table = database.get<FlagModel>("flag")

export const createFlag = async (flag: CreateFlag) : Promise<Flag>=> {
  const model = await database.write(() => {
    return table.create((model) => {
      assignFlagToModel(model, flag)
    })
  })

  return model.getData()
}

export const updateFlag = async (id: string, flag: Flag) => {
  const model = await table.find(id);
  
  const updatedModel = await database.write(() => {
    return model.update((model) => assignFlagToModel(model, flag))
  })

  return updatedModel.getData()
}

export const getFlag = async (id: string) => {
  const model = await table.find(id)
  return model.getData()
}

export const upsertFlag = async (flag: Flag) => {
  if(!flag.id){
    return createFlag(flag)
  }

  const model = await getFlag(flag.id)

  if(model.id){
    return updateFlag(flag.id, flag)
  }

  return createFlag(flag)
}

const assignFlagToModel = (model : FlagModel, flag : CreateFlag | UpdateFlag) => {
  model.price = flag.price
  model.currency = flag.currency
  model.distance = flag.distance
  model.route = flag.route
}
