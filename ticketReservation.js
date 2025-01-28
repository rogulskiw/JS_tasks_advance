const availableSeats = new Set([1,2,3,4,5]);
    
function displayAvailableSeats(){
    console.log('Dostepne miejsca:');
    for (const seat of availableSeats) {
        console.log(`- Miejsce ${seat}`);
    }
    console.log('');
}

function reserveSeat(seatNumber){
    if(availableSeats.has(seatNumber)){
        availableSeats.delete(seatNumber);
        console.log(`Miejsce ${seatNumber} zostalo zarezerwowane.`);
    } else {
        console.log(`Miejsce ${seatNumber} jest już zajete.`);
    }
}

function makePayment(){
    console.log('Dokonywanie platnosci...');
    setTimeout(() => {
        console.log('Platnosc zostala zrealizowana.');
        console.log('Dziekujemy za rezerwacje!');
    }, 2000);
}

displayAvailableSeats();
reserveSeat(3);
reserveSeat(6);
reserveSeat(2);
reserveSeat(5);

makePayment();