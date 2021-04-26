// Primitive Typed & Reference Types
// https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/learn/lecture/14174797#content

// primitive types values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);


console.log('-----------------------')

// reference types values

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);