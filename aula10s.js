const readline = require("readline");

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

rl.question("Qual a nota do aluno?",(nota) => {
     
    let Notas = nota
    
    switch (true) {

case (nota >= 90 && nota <= 100):
console.log("Nota A!");
rl.close()
break;

     case (nota >= 80 && nota <= 89):
     console.log("Nota B!");
     rl.close()
     break;

         case (nota >= 70 && nota <= 79):
         console.log("Nota C!");
         rl.close()
         break;
        
             case (nota >= 60 && nota <= 69):
             console.log("Nota D!");
             rl.close()
             break;

                 case (nota >= 0 && nota <= 59):
                 console.log("Nota F!");
                 rl.close()
                 break;

                     default:
                     console.log("Nota Inválida!");
                     rl.close()
                     break;
                     
 }
})