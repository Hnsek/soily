import PouchDB from "pouchdb-react-native"




export class Database<Entity>{
  database : PouchDB.Database<PouchDB.Core.Document<{}> & Entity>
  
  constructor(name : string){
    this.database = new PouchDB(name);
  }

  public put( data: PouchDB.Core.Document<{}> & Entity ){
    return this.database.put(data)
  }
  
  public post( data: PouchDB.Core.Document<{}> & Entity ){
    return this.database.post(data)
  }

  public get( id: string ){
    return this.database.get(id)
  }

  public watch(options? : PouchDB.Core.ChangesOptions){
    return this.database.changes(options)
  }
}
