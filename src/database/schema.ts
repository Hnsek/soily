import { appSchema } from "@nozbe/watermelondb";
import { flagTable } from "./tables/flag";

export default appSchema({
  version:1,
  tables:[
    flagTable
  ]
})
