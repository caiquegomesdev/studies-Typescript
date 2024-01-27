/*
    Classes, metodos e campos no Typescript podem ser abstratos.

    Um metodo abstrato ou caampo abstrato e aquele que nao teve uma implementacao fornecida.

    O papel das classes abstratas e servir como uma class base para subclasses que implementam todos os membros abstratos.

    Quando uma classe nao possui membros abstratos, ela e chamada de concreta.
*/


abstract class Pessoa{ 
    protected nome: string = "";
    protected idade : number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return`O ${this.nome} comeu ${comida}`
    }

    public fezAniversario(){
        return `O ${this.nome} fez ${this.idade++} anos `
    }
    
    protected abstract profissao: string; //Metodo Abstrado
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalario(salario: number): number;
}

class Caio extends Pessoa{
    protected profissao: string = "Programador";
    constructor(){
        super("Gomes", 23)
    }
    public qualSuaProfissao(): string {
        return `Sua profissao e ${this.profissao}`
    }

    public  qualSeuSalario(salario:number): number {
        return salario
    }
}

class Gomes extends Pessoa{
    protected profissao: string = "Programador";

    constructor(){
        super("Gomes", 23)
    }

    public qualSuaProfissao(): string {
        return `Sua profissao e ${this.profissao}`
    }

    public  qualSeuSalario(salario:number): number {
        return salario
    }
}

const gomes = new Gomes();
const caio = new Caio();

console.log(gomes);
console.log(gomes.qualSuaProfissao());
console.log(caio);
console.log(caio.qualSuaProfissao())


