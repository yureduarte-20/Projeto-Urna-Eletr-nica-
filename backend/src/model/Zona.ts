import Secao from "./Secao";

export default class Zona {
    secoes?: Secao[];
    nome: string;
    tipo: string;
    id?:number
    constructor({ secoes, nome, tipo, id }: { secoes?: Secao[], nome: string, tipo: string, id?:number }) {
        this.secoes = secoes;
        this.nome = nome
        this.tipo = tipo
        this.id = id
    }
}