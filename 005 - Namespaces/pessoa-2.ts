/*
    Os Namespaces sao uma forma especifica do Typescript para organizar codigo.
    Namespaces sao simplesmente objetos Javascript nomeados no namesopace global.
    Isso torna os namespaces uma construcao muito simples de usar
*/

import { Pessoa, Pessoa1 } from "./module";
console.log(Pessoa1.nome);
console.log(Pessoa1.calc());


console.log(Pessoa.Joao.nome);
console.log(Pessoa.Maria.nome);
