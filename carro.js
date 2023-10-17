"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(consumo, marca, modelo, ano) {
        this.combustivel = 0;
        this.consumo = consumo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.combustivel = 0;
    }
    Carro.prototype.andar = function (km) {
        var andar = km / this.consumo;
        if (andar < this.combustivel) {
            console.log("Nao foi possivel fazer essa viagem, abasteca seu carro! ");
        }
        else {
            this.combustivel -= andar;
            console.log("Sobrou ".concat(this.combustivel, " litors de gasolina"));
        }
    };
    // setCombustivel
    Carro.prototype.abastecer = function (gasolina) {
        this.combustivel += gasolina;
        console.log("Seu tanque esta com ".concat(this.combustivel, "litros de gasolina"));
    };
    // getCombustivel
    Carro.prototype.checaTanque = function () {
        console.log("Seu tanque esta com ".concat(this.combustivel, "litros de gasolina"));
    };
    Carro.prototype.getValues = function () {
        console.log("Seu carro esta com ".concat(this.combustivel, "litros de gasolina"));
        console.log("A marca do seu carro \u00E9: ".concat(this.marca));
        console.log("O modelo do seu carro \u00E9: ".concat(this.modelo));
        console.log("O ano do seu carro \u00E9: ".concat(this.ano));
    };
    return Carro;
}());
exports.Carro = Carro;
