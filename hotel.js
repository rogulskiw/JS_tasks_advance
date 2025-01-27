class Hotel{
    constructor(name, totalRooms){
        this.name = name;
        this.totalRooms = totalRooms;
        this.availableRooms = totalRooms;
        this.reservations = [];
    }
    
    reserveRoom(customerName){
        if(this.availableRooms > 0){
            this.reservations.push(customerName);
            this.availableRooms--;
            console.log(`Pokoj zostal zarezerwowany przez ${customerName}`);
        } else {
            console.log('Brak dostepnych pokoi.');
        }
    }
    
    releaseRoom(customerName){
        if(this.reservations.includes(customerName)){
            this.reservations.splice(customerName,1);
            this.availableRooms++;
            console.log(`Pokoj zostal zwolniony przez ${customerName}`);
        } else {
            console.log('Nie mozna zwolnic pokoju. Nie znaleziono rezerwacji dla tego klienta.');
        }
    } 
    
    generateInvoice(customerName, nights){
        if(this.reservations.includes(customerName)){
            const totalCost = nights * 100; 
            console.log(`Faktura dla ${customerName}: ${totalCost} zl`);
        } else {
            console.log('Nie mozna wygenerowac faktury. Nie znaleziono rezerwacji dla tego klienta.');
        }
    }
    
    checkAvailability(){
        console.log(`Dostepne pokoje w hotelu ${this.name}: ${this.availableRooms}`);
    }
}

const hotel = new Hotel('JS HOTEL', 10);

hotel.reserveRoom('John Smith');
hotel.reserveRoom('Jane Doe');
hotel.reserveRoom('Adam Johnson');
hotel.checkAvailability();
hotel.generateInvoice('Jane Doe', 3);
hotel.releaseRoom('Jane Doe');
hotel.checkAvailability();