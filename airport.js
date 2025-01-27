class Pasazer{
    constructor(imie, nazwisko, nrLotu){
        this.imie = imie; 
        this.nazwisko = nazwisko; 
        this.nrLotu = nrLotu;
    }
    
    getInfo(){
        return `Imie: ${this.imie}, Nazwisko: ${this.nazwisko}, Nr lotu: ${this.nrLotu}`;
    }
}

class Lot{
    constructor(nrLotu, destynacja, czasOdlotu, maxPasazerow){
        this.nrLotu = nrLotu;
        this.destynacja = destynacja;
        this.czasOdlotu = czasOdlotu; 
        this.maxPasazerow = maxPasazerow;
        this.pasazerowie = [];
    }
    
    dodajPasazera(pasazer){
        if(this.pasazerowie.length < this.maxPasazerow){
            this.pasazerowie.push(pasazer);
            console.log(`Dodano pasazera do lotu ${this.nrLotu}`);
        } else {
            console.log(`Lot ${this.nrLotu} jest pelny. Nie mozna dodac pasazera.`);
        }
    }
    
    usunPasazera(pasazer){
        const index = this.pasazerowie.findIndex(item => item === pasazer);
        if(index !==1){
            this.pasazerowie.splice(index,1);
            console.log(`Usunieto pasazera z lotu ${this.nrLotu}`);
        } else {
            console.log(`Nie znaleziono pasazera na locie ${this.nrLotu}`);
        }
    }
    
    getInfo(){
       let info = `Nr lotu: ${this.nrLotu}, Destynacja: ${this.destynacja}, Czas odlotu: ${this.czasOdlotu}\n`;
       info += `Aktualna liczba pasazerów:${this.pasazerowie.length}/${this.maxPasazerow}\n`;
       info += 'Pasazerowie:\n'; this.pasazerowie.forEach(p => {
           info += `${p.getInfo()}\n`;
       });
       return info;
    }
}

const lotnisko = {
    loty: [],
    dodajLot(lot){
        this.loty.push(lot); 
        console.log(`Dodano lot nr ${lot.nrLotu} do lotniska`);
    },
    usunLot(lot){
        const index = this.loty.findIndex(item=> item.nrLotu === lot.nrLotu);
        if(index!==-1){
            this.loty.splice(index,1);
            console.log(`Usunieto lot nr ${lot.nrLotu} z lotniska`);
        } else {
            console.log(`Nie znaleziono lotu nr ${lot.nrLotu} na lotnisku`);
        }
    },
    znajdzLot(nrLotu){
        const finded = this.loty.find(index => index.nrLotu === nrLotu);
        if(finded){
            console.log(finded.getInfo());
            console.log(`Znaleziono lot nr ${nrLotu}`);
        } else {
            console.log(`Nie znaleziono lotu nr ${nrLotu}`);
        }
    }
};

const lot1 = new Lot('LOT123', 'Nowy Jork', '12:00', 3);
const lot2 = new Lot('RYS456', 'Londyn', '14:30', 2);

const pasazer1 = new Pasazer('John', 'Doe', 'LOT123');
const pasazer2 = new Pasazer('Jane', 'Smith', 'LOT123');
const pasazer3 = new Pasazer('Adam', 'Johnson', 'RYS456');

lotnisko.dodajLot(lot1);
lotnisko.dodajLot(lot2);

lot1.dodajPasazera(pasazer1);
lot1.dodajPasazera(pasazer2);
lot2.dodajPasazera(pasazer3);

lot1.usunPasazera(pasazer3);

lotnisko.znajdzLot("LOT123");