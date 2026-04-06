const readline = require("readline");

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

let pessoa = {
  nome : "",
  idade : 0,
  CNH :""
}

rl.question("Qual seu nome?", nome => {

 rl.question("Qual sua idade?", idade => {

 rl.question("Voce possui CNH?(Sim/Não)", CNH => {

pessoa.nome = nome

pessoa.idade = idade

pessoa.CNH = CNH

console.log("nome:", pessoa.nome)
console.log("idade:", pessoa.idade)
console.log("Possui CNH:", pessoa.CNH)

rl.close();

 })
})
})