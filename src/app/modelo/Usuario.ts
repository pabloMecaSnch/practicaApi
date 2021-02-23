export class Usuario{
    constructor(public id:number,
        public gmail:string,
        public contrasena:string){}

    public static createFromJsonObject(jsonObject:any):Usuario{
        let usuario:Usuario = new Usuario(
            jsonObject['id'],
            jsonObject['gmail'],
            jsonObject['contrasena'])
        return usuario;
    }

    public getJsonObject():any{
        let jsonObject:any={};
        jsonObject['id']=this.id;
        jsonObject['gmail']=this.gmail;
        jsonObject['contrasena']=this.contrasena;
        return jsonObject;
    }
}