// Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var arrayCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var cognome = prompt("Inserisci il cognome:");

// Istruzione per mettere la prima lettera maiuscola
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();

arrayCognomi.push(cognome);

console.log(arrayCognomi.sort());
console.log(
  "Il cognome da te inserito si trova in posizione " +
    (arrayCognomi.indexOf(cognome) + 1)
);
