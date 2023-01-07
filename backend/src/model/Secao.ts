export default class Secao {
    id?: number
    nome: string;
    tipo: string
    zona_id:number
    constructor({ nome, tipo,zona_id }: { nome: string, tipo: string, zona_id:number }) {
        this.nome = nome
        this.tipo = tipo;
        this.zona_id = zona_id
    }
}