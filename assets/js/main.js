// Deklariere drei Variablen "x", "y", "z". Gebe diesen Variablen Werte.

let x = 10;
let y = 15;
let z = 20;

// Überprüfe das Ergebnis, ob x größer als z ist AND(&&) x größer als y ist.

console.log(x > z && x > y);
    // 10 ist nicht > 25 && 10 ist nicht > 20 => false

// Überprüfe das Ergebnis, ob x NICHT gleich y ist.

console.log(x != y);
    // 10 ist nicht = 15 => false

// Überprüfe das Ergebnis, ob z kleiner als y ist OR(||) z größer als x ist.

console.log(z < y || z > y);
    // 20 ist nicht < als 15 || 20 ist > 10 => true

// Überprüfe das Ergebnis, ob x gleich z ist OR x NICHT gleich y ist.

console.log(x == z || x != y);
    // 10 ist nicht == 20 || 10 ist != 15 => true

// Überprüfe das Ergebnis, ob x größer oder gleich 10 ist AND y kleiner oder gleich 10 ist.

console.log(x >= 10 && y <= 10);
    // x ist >= 10 && y ist nicht <= 10 => false

// Überprüfe das Ergebnis, ob x multipliziert mit z kleiner als 100 ist OR ob x multipliziert mit y größer als 100 ist.

console.log(x*z < 100 || x*y > 100); 



