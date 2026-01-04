import { tableSchema } from "@nozbe/watermelondb";

export const flagTable = tableSchema({
  name:"flag",
  columns:[
    { name:"distance", type:"number" },
    { name:"route", type:"string" },
    { name:"currency", type:"string" },
    { name:"price", type:"number" },
  ]
})
