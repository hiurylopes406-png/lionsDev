const { Channel } = require("diagnostics_channel");
const readline = require("readline")

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

rl.question("Qual seu nome?", nome => {

 rl.question("Qual sua idade?", idade => {

 rl.question("Voce possui CNH?(Sim/Não)", CNH => {

 if(CNH == "Sim"){
        console.log(`${nome}, voce pode dirigir, pois possui CNH!`)
      } else {
        console.log(`${nome}, voce nao pode dirigir, pois nao possui CNH!`)
      }
     
      rl.close()
 })
})
})