/*
    A palavra chave static define um metodo estatico para a classe. 
    Metodos estaticos nao sao chamados na instancia da classe.
    Em vez disso, eles sao chamados na propria classe.
    Geralmente, sao funcoes utilitarias, como funcoes para cria ou clonar objetos.
*/

class Utils{
    static cloneObject(object: Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object))); //Deep clone
    }
}

class Pessoa{
    public variasPessoas(){
        Utils.cloneObject([])
    }
}

const tenis1: { tamanho: number; estoque: boolean } ={
    tamanho : 41 ,
    estoque : true,
};

const tenis2: { tamanho: number; estoque: boolean } ={
    tamanho : 41 ,
    estoque : true,
};

console.log(Utils.cloneObject([tenis1, tenis2]));//Copia os dados de tenis1 e tenis2 em um novo array
