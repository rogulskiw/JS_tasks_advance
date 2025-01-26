class Restaurant {
    constructor(name, maxTables){
        this.name = name;
        this.maxTables = maxTables;
        this.tables = [];
    }
    
    addTable(table){
        if(this.tables.length < this.maxTables){
            this.tables.push(table);
            console.log(`Dodano stolik nr ${table.number} do restauracji ${this.name}.`);
        } else {
            console.log(`Nie mozna dodac wiecej stolikow do restauracji ${this.name}.`);
        }
    }
    
    removeTable(tableNumber){
        const index = this.tables.findIndex(item => item.number === tableNumber);
        if(index !== -1){
            this.tables.splice(index, 1);
            console.log(`Usunieto stolik nr ${tableNumber.number} z restauracji ${this.name}.`);
        } else {
            console.log(`Nie mozna dodac wiecej stolikow do restauracji ${this.name}.`);
        }
    }
    
    displayTableAvailability() {
        console.log(`Dostepnosc stolikow w restauracji ${this.name}:`);
        this.tables.forEach(table => {
        const status = table.isAvailable ? 'Dostepny' : 'Zajety';
        const reservation = table.reservation ? `Rezerwacja przez ${table.reservation}` : 'Brak rezerwacji';
        console.log(`Stolik nr ${table.number}: ${status}, ${reservation}`);
        });
    }
}
    
class Table {
    constructor(number, seats) {
    this.number = number;
    this.seats = seats;
    this.isAvailable = true;
    this.reservation = null;
}

reserve(name) {
    if (this.isAvailable) {
        this.isAvailable = false;
        this.reservation = name;
        console.log(`Stolik nr ${this.number} zarezerwowany przez ${name}.`);
    } else {
        console.log(`Stolik nr ${this.number} jest juz zajety.`);
        }
    }

cancelReservation() {
    if (!this.isAvailable) {
        this.isAvailable = true;
        this.reservation = null;
        console.log(`Anulowano rezerwacje stolika nr ${this.number}.`);
    } else {
        console.log(`Stolik nr ${this.number} nie jest zarezerwowany.`);
    }
}
}

// Tworzenie restauracji
const restaurant = new Restaurant('Restauracja XYZ', 5);

// Dodawanie stolikow
const table1 = new Table(1, 4);
const table2 = new Table(2, 2);
const table3 = new Table(3, 6);

restaurant.addTable(table1);
restaurant.addTable(table2);
restaurant.addTable(table3);

// Rezerwacje stolikow
table1.reserve('Jan Kowalski');
table2.reserve('Anna Nowak');
table3.reserve('Adam Smith');

// Anulowanie rezerwacji
table2.cancelReservation();

// Wyswietlanie dostepnosci stolikow
restaurant.displayTableAvailability();