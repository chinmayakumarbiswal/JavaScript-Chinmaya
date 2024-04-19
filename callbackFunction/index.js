// what is a callback function in JavaScript? : A callback function is a function that is passed as an argument to another function. When the function is executed, the callback function is called to handle the result. Callback functions are commonly used in JavaScript to handle asynchronous tasks, such as fetching data from a server or reading a file.
function x(y){
    console.log("x");
    y();
}
x(function y(){ // y is a callback function that is passed as an argument to x
    console.log("y");
})


// example of a callback function in JavaScript
setTimeout(function(){
    console.log("timer");
}, 5000); 
// setTimeout is a built-in function in JavaScript that takes a callback function as the first argument and a delay in milliseconds as the second argument. The callback function is called after the delay has elapsed.

// javascript is a synchronous and single-threaded language. This means that it can execute only one task at a time. But there are some tasks that take a long time to complete, such as fetching data from a server or reading a file. If we execute these tasks synchronously, the entire program will be blocked until the task is completed. This is where callback functions come in.


// Blocking the main thre`ad is not a good idea because it makes the user interface unresponsive. To avoid this, we can use asynchronous programming. In asynchronous programming, we can execute tasks in the background without blocking the main thread. When the task is completed, we can execute a callback function to handle the result.


// Event listeners: Event listeners are a common use case for callback functions in JavaScript. When an event occurs, such as a button click or a keypress, we can execute a callback function to handle the event.
function attachEventListener(){
    let count = 0;
    document.getElementById("clickme")
    .addEventListener("click", function xyz(){
        console.log("clicked " + count++);
    });
}
attachEventListener();

// closures with event listeners: We can use callback functions to create closures with event listeners. This allows us to access variables from the outer scope inside the callback function.


// scope with event listeners: We can use callback functions to create a new scope with event listeners. This allows us to encapsulate variables and functions inside the callback function.


// garbage collection: We can use callback functions to avoid memory leaks in JavaScript. When we attach an event listener to an element, we need to remove the event listener when the element is removed from the DOM. Otherwise, the event listener will keep a reference to the element, preventing it from being garbage collected.


// removeEventListener: We can use callback functions to remove event listeners in JavaScript. When we attach an event listener to an element, we can store the callback function in a variable and use it to remove the event listener later.