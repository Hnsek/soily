import { Model } from "@nozbe/watermelondb";
import { field, json } from '@nozbe/watermelondb/decorators'

export class FlagModel extends Model{
  static table: string = "flag";

  @field("distance") distance : any;
  @field("currency") currency : any;
  @field("price") price : any;
  @json("route",  route => Array.isArray(route) ? route : [] ) route : any; 
 
}
