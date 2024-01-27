/*
    Getters e Setters são usados para proteger seus dados, especialmente na criação de classes.

    Para cada isntancia de variavel, um metodo getter retorna seu valor, enquanto um metodo setter o define ou atualiza.
*/


class Pessoa{ 
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
}

class Gomes extends Pessoa{
    private _profissao: string = "Programador";

    constructor(){
        super("Gomes", 23)
    }

    get profissao(){ //get nao nessecita de um parametro
        if(this._profissao === "Developer"){
            return `Ele nao e mais um programador mudou para ${this._profissao}.`;
        }
        return this._profissao;
    }

    set profissao(valor: string){ //set deve ter um parametro
        this._profissao = valor;
    }
}

const gomes = new Gomes();
console.log(gomes.profissao);
gomes.profissao = "Developer"
console.log(gomes.profissao);



