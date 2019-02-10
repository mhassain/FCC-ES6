/* Template Literals*/ 

// multi-line strings
console.log(`string text line 1
string text line2`)

// experssion interpolation
var a =5;
var b = 10;
console.log(`She is ${a + b} and \n not ${2 * a + b}. `)

// Tagged template literals
function tag(strings, ...values){
    console.log(strings);
    console.log(values);

    return "Template Literals";
}

console.log(tag`Hello ${a + b} world ${a * b} `);