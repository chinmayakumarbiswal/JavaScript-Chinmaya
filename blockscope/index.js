// example of block in javascript
{
    // your code here
}

// compound statement: A compound statement is a group of statements enclosed in curly braces { }. and it is also called block statement.

/* block scope : A block scope is the area within if, switch conditions or for and while loops. 
Generally speaking, whenever you see {curly brackets}, it is a block. 

In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

*/

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("inside block "+a); // 10
    console.log("inside block "+b); // 20
    console.log("inside block "+c); // 30
}

console.log("outside block "+a); // 10
// console.log("outside block "+b); // ReferenceError: b is not defined
// console.log("outside block "+c); // ReferenceError: c is not defined

// we tell that let and const are block scope variable because they are use seperate memory space whick was researver for that block scope so, it was not accessible outside the block.



// javascript shadowing : Shadowing is the process of re-declaring a variable in a child scope. 
var x=100;
let y=200;
const z=300;

{
    var x=10;
    let y=20;
    const z=30;
    console.log("inside block "+x); // 10
    console.log("inside block "+y); // 20
    console.log("inside block "+z); // 30
}

console.log("outside block "+x); // 10 because it was re-declared in the block and it was accessible outside the block.
console.log("outside block "+y); // 200 because it was not re-declared in the block so, it was accessible outside the block.
console.log("outside block "+z); // 300 because it was not re-declared in the block so, it was accessible outside the block.



// illigal shadowing : illegal shadowing is the process of re-declaring a variable with other variable type like var to let or const to let or var to const or let to const.
let p=100;

{
    // var p=10; // SyntaxError: Identifier 'p' has already been declared
}