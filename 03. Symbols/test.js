/* Symbols */

// Creation
let symbol1 = Symbol('this is a symbol');
let symbol2 = Symbol('this is another symbol');

console.log(symbol1 === symbol2);
// symbols are always unique //
console.log(typeof symbol1);

//symbols are used as unique property key//
const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]);