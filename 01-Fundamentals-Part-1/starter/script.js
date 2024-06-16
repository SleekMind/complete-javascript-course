//! lecture 1 Assignment 
let country = 'India';
let continent = 'Asia';
let population = "150 Million";

console.log(`I live in ${country} which is a country of ${continent} with massive population around ${population}`);


//? Java script data types..
//! javascript has main 7 datatypes
// number --all numbers  are float
// string --> sequence of characters
// boolean -> logical type that can only be true of false
// null --> empty value , undefined --> empty value
// symbol -> value that is unique and cannot be changed [not so useful];
// BigInt -> larger integers than the number type can hold
//? null -- is a datatype but typeof (null)--> object this is a bug
//* javascript variables are dynamically typed

//! lecture 2 Assignment 
let isIsland = false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
console.log(typeof NaN);


//! let V/s var V/s Const

// const variable is immutable u can't change its value later
// and const variable always have to be initialized

//? let is block scoped
//? var is functional scoped
//! will see more about let V/s var in later sections


//! Operators in Java-script
const now = 2024
const ageVinayak = n

// all normal operators of c++
//* == , != , === , += , -= *= , **, * / + - ,
//* x-- , x++

// comparison operators
//*  > , < , <= , >=

//! Operators precedence
// go to mdn operator precedence

//! we can do this 
let x, y;
x = y = 15 - 10 - 5;
console.log(x, y);
