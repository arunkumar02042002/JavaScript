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

## Arithmetic Operators - JS

JavaScript Arithmetic Operators are the operators that operate upon the numerical values and return a numerical value. There are many operators in JavaScript. Each operator is described below along with its example.

1. Addition (+) The addition operator takes two numerical operands and gives their numerical sum. It also concatenates two strings or numbers.

Syntax:
```
a + b
```
Example:
```
// Number + Number => Addition 
1 + 2 gives 3

// Number + String => Concatenation
5 + "hello" gives "5Hello"
```
2. Subtraction (-) The subtraction operator gives the difference of two operands in the form of numerical value.

Syntax:
```
a - b
Example:

// Number - Number => Subtraction 
10 - 7 gives 3

"Hello" - 1 gives Nan
```
3. Multiplication (*) The multiplication operator gives the product of operands where one operand is multiplicand and another is multiplier.

Syntax:
```
a * b
```
Example:

```
// Number * Number => Multiplication
3 * 3 gives 9
-4 * 4 gives -16

Infinity * 0 gives NaN
Infinity * Infinity gives Infinity
'hi' * 2 gives NaN
```

4. Division (/) The division operator provides the quotient of its operands where the right operand is the divisor and the left operand is the dividend.

Syntax: 
```
a / b
```
Example:

```
// Number / Number => Division
5 / 2 gives 2.5
1.0 / 2.0 gives 0.5

3.0 / 0 gives Infinity
4.0 / 0.0 gives Infinity, because 0.0 == 0
2.0 / -0.0 gives -Infinity
```

5. Modulus (%) The modulus operator returns the remainder left over when a dividend is divided by a divisor. The modulus operator is also known as remainder operator. It takes the sign of the dividend.

Syntax:
```
a % b
```
Example:
```
// Number % Number => Modulus of the number

9 % 5 gives 4
-12 % 5 gives -2
1 % -2 gives 1
5.5 % 2 gives 1.5
-4 % 2 gives -0

NaN % 2 gives NaN
```

6. Exponentiation (**) The exponentiation operator gives the result of raising the first operand to the power of the second operand. The exponentiation operator is right-associative. 

Syntax:
```
a ** b
```
In JavaScript, it is not possible to write an ambiguous exponentiation expression i.e. you cannot put an unary operator (+ / – / ~ / ! / delete / void) immediately before the base number.

Example:
```
// Number ** Number => Exponential of the number

-4 ** 2 // This is an incorrect expression
-(4 ** 2) gives -16, this is a correct expression
2 ** 5 gives 32
3 ** 3 gives 27
3 ** 2.5 gives 15.588457268119896
10 ** -2 gives 0.01
2 ** 3 ** 2 gives 512

NaN ** 2 gives NaN
```

7. Increment (++) The increment operator increments (adds one to) its operand and returns a value.

If used postfix  with operator after operand (for example, x++), then it increments and returns the value before incrementing.
If used prefix with operator before operand (for example, ++x), then it increments and returns the value after incrementing.
Syntax: 
```
a++ or ++a
```
Example:

```js
// Postfix 
var a = 2;
b = a++; // b = 2, a = 3

// Prefix
var x = 5;
y = ++x; // x = 6, y = 6
```

8. Decrement (–-) The decrement operator decrements (subtracts one from) its operand and returns a value.

If used postfix, with operator after operand (for example, x–), then it decrements and returns the value before decrementing.
If used prefix, with operator before operand (for example, –x), then it decrements and returns the value after decrementing.
Syntax:
```
a-- or --a
```
Example:

```js
// Prefix
var x = 2;
y = --x; gives x = 1, y = 1

// Postfix 
var x = 3;
y = x--; gives y = 3, x = 2
```

9. Unary (-) This is a unary operator i.e. it operates on a single operand. It gives the negation of an operand.

Syntax:
```
-a
```
Example:

```js
var a = 3;
b = -a; gives b = -3, a = 3

// Unary negation operator
// can convert non-numbers
// into a number
var a = "3";
b = -a; gives b = -3
```

10. Unary (+) This is a way to convert a non-number into a number. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.

Syntax:
```
+a
```
Example:
```
+4     gives 4
+'2'   gives 2
+true  gives 1
+false gives 0
+null  gives 0
```


## Type conversion

JavaScript is loosely typed language and most of the time operators automatically convert a value to the right type but there are also cases when we need to explicitly do type conversions.
While JavaScript provides numerous ways to convert data from one type to another but there are two most common data conversions :
 

- Converting Values to String
- Converting Values to Numbers

1. Implicit Conversion: There are various operators and functions in JavaScript which automatically convert a value to the right type like alert() function in JavaScript accepts any value and convert it into a string. But various operator creates a problem like ‘+’ operator.

Example:
```
Input: "2" + "3"
Output: "23"
here + operator stands for string concatenation in this case.
But "3" - "1" gives output 2 by using Implicit Conversion.
```

2. Converting Values to Strings: String() or toString() function can be used in JavaScript to convert a value to a string.

Syntax of String() function:
```
String(value)
```
Example:
```
Input:
var v = 1555;
var s = String(v);
Output:
now s contains "1555".
```

Syntax of toString() function:

```
variableName.toString(base)
```
Example:
```
Input:
var v = 1555;
var s = v.toString();
Output:
now s contains "1555".
```
For more information on toString( ) function check this article JavaScript | toString( ) function.

3. Converting Values to Numbers:
We can use Number() function in JavaScript to convert a value to a Number. It can convert any numerical text and boolean value to a Number. In case of strings of non-numbers it will convert it to a NaN(Not a Number).
Syntax:
```
Number(valueToConvert)
```
Example:

Input:
```js
var s = "144";
var n = Number(s);
```

Output:
```
now n contain 144(Number).
```

## ReadlineSync

Readline Module in Node.js allows the reading of input stream line by line. This module wraps up the process standard output and process standard input objects. Readline module makes it easier for input and reading the output given by the user. To use this module, create a new JavaScript file and write the following code at the starting of the application :
```
var readline = require('readline');
```
The Readline module comes with different methods to interact with the user.
 

Interaction with the user: For the interaction, we will first create an interface for the input and output. For creating an interface, write the following code :
```
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
```
Here, the createInterface() method takes two arguments. The first argument will be for the standard input and the second one will be for reading the standard output. 
```
rl.question('What is your age? ', (age)=> {
    console.log('Yor age is: ' + age);
});
```
Here, rl.question() method is used for asking questions from the user and reading their reply (output). The first parameter is used to ask the question and the second parameter is a callback function which will take the output from the user as the parameter and return it on the console. 

The output for the above code will be :
```
What is your age? 20
Your age is: 20
```

Here, the problem is, it will not exit the application and it will keep asking for the inputs. To resolve this issue, rl.close() method is used. This method will close the interface. To use it in the application, write the following :
```
rl.question('What is your age? ', (age) => {
   console.log(' Your age is: ' + age);
   rl.close();
});
```
