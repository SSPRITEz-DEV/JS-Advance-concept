// console.log("SSPRITEz");

// let name = 'SSPRITE';
// let firstName = 'Tanawatt';
// let lastName = 'Jituthai';

//console.log(firstName, lastName);

/// Primitive type 

let name = 'SSPRITE';   // String Literal
let age = 30;           // Number Literal
let isApprove = true;   // Boolean Literal true or false
let firatName = undefined;
let selectColor = null; // when selected can be red

// Dynamic typeing 

typeof isApprove
name = 10;

//console.log(typeof isApprove);

// Object 

let person ={
    name: 'ssprite',
    age: 22
}

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'satang';

//console.log(person.name);
//console.log(person[selection]);

// Arrays 
let selectedColors = ['red', 'green']
selectedColors[2] = 'blue';
selectedColors[3] = 1;

//console.log(selectedColors);
//console.log(selectedColors.length);

// Function
function fun1(name, age){
    return console.log('Hello, '+ name +' your are '+ age +' years old');
}
fun1("ssprite", 22);
