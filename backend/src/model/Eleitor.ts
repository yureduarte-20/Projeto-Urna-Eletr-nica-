import { genCryptedPassword, genCryptedPasswordSync, verifyPassword } from "../utils/passwordHasher";

export default class Eleitor {
    public id?: number;
    public titulo : string;
    private _senha:string;
    public nome: string;
    constructor(
        { id, titulo, senha, nome } : { id?: number, titulo:string, senha:string, nome:string}
    ) {
        this._senha = genCryptedPasswordSync(senha);
        this.titulo = titulo;
        this.id = id;
        this.nome = nome
     }
    public set senha(senha : string){
        this._senha = genCryptedPasswordSync(senha)
    }
    public get senha (){
        return this._senha
    }
    private codify(senha: string): string {
        return senha
    }
    public async verifysenha(codifysenha : string) : Promise<boolean>{
        return verifyPassword (this._senha, codifysenha)
    }
    
    
}