const generateRandomWord = () => {
    const words = ['programowanie', 'javascript', 'komputer', 'aplikacja', 'developer'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };
   
  // Funkcja sprawdzająca, czy litera jest czescią hasla
  const checkLetter = (word, letter) => {
    return word.includes(letter);
  };
   
  // Funkcja aktualizująca stan hasla z odkrytymi literami
  const updateHiddenWord = (word, hiddenWord, letter) => {
    const newHiddenWord = hiddenWord.split('');
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newHiddenWord[i] = letter;
      }
    }
    return newHiddenWord.join('');
  };
   
  // Funkcja rozpoczynająca gre w wisielca
  const startHangmanGame = () => {
    const maxAttempts = 6;
    const word = generateRandomWord();
    let hiddenWord = '_'.repeat(word.length);
    let attempts = 0;
    let guessedLetters = [];
   
    console.log('Witaj w grze w wisielca!');
    console.log(`Masz ${maxAttempts} prob na odgadniecie hasla.`);
    console.log(`Haslo sklada sie z ${word.length} liter: ${hiddenWord}`);
   
    while (attempts < maxAttempts) {
      const input = prompt('Podaj litere:');
      const letter = input.toLowerCase();
   
      if (guessedLetters.includes(letter)) {
        console.log('Ta litera zostala już zgadnieta. Sprobuj ponownie.');
        continue;
      }
   
      guessedLetters.push(letter);
   
      if (checkLetter(word, letter)) {
        hiddenWord = updateHiddenWord(word, hiddenWord, letter);
        console.log('Poprawna litera!');
   
        if (hiddenWord === word) {
          console.log(`Gratulacje! Odgadles haslo "${word}"!`);
          return;
        }
      } else {
        attempts++;
        console.log('Nieprawidlowa litera!');
        console.log(`Pozostalo Ci ${maxAttempts - attempts} prob.`);
      }
   
      console.log(`Aktualne haslo: ${hiddenWord}`);
    }
   
    console.log('Niestety, nie udalo Ci sie odgadnąć hasla.');
    console.log(`Poprawne haslo to: "${word}".`);
  };
   
  // Rozpoczecie gry
  startHangmanGame();