/*Arrow functions */

// Syntex - with 2 parameters
(para1, para2) => {statements}
(para1, para2) => expression;
(para1, para2) => { return expression;}

// Syntex - with 1 parameters
(singleParam) => {statements}
singleParam => {statements}

// Syntex - with No parameters
() => {statements}
() => expression;
() => { return expression;}

// Normal function
var multiply = function(x,y){
    return x * y;
}
// Arrow Function
var multiply = (x, y) => {return x * y};
// or
var multiply =  (x, y) => x * y; 

// Example //
var materials = [
    'Hydrogen',
    'Helium',
    'Lethium',
    'Beryllium'
];
// Normal function
var materialsLength1 = materials.map(function(material){
    return material.length;
});
// Arrow function
var materialsLength2 = materials.map( (material) => {
    return material.length;
});

var materialsLength3 = materials.map( material => material.length);
