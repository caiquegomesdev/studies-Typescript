/*
    Os Namespaces sao uma forma especifica do Typescript para organizar codigo.
    Namespaces sao simplesmente objetos Javascript nomeados no namesopace global.
    Isso torna os namespaces uma construcao muito simples de usar
*/

export namespace Pessoa1{
    const data = 1 + 1
    export let nome = "Caique"
    export const calc = () => {
    return data;
}

}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());



 