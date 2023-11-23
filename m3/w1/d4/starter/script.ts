
class ClothesProduct { 

    id                  :number;
    codprod             :number;   
    collezione          :string;    
    capo                :string;    
    modello             :number;    
    quantita            :number;    
    colore              :string;    
    prezzoivaesclusa    :number;    
    prezzoivainclusa    :number;    
    disponibile         :string;    
    saldo               :number; 

    constructor (

        _id                  :number,
        _codprod             :number,   
        _collezione          :string,    
        _capo                :string,    
        _modello             :number,    
        _quantita            :number,    
        _colore              :string,    
        _prezzoivaesclusa    :number,    
        _prezzoivainclusa    :number,    
        _disponibile         :string,  
        _saldo               :number

    ){

        this.id                 = _id;              
        this.codprod            = _codprod;           
        this.collezione         = _collezione;        
        this.capo               = _capo;               
        this.modello            = _modello;            
        this.quantita           = _quantita;           
        this.colore             = _colore;             
        this.prezzoivaesclusa   = _prezzoivaesclusa;   
        this.prezzoivainclusa   = _prezzoivainclusa;   
        this.disponibile        = _disponibile;     
        this.saldo              = _saldo;           

    }

    getSaldoCapo():number|string {
        return 'This product is ' + this.saldo + '% off';

    }

    getAcquistoCapo():number|string {
        
        if (this.quantita >= 1) {
            const updatedPrice = this.prezzoivainclusa - (this.prezzoivainclusa * (this.saldo / 100));
            this.quantita--;
            return 'Your total is ' + updatedPrice + ', thank you for shopping with us!';
        } else {
            return 'Sorry, the product you have chosen is out of stock.'
        }

    }

    async fetchData(): Promise<ClothesProduct[]> {
    
        const response = await fetch("./Abbigliamento.json");
    
        if (!response.ok) {
            throw new Error(`Error in the HTTP request: ${response.status}`);
        }
    
        const data = await response.json();
        const products: ClothesProduct[] = data.map((clothesData: any) => {
            return new ClothesProduct(
                clothesData.id,
                clothesData.codprod,
                clothesData.collezione,
                clothesData.capo,
                clothesData.modello,
                clothesData.quantita,
                clothesData.colore,
                clothesData.prezzoivaesclusa,
                clothesData.prezzoivainclusa,
                clothesData.disponibile,
                clothesData.saldo
            )
        });
        console.log(products);
        return products;
    }
}



let product1 = new ClothesProduct(1, 42123,'idkman','sickybicky',42123,3,'red',19.38, 22,'store',40);

console.log(product1.getSaldoCapo());
console.log(product1.getAcquistoCapo());
console.log(product1);
console.log(product1.getAcquistoCapo());
console.log(product1.getAcquistoCapo());
console.log(product1.getAcquistoCapo());

product1.fetchData();