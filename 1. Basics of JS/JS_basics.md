The console.log() is a function in JavaScript that is used to print any kind of variables defined before it or to print any message that needs to be displayed to the user.

**Syntax:**
console.log(" ");

- **Parameters:** It accepts a parameter that can be an array, an object, or any message.
- **Return value:** It outputs the value of the given parameter to the console.

If the message is passed to the function console.log(), then the function will display the given message.

*For Example:*
console.log("Hello Geeks");

**Output:** Hello Geeks
 
If an arithmetic calculation is passed to the console.log() function, then it will display the result of the calculation.

console.log(3 + 5);

**Output:** 8

## JavaScript Variables

Variables in JavaScript are containers that hold reusable data. It is the basic unit of storage in a program.  
+ The value stored in a variable can be changed during program execution.
+ A variable is only a name given to a memory location, all the operations done on the variable effects that memory location.
+ In JavaScript, all the variables must be declared before they can be used.

Before ES2015, JavaScript variables were solely declared using the var keyword followed by the name of the variable and semi-colon. Below is the syntax to create variables in JavaScript: 

var var_name;
var x;

The **var_name** is the name of the variable which should be defined by the user and should be unique. These types of names are also known as identifiers. The rules for creating an identifier in JavaScript are:
+ The name of the identifier should not be any pre-defined word(known as keywords)
+ The first character must be a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be any letter or digit or an underscore or dollar sign. 

Notice in the above code sample, we didn’t assign any values to the variables. We are only saying they exist. If you were to look at the value of each variable in the above code sample, it would be undefined.

We can initialize the variables either at the time of declaration or also later when we want to use them. Below are some examples of declaring and initializing variables in JavaScript:  

// declaring single variable
var name;

// declaring multiple variables
var name, title, num;

// initializing variables
var name = "Harsh";
name = "Rakesh";


JavaScript is also known as untyped language. This means, that once a variable is created in JavaScript using the keyword var, we can store any type of value in this variable supported by JavaScript. Below is the example for this:  

// creating variable to store a number
var num = 5;

// store string in the variable num
num = "GeeksforGeeks";

The above example executes well without any error in JavaScript, unlike other programming languages.

Variables in JavaScript can also evaluate simple mathematical expressions and assume their value.  

// storing a mathematical expression
var x = 5 + 10 + 1;
console.log(x); // 16
 

### Difference between var, let and const

| var | let | const |
| --- | --- | --- |
| The scope of a var variable is functional scope. | The scope of a let variable is block scope. | The scope of a const variable is block scope.
| It can be updated and re-declared into the scope. | It can be updated but cannot be re-declared into the scope. | It cannot be updated or re-declared into the scope. |
| It can be declared without initialization. | It can be declared without initialization. | It cannot be declared without initialization. |
| It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’. | It cannot be accessed without initialization, as it cannot be declared without initialization. |
| hoisting done , with initializing as ‘default’ value | Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization) | Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization) |
