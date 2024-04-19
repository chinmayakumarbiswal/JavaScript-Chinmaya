// javascript scope is the context in which variables are declared.

function a(){
    c();
    // console.log(b);
    function c(){
        console.log(b);
    }
}

var b=20;
a();


/*
The JavaScript lexical environment refers to the environment in which variables and functions are declared and defined. 
It consists of two main components: the environment record and the outer environment reference.

The environment record is a record of all the variables and functions that have been declared within the current scope. 
It stores the identifiers and their corresponding values. 
In the provided code snippet, the environment record of the a function includes the declaration of the c function and the reference to the variable b.

The outer environment reference is a reference to the lexical environment of the parent scope. It allows variables and functions to access and refer to variables and functions declared in the outer scope. In the code snippet, the c function has access to the variable b because it is declared in the outer scope of c.

To illustrate this concept further, let's consider the execution of the code snippet:

1. The a function is called.
2. Within the a function, the c function is called.
3. The c function tries to log the value of the variable b.
4. Since the c function does not have a local declaration of b, it looks for b in its outer environment reference, which is the lexical environment of the a function.
5. The value of b is logged to the console, which is 20.

*/




/*
The scope chain in JavaScript refers to the hierarchy of scopes that are accessible to a particular piece of code. 
It determines the visibility and accessibility of variables and functions.

Each time a function is invoked, a new scope is created. This new scope has access to variables and functions defined in its own scope, as well as variables and functions defined in its parent scope. This chain of scopes forms the scope chain.

To access a variable or function, JavaScript first looks in the current scope. 
If it doesn't find the variable or function, it then looks in the next scope in the chain, and so on, until it either finds the desired identifier or reaches the global scope.

The scope chain is important for understanding variable and function resolution in JavaScript. 
It allows for nested functions to access variables from their parent scopes, creating closures and enabling encapsulation and data privacy.

In the provided code snippet, the scope chain can be visualized as follows:

The global scope, which includes the variable b.
The scope of the a function, which includes the function c.
The scope of the c function.
Each scope in the chain has access to the variables and functions defined in its parent scopes.

*/