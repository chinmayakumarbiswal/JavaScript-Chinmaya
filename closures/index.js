/*
javascript closures : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}

x();



// ----------------------------------------------
// we can send the full function as parameter to another function
function z(b){
    console.log(b);
}


var fun = function test1(){
    console.log('test1');
}

// calling the function z with fun as parameter
z(fun);




// ----------------------------------------------
// we can return a function from another function
function test2(){
    return function(){
        console.log('test2');
    }
}

var fun2 = test2();
fun2();

/*
uses of closures:
1. module design pattern
2. currying
3. function factory: a function that returns another function
4. memoization
5. maintaining state in async programming
6. setTimeout
7. event listeners
8. private variables
9. partial application
*/

// example: with let keyword
function outer(){
    for(let i=1; i<5; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
}
// outer();

// example: with var keyword
function outer2(){
    for(var j=1; j<5; j++){
        function close(){
            setTimeout(function(){
                console.log(j);
            }, j * 1000);
        }       
        close(j);
    }
}

outer2();