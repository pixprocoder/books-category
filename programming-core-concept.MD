//! Explained core fundamentals of programming?

// There are 6 core concept is programming? what are those?

// 1. variable
// 2. loop
// 3. condition
// 4. function
// 5. array
// 6. object

// 1.
const variableDefinition = `variables like container. we can store data in variable. some variables can change and some are not. in javascript there are 3 ways to write variable var, let, const. var is global scope(it can be accessible from anywhere). let is block scope(It can only accessible within {} block) both let and var can be change latter. const is used to define variable that cannot be change it can only write once.`;

// 2. loop
// loops use for simplify reparative task to automate. like if you want to print 100 times 'hello world' you have to write console.log('hello world') 100 times. but using loops you can write some lines of code. there are 3 types of loops in javascript. for loop, while loop, do while loop.
let exampleLoop = 0;
for (let i = 0; i < 100; i++) {}
while (exampleLoop < 100) {}
do {} while (exampleLoop);

// 3. condition
// conditions are used for conditionally check anything either true or false there are some conditional operators such as. <, >, <=, >=, === , !==, &&, || etc
if (1 < 2) {
}
if (1 > 2) {
}
if (2 <= 2) {
}
if (2 === 2) {
}
if (true !== true) {
}
if (2 === 2 && 1 === 1) {
}
if (3 !== 3 || 2 === 2) {
}

// 4. function
// functions are very helpful in programming if we want to do something that structure will be the same but the output or input will be different then we can use function. there are 2 types of functions in javaScript. arrow function normal function
const arrowFunction = () => {};
function normalFunction() {} // we can give parameter (x,y) like this is function.in function there must be return the result otherwise output will be undefined

// 5. Array
// Array is data types but very powerful the syntax is []. there we can keep multiple data types such as string, number, boolean etc..
const myArr = ["string", 33, true];

// 6. Object
// Object is another types of data types the syntax is {}. we can keep data by key value pair. and there are multiple ways to access data such as dot-notation(.) bracket-notation([]) variable etc..
const myObj = { name: "object", role: 1, isHappy: true };
