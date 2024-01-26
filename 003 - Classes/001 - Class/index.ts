/*
Uma classe TypeScript e uma estrutura de programacao orientada a objetos que possui um conjunto de propriedades e metodos.

A classe e um modelo para criar objetos, permitindo que voce defina uma estrutura com propriedades e comportamentos.
*/

class Pessoa{ 
    nome: string //= "Caique Gomes";
    idade : number // = 23 ;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Caique Gomes", 23);

console.log(pessoa1.nome);
console.log(pessoa1.idade);

