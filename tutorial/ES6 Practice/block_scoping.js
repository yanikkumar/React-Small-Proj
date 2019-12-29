/* Block Scoping */
//VAR LET CONST
//SCOPE LET CONST BLOCK SCOPE
//VAR FUNCTION SCOPE




//global scope
// console.log(udemy);
// var udemy = 'project';

console.log(udemy);
let udemy = 'project';

function greeting() {
    //local scope
    var value = 'hello';
}
var value = 10
console.log(value);


function greet1() {
    //local scope
    let greet = 'hello';
    console.log(greet)
}
greet1()
// var greet = 20
// console.log(greet);

var test = true;

var tot = 1000;

if (test) {
    var tot = 'oranges +  onion'
}
console.log('and the total salary is: ' + tot);
console.log(window.tot);



let test2 = true;

var salary = 1000;

if (test2) {
    let salary = 'oranges +  onion'
}
console.log('and the total salary is: ' + salary);
console.log(window.salary);


{
    let tot = 2000;
    console.log(tot);
}
{
    let tot = 'mangoes';
    console.log(tot);

}

