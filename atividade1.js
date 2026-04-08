const readline = require("readline")

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
}); 

 rl.question("Qual seu nome?", nome => {
 rl.question("Qual sua e sua idade mesmo?", idade => {


      console.log(`Olá, ${nome}! Voce possui ${idade} anos.`)
      
      
      rl.close()
 })
})
