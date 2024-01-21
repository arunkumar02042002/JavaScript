The console.log() is a function in JavaScript that is used to print any kind of variables defined before it or to print any message that needs to be displayed to the user.

**Syntax:**
```Javascript
console.log(" ");
```

- **Parameters:** It accepts a parameter that can be an array, an object, or any message.
- **Return value:** It outputs the value of the given parameter to the console.

If the message is passed to the function console.log(), then the function will display the given message.

*For Example:*
```Javascript
console.log("Hello Geeks");
```

**Output:** Hello Geeks
 
If an arithmetic calculation is passed to the console.log() function, then it will display the result of the calculation.
```Javascript
console.log(3 + 5);
```
**Output:** 8

## JavaScript Variables

Variables in JavaScript are containers that hold reusable data. It is the basic unit of storage in a program.  
+ The value stored in a variable can be changed during program execution.
+ A variable is only a name given to a memory location, all the operations done on the variable effects that memory location.
+ In JavaScript, all the variables must be declared before they can be used.

Before ES2015, JavaScript variables were solely declared using the var keyword followed by the name of the variable and semi-colon. Below is the syntax to create variables in JavaScript: 
```Javascript
var var_name;
var x;
```
The **var_name** is the name of the variable which should be defined by the user and should be unique. These types of names are also known as identifiers. The rules for creating an identifier in JavaScript are:
+ The name of the identifier should not be any pre-defined word(known as keywords)
+ The first character must be a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be any letter or digit or an underscore or dollar sign. 

Notice in the above code sample, we didn’t assign any values to the variables. We are only saying they exist. If you were to look at the value of each variable in the above code sample, it would be undefined.

We can initialize the variables either at the time of declaration or also later when we want to use them. Below are some examples of declaring and initializing variables in JavaScript:  
```Javascript
// declaring single variable
var name;

// declaring multiple variables
var name, title, num;

// initializing variables
var name = "Harsh";
name = "Rakesh";
```

JavaScript is also known as untyped language. This means, that once a variable is created in JavaScript using the keyword var, we can store any type of value in this variable supported by JavaScript. Below is the example for this:  
```Javascript
// creating variable to store a number
var num = 5;

// store string in the variable num
num = "GeeksforGeeks";
```
The above example executes well without any error in JavaScript, unlike other programming languages.

Variables in JavaScript can also evaluate simple mathematical expressions and assume their value.  
```Javascript
// storing a mathematical expression
var x = 5 + 10 + 1;
console.log(x); // 16
```

### Difference between var, let and const

| var | let | const |
| --- | --- | --- |
| The scope of a var variable is functional scope. | The scope of a let variable is block scope. | The scope of a const variable is block scope.
| It can be updated and re-declared into the scope. | It can be updated but cannot be re-declared into the scope. | It cannot be updated or re-declared into the scope. |
| It can be declared without initialization. | It can be declared without initialization. | It cannot be declared without initialization. |
| It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’. | It cannot be accessed without initialization, as it cannot be declared without initialization. |
| hoisting done , with initializing as ‘default’ value | Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization) | Hoisting is done, but not initialized (this is the reason for error when we access the const variable before declaration/initialization) |

## Varibale Naming Convention

When we name variables in javascript, we have to follow certain rules. Each variable should have a name that appropriately identifies it. Your JavaScript code gets easier to comprehend and work with when you use suitable variable names. It is critical to name variables correctly. 

**Note : Constants and global variables are always written in uppercase.**

The following are the rules for naming variables in JavaScript:
- Spaces are not allowed in variable names.
- Only letters, digits, underscores, and dollar signs are permitted in variable names.
- Case matters when it comes to variable names.
- A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.
- Certain terms such as reserved words in JavaScript should not be used to name variables.

A few more conventions for good practices:
- It is good to decide on a case and continue it throughout the code. Example: camelCase. Code looks elegant and proper.
- Name your variable with more than one word. This will verify that the name of your variable is accurate.
- It is suggested not to use variable names that are too short. They do not make proper sense.



## Data Types

There are majorly two types of languages. First, one is Statically typed language where each variable and expression type is already known at compile time. Once a variable is declared to be of a certain data type, it cannot hold values of other data types.

Example: C, C++, Java.

Other, Dynamically typed languages: These languages can receive different data types over time. For example- Ruby, Python, JavaScript, etc.

JavaScript is a dynamically typed (also called loosely typed) scripting language. That is in JavaScript, variables can receive different data types over time. Datatypes are basically typed data that can be used and manipulated in a program.

*The latest ECMAScript(ES6) standard defines following data types: Out of which six data types are Primitive(predefined).* 

+ Numbers: Represent both integer and floating-point numbers. Example: 5, 6.5, 7 etc.
+ String: A string is a sequence of characters. In JavaScript, strings can be enclosed within the single or double quotes. Example: “Hello GeeksforGeeks” etc.
+ Boolean: Represent a logical entity and can have two values: true or false.
+ Null: This type has only one value : null.
+ Undefined: A variable that has not been assigned a value is undefined.
+ Symbol: Unlike other primitive data types, it does not have any literal form. It is a built-in object whose constructor returns a symbol-that is unique. 
+ BigInt: The Bigint type represents the whole numbers that are larger than 253-1. To form a BigInt literal number, you append the letter n at the end of the number.
+ Object: It is the most important data-type and forms the building blocks for modern JavaScript. We will learn about these data types in detail in further articles.


## Concatenation and Template Literal

The same + operator you use for adding two numbers can be used to concatenate two strings.
```js
const str = 'Hello' + ' ' + 'World';
str; // 'Hello World'
You can also use +=, where a += b is a shorthand for a = a + b.

let str = 'Hello';
str += ' ';
str += 'World';
str; // 'Hello World'
```

If the left hand side of the + operator is a string, JavaScript will coerce the right hand side to a string. That means it is safe to concatenate objects, numbers, null, and undefined.

```js
let str = 'Values: ';
str += 42;
str += ' ';

str += {};
str += ' ';

str += null;

str; // 'Values: 42 [object Object] null'
``` 

Template Literal in ES6 provides new features to create a string that gives more control over dynamic strings. Traditionally, String is created using single quotes (‘) or double quotes (“) quotes. Template literal is created using the backtick (`) character.

```
Syntax: var s = `some string` ;
```

Multiline Strings: In-order to create a multiline string an escape sequence \n was used to give new line character. However, Template Literals there is no need to add \n string ends only when it gets backtick (`) character.

Expressions: To dynamically add values into new Template Literals expressions are used. The ${} syntax allows an expression in it that produces the value. This value can be a string stored in a variable or a computation operation.

```
${expression}
```