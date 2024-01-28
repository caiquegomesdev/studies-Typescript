/*
    Os Namespaces sao uma forma especifica do Typescript para organizar codigo.
    Namespaces sao simplesmente objetos Javascript nomeados no namesopace global.
    Isso torna os namespaces uma construcao muito simples de usar
*/


export namespace Pessoa{
    export namespace Maria{
        const data = 1 + 1
        export let nome = "Maria"
        export const calc = () => {
            return data;
        }
    }

    export namespace Joao{
        const data = 1 + 1
        export let nome = "Joao"
        export const calc = () => {
            return data;
        }
    }
}

console.log(Pessoa.Joao.nome);
console.log(Pessoa.Maria.nome);

