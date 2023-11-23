"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ClothesProduct {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    getSaldoCapo() {
        return 'This product is ' + this.saldo + '% off';
    }
    getAcquistoCapo() {
        if (this.quantita >= 1) {
            const updatedPrice = this.prezzoivainclusa - (this.prezzoivainclusa * (this.saldo / 100));
            this.quantita--;
            return 'Your total is ' + updatedPrice + ', thank you for shopping with us!';
        }
        else {
            return 'Sorry, the product you have chosen is out of stock.';
        }
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("./Abbigliamento.json");
            if (!response.ok) {
                throw new Error(`Error in the HTTP request: ${response.status}`);
            }
            const data = yield response.json();
            const products = data.map((clothesData) => {
                return new ClothesProduct(clothesData.id, clothesData.codprod, clothesData.collezione, clothesData.capo, clothesData.modello, clothesData.quantita, clothesData.colore, clothesData.prezzoivaesclusa, clothesData.prezzoivainclusa, clothesData.disponibile, clothesData.saldo);
            });
            console.log(products);
            return products;
        });
    }
}
let product1 = new ClothesProduct(1, 42123, 'idkman', 'sickybicky', 42123, 3, 'red', 19.38, 22, 'store', 40);
console.log(product1.getSaldoCapo());
console.log(product1.getAcquistoCapo());
console.log(product1);
console.log(product1.getAcquistoCapo());
console.log(product1.getAcquistoCapo());
console.log(product1.getAcquistoCapo());
product1.fetchData();
