// function statement: during the creation phase, the function statement is hoisted to the top of the code. So, we can call the function before the declaration.
function a(){
    console.log('a called');
}
a();

// function expression : during the creation phase, the function expression is not hoisted to the top of the code. So, we can't call the function before the declaration.
var b = function(){
    console.log('b called');
}
b();

// function declaration is same as function statement


// Anonymous function : A function without a name is called an anonymous function. We can't call the function without a name. But we can assign the function to a variable and call the variable.
// function (){
//     console.log('anonymous function');
// }

// anonymous function assigned to a variable it was working
var c = function (){
    console.log('anonymous function');
}
c();

// named function expression : A function with a name is called a named function expression. We can call the function using the variable name in my case "d" was the variable name. But we can't call the function using the function name in my case xyz was the function name.
 var d = function xyz(){
    console.log('named function expression');
}
d();// working
// xyz(); // error : xyz is not defined 

// difference between parameters and arguments : parameters are the variables in the function definition. arguments are the values that are passed to the function when it is called.
function e(x, y){ // x, y are parameters
    console.log('e called', x, y);
}
e(10, 20); // 10, 20 are arguments

// first class functions : In JavaScript, functions are first-class citizens. They can be assigned to variables, passed as arguments to other functions, and returned by other functions.
var f = function(){
    console.log('f called');
}

function g(h){
    h();
}

g(f);
/*
1. A function f is declared using a function expression. This function, when called, logs the string 'f called' to the console.
2. A function g is declared that takes a single argument h. This function calls the function h.
3. The function g is called with the function f as an argument. This means that the function f is passed as an argument to the function g.
4. Inside the function g, the function h is called. Since the function f was passed as an argument to g, the function f is called inside g.
5. When the function f is called inside g, the string 'f called' is logged to the console.
*/



// arrow functions : Arrow functions are a more concise way to write function expressions in JavaScript. They use the => syntax and do not have their own this, arguments, super, or new.target keywords.
var i = () => {
    console.log('i called');
}

i();
