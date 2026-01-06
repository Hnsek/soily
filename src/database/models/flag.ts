import { Model } from "@nozbe/watermelondb";
import { field, json } from '@nozbe/watermelondb/decorators'

export class FlagModel extends Model{
  static table: string = "flag";

  @field("distance") distance! : number;
  @field("currency") currency! : string;
  @field("price") price! : number;
  @json("route",  route => Array.isArray(route) ? route : [] ) route! : [longitude: number, latitude: number][]; 
 
}
