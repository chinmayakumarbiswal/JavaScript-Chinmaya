console.log(a); // undefined because no value is assigned to a but memory is allocated to a on line 2
var a=10; // a is assigned a value of 10
console.log(a); // 10 after assigning a value to a


console.log(b); // ReferenceError: b is not defined because b is not declared so memory is not allocated to b

// so undefiend means that the variable is declared but not assigned a value yet 
// and not defined means that the variable is not declared yet


c= undefined; // c is declared and assigned a value of undefined but it is not recommended to assign undefined to a variable because it is a reserved keyword