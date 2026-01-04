import { database } from "../database"
import { FlagModel } from "../database/models/flag"
import { Flag } from "../features/taximeter/types/Flag"

const table = database.get<FlagModel>("flag")

export const createFlag = async (flag: Flag) : Promise<Flag>=> {
  const {price, distance, currency, route, id} = await database.write(() => {
    return table.create((model) => {
      Object.assign(model, flag)
    })
  })
  return {price, distance, currency, route, id} 
}

// export const updateFlag = (flag: Flag) => {
//   table.get
// }

// export const deleteFlag = (flag: Flag) => database.remove(flag)

export const getFlag = (id: string) => table.find(id)

// export const watchFlag = (options?: PouchDB.Core.ChangesOptions) => database.changes(options)
