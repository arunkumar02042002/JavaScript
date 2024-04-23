# Function Declaration and use in JavaScript

**Introduction:**

A function is a reusable piece of code that may take some input as parameters ,does some processing , and produces a certain output based on the given inputs.

The idea is to put some commonly or repeatedly done tasks together and make a function so that instead of writing the same code again and again for different inputs, we can call the function itself.

We can create functions in JavaScript using the keyword function. The basic syntax to create a function in JavaScript is shown below.

Syntax:
```
function functionName(Parameter1, Parameter2, ..)
{
    // Function body
}
```

We have to first use the keyword function, separated by name of function and parameters within parenthesis. The part of function inside the curly braces {} is the body of the function.

### Function Definition:

For using a user-defined function in JavaScript ,we have to create one. We can use the above syntax to create a function in JavaScript. A function definition is sometimes also termed as function declaration or function statement.

Below are the rules for creating a function in JavaScript:

- Every function should begin with the keyword function followed by,
- A user defined function name which should be unique,
- A list of parameters enclosed within parenthesis and separated by commas,
- A list of statement composing the body of the function enclosed within curly braces {}.

**Note:** We can call a function even before we have defined it. This is due to Hoisting in JavaScript.

Example:

```
function calcAddition(number1, number2) 
{ 
    return number1 + number2; 
}

console.log(calcAddition(2,3));
```
Output:
```
5
```

### Function Parameters
 
Function parameters are additional information passed to a function. For example, in the above example, the task of the function calcAddition is to calculate addition of two numbers. These two numbers on which we want to perform the addition operation are passed to this function as parameters. The parameters are passed to the function within parentheses after the function name and separated by commas. A function in JavaScript can have any number of parameters.

**Calling Functions:** After defining a function, the next step is to call them to make use of the function. We can call a function by using the function name along with the value of parameters enclosed between parenthesis and a semicolon at the end. Below syntax shows how to call functions in JavaScript.

**Note:** Javascript does not throw an error if the number of parameters passed and number of parameters required do not match. There is an in-built arguments object in every function which holds all value passed to the function.

functionName( Value1, Value2, ..);

Below is a sample program that illustrate working of functions in JavaScript:

```js
// Function definition
function welcomeMsg(name) {
   console.log("Hello " + name + " welcome to GeeksforGeeks");
}
  
// creating a variable
var nameVal = "Admin";
  
// calling the function
welcomeMsg(nameVal);
```

Output:
```
Hello Admin welcome to GeeksforGeeks
```

**Return Statement: **
There are some situations when we want to return some values from a function after performing some operations. In such cases, we can make use of the return statement in JavaScript. This is an optional statement and most of the times the last statement in a JavaScript function. Look at our first example with the function named as calcAddition. This function is calculating two numbers and then returning the result. The most basic syntax of using the return statement is:
```
return value;
```
The return statement begins with the keyword return separated by the value which we want to return from it. We can use an expression also instead of directly returning the value.


================================================================================================

# Anonymous Functions

Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript. However, for anonymous functions in JavaScript, we use only the function keyword without the function name.

An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.

Syntax: 

The syntax below illustrates the declaration of anonymous function using normal declaration:
```
function() {
    // Function Body
 }
We may also declare anonymous function using arrow function technique which is shown below:

( () => {
    // Function Body...
} )();
```

The below examples demonstrate anonymous functions.

Example 1: In this example, we define an anonymous function that prints a message to the console. The function is then stored in the greet variable. We can call the function by invoking greet().

```js
var greet = function () {
    console.log("Welcome to GeeksforGeeks!");
};
 
greet();
```
Output:
```
Welcome to GeeksforGeeks!
```

Example 2: In this example, we pass arguments to the anonymous function.

```js
var greet = function (platform) {
    console.log("Welcome to ", platform);
};
 
greet("GeeksforGeeks!");
```

Output:
```
Welcome to  GeeksforGeeks!
```

Another use case of anonymous functions is to invoke the function immediately after initialization, this is also known as Self Executing Function. This can be done by adding parenthesis we can immediately execute the anonymous function.

As JavaScript supports Higher-Order Functions, we can also pass anonymous functions as parameters into another function.

Example 3: In this example, we pass an anonymous function as a callback function to the setTimeout() method. This executes this anonymous function 2000ms later.

```js
setTimeout(function () {
    console.log("Welcome to GeeksforGeeks!");
}, 2000);
```

Output:
```
Welcome to GeeksforGeeks!
```

Another use case of anonymous functions is to invoke the function immediately after initialization, this is also known as Self Executing Function. This can be done by adding parenthesis we can immediately execute the anonymous function.

Example 4: In this example, we have created a self-executing function.

```js
(function () {
    console.log("Welcome to GeeksforGeeks!");
})();
```
Output:
```
Welcome to GeeksforGeeks!
```

## Arrow functions:

ES6 introduced a new and shorter way of declaring an anonymous function, which is known as Arrow Functions. In an Arrow function, everything remains the same, except here we don’t need the function keyword. Here, we define the function by a single parenthesis and then ‘=>’ followed by the function body.

Example 5:

```js
var greet = () =>
{
    console.log("Welcome to GeeksforGeeks!");
}
 
greet();
```

Output:
```
Welcome to GeeksforGeeks!
```
If we have only a single statement in the function body, we can even remove the curly braces.

Example 6: In this example, we create a self-executing function.

```js
let greet = () => console.log("Welcome to GeeksforGeeks!");
greet();
```
Output:
```
Welcome to GeeksforGeeks!
```

================================================================================================

# Arrow Function

HFunction in any programming language is the basic building block to create and combine the related bits of code. Every programming language provides certain kinds of practices to write any function. The arrow function syntax is one of the most used and efficient ones to create a function in JavaScript.

How to create arrow function: To write the arrow function, simply create any variable it can be const, let, or var but always do prefer with const to avoid unnecessary problems. And then assign the function code to the variable it. So from now, you can call that function by writing the parenthesis in front of that variable! With arrow function syntax, we consider function as an object and assign the definition to some variable. Following are the syntax of the arrow function:

```
const myFunction = (param1, param2,
    .... paramN) => { // function code }
const myFunction = (param) => { // function code }
                      or 
const myFunction = param => { // function code }  
const myFunction = param => { return param*param }
                      or 
const myFunction = param => param*param
```

We can omit the {} parenthesis when there is only one statement and the JavaScript considers that statement as return value, also there is no need to write parenthesis () when there is only one parameter. The arrow function cannot contain the line break between the (params) and the arrow =>, Also there should not be any space between the = and > characters.  

Example 1: In this example, we will create program to add two number first using normal function and then using arrow function.

- Using normal function:

```js
function myFunction(){
  let a = 5, b = 4;
  return a+b;
}
console.log(myFunction());
```

Output:
```
9
```

- Using arrow function:

```js
const myFunction = () =>{
  let a = 5, b = 4;
  return a+b;
}
console.log(myFunction());
```

Output:
```
9
```

**Explanation:** In the arrow function, we do not write the function keyword, so it is necessary to assign it to some kind of variable like here we have assigned to a constant variable named myFunction.

 
Example 2: In this example, we will create function of single expressions using both normal and arrow function one by one.

Using normal function:

```js
function myFunction(num){
  return num*num;
}
console.log(myFunction(4));
```

Output:
```
16
```

Using arrow function:

```js
const myFunction = num => num*num;
// Equivalent to const myFunction = (num) =>{ return num*num; }
  
console.log(myFunction(4));
```

Output:
```
16
```
**Explanation**: When we have only one return expression in function, arrow syntax provides an easier way to write. We can drop the parenthesis of the parameter and also the return statement along with code blocks braces.


**Limitations of Arrow Functions:** Earlier we have seen how easily we can create a function with the arrow syntax now it’s time to look upon some limitations also because they will not work similarly to normal functions in several situations.

1. No binding of this keyword: It cannot be used as a method because of not having a binding of this keyword. Arrow function contains the lexical this instead of their own. The value of this will be based upon the scope in which they are defined. So the arrow function is defined in the window scope hence this will refer to the window object instead of the object in which the function has been written. There does not exist any property or method with ‘num’ hence undefined will be printed.

```js
var obj = {
  num: 10,
  myFunc: () => {console.log(this.num)}
}
  
obj.myFunc();
```

Output:
```
undefined
```

**Explanation:** The normal function contains this which refers to the object to which it belongs. Hence the function belongs to the obj object and property num exists inside it, so it will be printed successfully. 

