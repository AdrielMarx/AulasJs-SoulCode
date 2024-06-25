/*
    Operadores relacionais

    < Menor que
    > Maior que
    <= Menor ou igual
    >= Maior ou igual
    == Igual a
    === Igual a e mesmo tipo
    != Diferente 
*/

let a = 3;
let b = 5;

console.log(a < b); // true
console.log(a > b); // false
console.log(b > a); // true
console.log(b >= a); // true
console.log(b >= 5); // true
console.log(a <= b); // true
console.log(a <= 3); // true
console.log(b > 5); // false
console.log(a == b); // false

console.log(a == '3');
console.log(a === '3');

console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null != 0);
