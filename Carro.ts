export class Carro{
    consumo: number;
    marca: String;
    modelo: String;
    ano: number;
    combustivel: number = 0;
    constructor(consumo: number, marca: String, modelo: String, ano: number){
        this.consumo = consumo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel = 0;
    }

    andar(km: number): void{
        let andar = km / this.consumo
        if(andar < this.combustivel){
            console.log("Nao foi possivel fazer essa viagem, abasteca seu carro! ")
        }else{
            this.combustivel -= andar
            console.log(`Sobrou ${this.combustivel} litors de gasolina`)
        }
    }
    // setCombustivel
    abastecer(gasolina: number): void{
        this.combustivel += gasolina
        console.log(`Seu tanque esta com ${this.combustivel}litros de gasolina`)
    }
    // getCombustivel
    checaTanque(): void{
        console.log(`Seu tanque esta com ${this.combustivel}litros de gasolina`)
    }

    getValues(): void{
        console.log(`Seu carro esta com ${this.combustivel}litros de gasolina`)
        console.log(`A marca do seu carro é: ${this.marca}`);
        console.log(`O modelo do seu carro é: ${this.modelo}`);
        console.log(`O ano do seu carro é: ${this.ano}`);
    }
}
