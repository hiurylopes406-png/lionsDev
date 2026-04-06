const readline = require("readline");

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

rl.question("Qual gênero do filme?", genero => {

    let Filme = genero.toString().toLowerCase();

    switch (Filme){
        case 'Comédia':
            console.log('Vá para a Sala1 !')
            break;
            case 'Ação':
                console.log('Vá para a Sala 2!')
                break;
                case 'Terror':
                    console.log("Vá para a Sala 3!")
                    break;
                    case 'Animação':
                        console.log("Vá para a sala 4!")
                        
                        default:
                            console.log("Gênero não encontrado. Verifique as opções válidas!");

                        rl.close()
    }
    })
