// Stwórz pusta mape na dane studentów
const studentsMap = new Map();
 
// Funkcja do dodawania studenta do mapy
function addStudent() {
  const name = prompt("Podaj imie studenta:");
  const age = parseInt(prompt("Podaj wiek studenta:"));
 
  // Dodaj dane do mapy
  studentsMap.set(name, age);
  console.log(`Dodano studenta ${name} o wieku ${age} lat.`);
}
 
// Funkcja do usuwania studenta z mapy
function removeStudent() {
  const name = prompt("Podaj imie studenta, którego chcesz usunac:");
 
  // Sprawdz, czy student istnieje w mapie
  if (studentsMap.has(name)) {
    // Usun studenta z mapy
    studentsMap.delete(name);
    console.log(`Usunieto studenta ${name}.`);
  } else {
    console.log(`Nie znaleziono studenta o imieniu ${name}.`);
  }
}
 
// Funkcja do wyswietlania informacji o studentach
function displayStudents() {
  console.log("Lista studentów:");
  studentsMap.forEach((age, name) => {
    console.log(`${name}: ${age} lat`);
  });
}
 
// Wywolaj interaktywne menu
while (true) {
const option = parseInt(prompt(`Wybierz opcje:\n1. Dodaj studenta\n2. Usun studenta\n3. Wyswietl studentów\n4. Wyjdz z programu\n`));
 
  switch (option) {
    case 1:
      addStudent();
      break;
    case 2:
      removeStudent();
      break;
    case 3:
      displayStudents();
      break;
    case 4:
      console.log("Koniec programu.");
      break;
    default:
      console.log("Nieprawidlowa opcja.");
  }
 
  if (option === 4) {
    break;
  }
}
 
