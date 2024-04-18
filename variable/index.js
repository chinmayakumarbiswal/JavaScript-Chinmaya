// console.log(a);
console.log(b);

let a=10;
var b=20;
const d=30;
// d=40; // This will throw an error because const variable cannot be reassigned

console.log(a);
console.log(b);

/*
The "temporal dead zone" in JavaScript refers to a specific behavior related to variables declared using the let and const keywords.

In JavaScript, variables declared with let and const are hoisted to the top of their respective scopes during the compilation phase. 
However, unlike variables declared with var, they are not initialized with a default value of undefined. Instead, they enter a "temporal dead zone" where they cannot be accessed or used until they are declared.

alawys variable created with var able to access globaly but let and const not able to access globaly unitl it is declared.
*/



/* In JavaScript, the let keyword is used to declare block-scoped variables. It was introduced in ECMAScript 6 (ES6) as an alternative to the var keyword, which declares variables with function scope or global scope.

When you declare a variable using let, it is limited to the block (a set of statements enclosed in curly braces) in which it is defined. This means that the variable is only accessible within that block and any nested blocks. Outside of the block, the variable is not accessible.

One important behavior of let is the concept of the "temporal dead zone". When a variable is declared using let, it is hoisted to the top of its block scope during the compilation phase, similar to variables declared with var. However, unlike variables declared with var, variables declared with let are not initialized with a default value of undefined. Instead, they enter a "temporal dead zone" where they cannot be accessed or used until they are declared.

Let's take a look at an example:
*/
let c = 10;

console.log(c);
/*

In this example, if we try to access the variable c before it is declared, we will get a ReferenceError because the variable is in the temporal dead zone. Once the variable is declared with let c = 10;, it becomes accessible and we can log its value as 10.

It's important to note that variables declared with let can be reassigned a new value within their block scope. However, they cannot be redeclared within the same scope. This prevents accidental variable redeclaration and helps avoid potential bugs.

In summary, let is a keyword in JavaScript used to declare block-scoped variables. It provides more control over variable scoping and helps prevent common issues associated with var variables.

*/





/*

In JavaScript, const is a keyword used to declare a constant, a value that cannot be changed or redeclared. 
Once a const variable has been assigned, it cannot be reassigned with a new value or be declared again. 
It's important to note that const does not make the variable itself immutable, just the assignment. 
If the const variable is an object or an array, the properties or elements can still be modified. 
Here's an example:

*/

const PI = 3.14;
PI = 3; // This will throw an error

const obj = { property: "Hello" };
obj.property = "World"; // This is allowed

/*
In the above example, 
PI is a constant that cannot be reassigned. 
However, obj is a constant object, 
but its properties can be changed.
*/