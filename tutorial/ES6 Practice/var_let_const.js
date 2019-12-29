// define ,redefine and update variables

// VAR, LET, CONST

//define
var number = 100;
console.log(number);
//update
number = 200;
console.log(number);
//redefine
var number = 'orange';
console.log(number);

//define 
let amount = 100;
console.log(amount);
//update
amount = 200;
console.log(amount);
//redefine
// let amount = "orange";
// console.log(amount); //not possible

//const
//define
const total = 100
console.log(total)
//update
// total = 200;
// console.log(total) //not possible Assignment to constant variable

const person = { name: 'bob' };
person.name = "peter";
// person = []; //not possible Assignment to constant variable

console.log(person)