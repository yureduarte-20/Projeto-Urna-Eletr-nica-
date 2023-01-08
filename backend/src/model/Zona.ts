import Secao from "./Secao";

export default class Zona {
    secoes?: Secao[];
    nome: string;
    tipo: string;
    id?:number
    constructor({ secoes, nome, tipo }: { secoes?: Secao[], nome: string, tipo: string }) {
        this.secoes = secoes;
        this.nome = nome
        this.tipo = tipo
    }
}