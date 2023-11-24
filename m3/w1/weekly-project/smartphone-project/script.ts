interface ISim {
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;
    registroChiamate: { id: number; durata: number; dataOra: Date }[];

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
    mostraRegistroChiamate():void;

}

class Smartphone implements ISim {
    carica: number              = 0;
    numeroChiamate: number      = 0;
    costoMinuto: number         = 0.4;
    registroChiamate: { id: number; durata: number; dataOra: Date }[] = [];

    ricarica(euro: number): void {
        this.carica += euro;
    }

    numero404(): string {
        return 'Al momento il tuo credito residuo è ' + this.carica + '€.';
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    chiamata(min: number): void {
        const totalCost:number      = this.costoMinuto * min;
        const dataOraChiamata:Date  = new Date();

        if(totalCost <= this.carica) {
            this.carica -= totalCost;
            this.numeroChiamate++;

            this.registroChiamate.push({
                id: this.registroChiamate.length + 1,
                durata: min,
                dataOra: dataOraChiamata,
            });
        } else {
            console.log('Il tuo credito non è sufficiente per effettuare questa chiamata.')
        }
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

    mostraRegistroChiamate(): void {
        console.log('Registro chiamate:');
        this.registroChiamate.forEach((chiamata) => {
            console.log(chiamata);
        });
    }

    filtraChiamate(dataOra: Date): object {
        const chiamateFiltrate  = this.registroChiamate.filter((chiamata) => {
            let annoChiamata    = chiamata.dataOra.getFullYear();
            let meseChiamata    = chiamata.dataOra.getMonth();
            let giornoChiamata  = chiamata.dataOra.getDate();
            let oraChiamata     = chiamata.dataOra.getHours();
    
            let annoDataOra     = dataOra.getFullYear();
            let meseDataOra     = dataOra.getMonth();
            let giornoDataOra   = dataOra.getDate();
            let oraDataOra      = dataOra.getHours();
    
            return (
                annoChiamata    === annoDataOra &&
                meseChiamata    === meseDataOra &&
                giornoChiamata  === giornoDataOra &&
                oraChiamata     === oraDataOra
            );
        });
    
        if (chiamateFiltrate.length === 0) {
            console.log('Nessuna chiamata effettuata in questa data e ora.');
        } else {
            console.log(`Chiamate effettuate il ${dataOra}:`);
            chiamateFiltrate.forEach((chiamata) => {
                console.log(chiamata);
            });
        }
        return chiamateFiltrate;
    }
}

let smartphone1 = new Smartphone();

smartphone1.ricarica(50);
console.log(smartphone1.numero404());
smartphone1.getNumeroChiamate();
smartphone1.chiamata(9);
console.log(smartphone1.numero404());


let smartphone2 = new Smartphone();

smartphone2.ricarica(20);
smartphone2.getNumeroChiamate();
smartphone2.chiamata(10);
smartphone2.chiamata(4);
smartphone2.chiamata(8);
console.log('Fino ad ora hai effettuato ' + smartphone2.getNumeroChiamate() + ' chiamate')
console.log(smartphone2.numero404());
smartphone2.chiamata(120);
console.log('Fino ad ora hai effettuato ' + smartphone2.getNumeroChiamate() + ' chiamate')
smartphone2.azzeraChiamate();
console.log('Fino ad ora hai effettuato ' + smartphone2.getNumeroChiamate() + ' chiamate')
smartphone2.mostraRegistroChiamate()


let smartphone3 = new Smartphone();

smartphone3.chiamata(3);
smartphone3.ricarica(20);
smartphone3.chiamata(15);
console.log(smartphone3.numero404())
smartphone3.chiamata(3);
smartphone3.chiamata(6);
smartphone3.chiamata(2);
smartphone3.chiamata(4);
smartphone3.chiamata(2);
console.log(smartphone3.numero404());
console.log('Fino ad ora hai effettuato ' + smartphone3.getNumeroChiamate() + ' chiamate');
smartphone3.mostraRegistroChiamate();

smartphone3.filtraChiamate(new Date());
smartphone3.filtraChiamate(new Date(2023, 10, 24, 14));
smartphone3.filtraChiamate(new Date(2023, 10, 24, 15));