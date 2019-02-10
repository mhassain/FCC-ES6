// Const vs Let vs Var //

// Const //
const Pi = 3.14;

//Pi = 1; 
console.log(Pi);

// Let //
for(let i = 0; i < 3; i++){
    console.log(i);
}

//console.log(i); //cannot access the i

// Var //
for(var j = 0; j < 3; j++){
    console.log(j);
}
console.log(j); //3