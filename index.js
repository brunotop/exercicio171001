import { Carro } from "./Carro";
import * as leitor from "readline-sync"
let menu: Boolean = true

// Base de dados de Carros:

let camaro = new Carro(8, "Chevrolet", "Camaro", 2019);
let corsa = new Carro(15, "Chevrolet", "Corsa", 1999);
let fusca = new Carro(10, "Volkswagem", "Fusca", 1980);
let monza = new Carro(13, "Chevrolet", "Monza", 1990);
let lancer = new Carro(11, "Mitsubishi", "Lancer Evolution", 2020);
let civic = new Carro(13, "Honda", "Civic", 2018);
let corolla = new Carro(12, "Toyota", "Corolla", 2020);
let up = new Carro(15, "Volkswagem", "UP", 2017);
let focus = new Carro(12, "Ford", "Focus", 2012);
let vectra = new Carro(10, "Chevrolet", "Vectra", 2005);


    let carro: Array<Carro> = [camaro, corsa, fusca, monza, lancer, civic, corolla, up, focus, vectra]
let CarroEscolhido;
while(menu){
    let option = leitor.questionInt("Selecione uma opcao: \n1 - Ver base de dados \n2 - Escolher carro \n:");
    switch(option){
        case 1:
            let carro = Carros
            console.log(carro);
            break;
        case 2:
            let nome = leitor.question("Digite o nome do carro: ").toLowerCase()
           for(let i = 0; i < carro.length; i++){
            if(nome === carro[i].modelo.toLowerCase()){
                carro[i].getValues();
            }
           }
           let opt = leitor.question("1 - Abastecer \n2 - Viajar - \n3 - Voltar ao menu proncipal")
           let menu2: Boolean = true
           while(menu2){
            switch(opt){
                case 1:
                    let gasolina = leitor.questionInt("Qual a quantidade de gasolina?")
                    CarroEscolhido.abastecer(gasolina);
                break; 
                case 2:
                    let kms = leitor.questionInt("Qual a distancia voce vai percorrer, em kms")
                    CarroEscolhido.viajar(kms)
                case 3:
                    console.log("Retornando ao menu principal!");
                    menu2 = false;
                    break;
            }
           }
             break                    
    }
}
