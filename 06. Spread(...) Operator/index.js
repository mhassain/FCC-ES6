/* Spread Operator / Rest Operator */


// add the elements of an existing array into a new array
var germanCar = ['Audi', 'BMW', 'Mercedes-Benz', 'Porsche', 'Volkswagen'];
var americanCar = ['Ford', 'Chevrolet', 'Cadlilac', 'Jeep', 'Lincoln'];

var JapAndGerCar = ['TOyota', 'Nissan', 'Honda', 'Suzuki', 'Mitsubishi', ...germanCar];
console.log(JapAndGerCar);

// concatenate arrays
var allCarLists = [...germanCar, ...americanCar];
console.log(allCarLists);

// pass elements of an array as arguments to a function
function addThreeNumbers(x,y,z){
    console.log(x+y+z);
}
var args = [1, 2, 3, 4];
addThreeNumbers(...args);

// copy arrays
var arr1 = [1,2,3];
var arr2 = [...arr1]; // like arr.slice()

arr2.push(4);
console.log(arr1);
console.log(arr2);


/* Rest operator: condense multiple elements into an array */
function mulitiply(multiplier, ...theArgs){
    return theArgs.map(function(element){
        return multiplier * element;
    });
}

var arr = mulitiply(2, 1, 2, 3);
console.log(arr);
