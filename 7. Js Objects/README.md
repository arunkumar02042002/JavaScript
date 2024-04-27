# Object and its Properties

Objects, in JavaScript, is the most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript’s primitive data types (Number, String, Boolean, null, undefined and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).

Syntax:
```
let object_name = {
    key_name : value,
    ...
}
```

Let us look at an example of a JavaScript Object below :

```js
let school = {
        name: 'Vivekananda School',
        location : 'Delhi',
        established : '1971',
        displayInfo : function(){
            console.log(`${school.name} was established 
                  in ${school.established} at ${school.location}`);
        }
    }
    school.displayInfo(); 
```

Output:
```
Vivekananda School was established in 1971 at Delhi
```

**In this example** “name”, “location”, “established” are all “keys” and “Vivekananda School”, “Delhi” and 1971 are values of these keys respectively. Each of these keys is referred to as properties of the object. An object in JavaScript may also have a function as a member, in which case it will be known as a method of that object. Here  “displayinfo” is a method of the school object that is being used to work with the object’s data, stored in its properties.

- Objects are more complex and each object may contain any combination of these primitive data-types as well as reference data-types.

- An object is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.

- Loosely speaking, objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and the value can be anything.


## Properties of JavaScript Object

The property names can be strings or numbers. In case the property names are numbers, they must be accessed using the “bracket notation” like this : 

```js
let school = {
        name: 'Vivekananda School',
        location : 'Delhi',
        established : '1971',
        20 : 1000,
        displayInfo : function(){
            console.log(`The value of the key 20 is ${school['20']}`);
        }
    }
    school.displayInfo();   
```

Output:
```
The value of the key 20 is 1000
```

But more on the bracket notation later. Property names can also be strings with more than one space separated words. In which case, these property names must be enclosed in quotes :

```js
let school = {
    "school name" : "Vivekananda School",
}
Like property names which are numbers, they must also be accessed using the bracket notation. Like if we want to access the ‘Vivekananda’ from ‘Vivekananda School’ we can do something like this: 


 // Bracket notation 
    let school = {
        name: 'Vivekananda School',
        displayInfo : function(){
            console.log(`${school.name.split(' ')[0]}`);
        }
    }
    school.displayInfo(); // Vivekananda
```

Output:
```
Vivekananda
```
In the above code, we made use of bracket notation and also split method provided by JavaScript.


==============================================================================================

# Functions as Property

In JavaScript, functions can be used as properties of objects. This can be a powerful tool for organizing and encapsulating functionality within an object, making it easier to maintain and reuse code.

To better understand this concept, let's dive into some code examples and interact with them.

- Step 1: Defining a Function Property

Let's start by creating an object that contains a function property:
```js
const person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log(
);
  }
};
```

Here, we define an object person with properties name and age, as well as a function property sayHello. This function uses the this keyword to reference the name property of the object it is called on.

- Step 2: Calling the Function Property

Now that we have defined our object with a function property, let's call it:

person.sayHello(); // Output: "Hello, my name is John!"
This will execute the sayHello function and output the message "Hello, my name is John!".

- Step 3: Modifying a Function Property

Function properties can also be modified like any other property of an object. Let's modify the sayHello function to change the name of the person:

```js
person.sayHello = function() {
    console.log("Hello");
};
```
Here, we redefine the sayHello function to output a new message with the last name "Doe".

- Step 4: Calling the Modified Function Property

Now let's call the modified sayHello function:

person.sayHello(); // Output: "Hello, my name is John Doe!"
This will execute the modified sayHello function and output the message "Hello, my name is John Doe!".

- Step 5: Creating Multiple Instances of an Object

JavaScript allows us to create multiple instances of an object, each with its own properties and function properties. Let's create two instances of our person object:

```js
const person1 = {
  name: "Jane",
  age: 25,
  sayHello: function() {
    console.log(
);
  }
};

const person2 = {
  name: "Bob",
  age: 35,
  sayHello: function() {
    console.log(
);
  }
};
```

Here, we create two instances of the person object with different values for the name and age properties, as well as their own sayHello function properties.

- Step 6: Calling the Function Property on Multiple Instances

Now let's call the sayHello function on both instances:

```js
person1.sayHello(); // Output: "Hello, my name is Jane!"
person2.sayHello(); // Output: "Hello, my name is Bob!"
```

This will execute the sayHello function on each instance and output the corresponding message.

==============================================================================================

# Computed Properties

Javascript Object:  Javascript objects contain key-value pairs in which the key represents a property from which we can get and set the value of the object. Now we will see how to declare an object with a computed property name. 

1. Method 1:  We will use the expression within the [ ] (square bracket) to create the name of an object property. In ES6, it is possible to use an expression within brackets ‘[ ]’. Depending on the result of the expression, a property name will be assigned to an object. 

```js
let LAST_NAME = "lastname";
let fullname = {
firstname: "somya",
[LAST_NAME]: "jain"
};
console.log(
"My fullname is: " + fullname.firstname
+ " " + fullname.lastname
);
```

Output:
```
My fullname is: somya jain
```
 

2. Method 2:  In this method, We will create the property name of an object dynamically. As part of this method, we will dynamically create an object and add a property name and assign a value to that specific property in order to create a customized key-value pair.  

Syntax:

```js
objectname["name of the property name"]=value

let LAST_NAME = "lastname";
    let fullname = {
        firstname: "somya"
    };
    fullname[LAST_NAME] = "jain";
    console.log(
        "My fullname is: " + fullname.firstname
            + " " + fullname.lastname
    );
```

Output: 
```
My fullname is: somya jain
```

==============================================================================================

# Property Shorthand

Objects in JavaScript are the most important data-type and forms the building blocks for modern JavaScript. These objects are quite different from JavaScript primitive data-types (Number, String, Boolean, null, undefined, and symbol) in the sense that while these primitive data-types all store a single value each (depending on their types).

The shorthand syntax for object property value is very popular and widely used nowadays. The code looks cleaner and easy to read. The shorthand property makes the code size smaller and simpler.

Example: This example displaying the details of object using shorthand Syntax for object property value in ES6.

```js
// Object property shorthand
const name = 'Raj'
const age = 20
const location = 'India'
  
// User with ES6 shorthand
// property 
const user = {
    name,      
    age,
    location
}
  
console.log(user) 
```

Output:
```
{ name: 'Raj', age: 20, location: 'India' }
```

Example: This example displaying the details of the object without using shorthand Syntax for object property value.

```js
// Object property shorthand
const name = 'Raj'
const age = 20
const location = 'India'
  
// User without ES6 
// shorthand property 
const user = {
    name: name,      
    age: age,
    location: location
}
  
console.log(user) 
```

Output:
```
{ name: 'Raj', age: 20, location: 'India' }
```

==============================================================================================

# for- in Loop

For-in loop in JavaScript is used to iterate over the properties of an object. It can be a great debugging tool if we want to show the contents of an object. The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”. The key values in an object have four attributes : value, writable, enumerable, configurable. Enumerable when set to “true” means that we can iterate over that property. You can read about the four key attributes in the property attributes section of Objects in JavaScript. Read more on enumerable Enumerable Properties in JavaScript.

A simple example to illustrate the for-in loop:

```js
const list = [10, 20, 30];
let total = 0;
for (const item in list) {
    total += list[item];
}
console.log(total);
```

Output:
```
60
```

### Important points:

- Use the for-in loop to iterate over non-array objects. Even though we can use for-in loop for array, it is generally not recommended. Instead, use a for loop for looping over an array.
- The properties iterated with for-in loop also includes the properties of the objects higher in the Prototype chain.
- The order in which properties are iterated may not match with the properties that are defined in the object.

Syntax: 
```js
for (let i in obj1) {
  
    // Prints all the keys in
    // obj1 on the console
    console.log(i);
 


 const courses = {
 
        // Declaring a courses object
        firstCourse: "C++ STL",
        secondCourse: "DSA Self Paced",
        thirdCourse: "CS Core Subjects"
    };
 
    // Creating a new empty object with
    // prototype set to courses object
    const student1 = Object.create(courses);
 
    // Defining student1 properties and methods
    student1.id = 123;
    student1.firstName = "Prakhar";
    student1.showEnrolledCourses = function () {
        console.log(courses);
    }
 
    // Iterating over all properties of
    // student1 object
    for (let prop in student1) {
        console.log(prop + " -> "
            + student1[prop]);
    }
}
```

Output:

```
id -> 123
firstName -> Prakhar
showEnrolledCourses -> function () {
        console.log(courses);
    }
firstCourse -> C++ STL
secondCourse -> DSA Self Paced
thirdCourse -> CS Core Subjects
```

==============================================================================================

# Object Refrence and Deep Copy

One of the fundamental differences of objects versus primitives is that objects are stored and copied by reference, whereas primitive values: strings, numbers, Booleans, etc - are always copied as a whole value.

To copy an object in JavaScript, you have three options:

- Use the spread (...) syntax
- Use the Object.assign() method
- Use the JSON.stringify() and JSON.parse() methods

```js
const person = {
    firstName: 'Geek',
    lastName: 'Sharma'
};

let p1 = {
    ...person
};

let p2 = Object.assign({}, person);

let p3 = JSON.parse(JSON.stringify(person));
```

Both spread (...) and Object.assign() perform a shallow copy while the JSON methods carry a deep copy


### Shallow copy vs Deep copy

Variables are used in JavaScript to store values, which can be references or primitives. A new variable with the identical value is created when a value contained in a variable is copied. You can just use an assignment for a primitive value:

```js
let a = 1;
let copya = a;

copya=2;
console.log(a);
```

Output:
```
1
```

When you change the value of the copya variable, the value of the original remains the same.

However, using the assignment operator on a reference value will prevent it from copying the value. As an alternative, the identical memory item will be referenced by both variables:

```
let person = {
    firstName: 'Geek',
    lastName: 'Sharma'
};
let copiedPerson = person;

copiedPerson.firstName = 'Prabal';
console.log(person);
```

Output:
```
{ firstName: 'Prabal', lastName: 'Sharma' }
```

A shallow copy indicates that certain values of the new variable are still connected to the original variable, but a deep copy means that all of the values of the new variable are separated from the original variable.


Shallow Copy example

```js
let person = {
    firstName: 'Geek',
    lastName: 'Sharma',
    address: {
        street: 'Connaught Place',
        city: 'New Delhi',
        country: 'India'
    }
};


let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = 'Prabal'; // disconnected

copiedPerson.address.street = 'Niwaru'; // connected
copiedPerson.address.city = 'Jaipur'; // connected

console.log(copiedPerson);

console.log(person);
```

Output:
```
{
  firstName: 'Prabal',
  lastName: 'Sharma',
  address: { street: 'Niwaru', city: 'Jaipur', country: 'India' }
}
{
  firstName: 'Geek',
  lastName: 'Sharma',
  address: { street: 'Niwaru', city: 'Jaipur', country: 'India' }
}
```
When you show the values of the person object, you will find that the address information changed but the first name.

The explanation is that while the first name is a primitive value, the address is a reference value. Although the references for copiedPerson and person are different, the references for these objects are the same for address objects.
 

Deep Copy example

The following code replaces the Object.assign() method by the JSON methods to carry a deep copy the person object:

```js
let person = {
    firstName: 'Geek',
    lastName: 'Sharma',
    address: {
        street: 'Connaught Place',
        city: 'New Delhi',
        country: 'India'
    }
};


let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = 'Prabal'; // disconnected

copiedPerson.address.street = 'Niwaru';
copiedPerson.address.city = 'Jaipur';

console.log(person);
```

Output:

```js
{
  firstName: 'Geek',
  lastName: 'Sharma',
  address: { street: 'Connaught Place', city: 'New Delhi', country: 'India' }
}
```

In this illustration, every value in the copiedPerson object is segregated from the values in the person object. You have now mastered the shallow copy and deep copy methods for copying objects in JavaScript.


==============================================================================================

# Optional Chaining

The optional chaining ‘?.’ is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist. It was recently introduced by ECMA International, Technical Committee 39 – ECMAScript which was authored by Claude Pache, Gabriel Isenberg, Daniel Rosenwasser, Dustin Savery. It works similar to Chaining ‘.’ except that it does not report the error, instead it returns a value which is undefined. It also works with function call when we try to make a call to a method which may not exist.

When we want to check a value of the property which is deep inside a tree-like structure, we often have to perform check whether intermediate nodes exist.

let Value = user.dog && user.dog.name;
 

The Optional Chaining Operator allows a developer to handle many of those cases without repeating themselves and/or assigning intermediate results in temporary variables:

```
let Value = user.dog?.name;
```

Syntax: 
```
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)
```

Note: If this code gives any error try to run it on online JavaScript editor.

Example: Optional Chaining with Object

```js
const user = {
  dog: {
    name: "Alex"
  }
};
 
console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
console.log(user.cat.name);
```

Example: Optional Chaining with Function Call

```js
let user1 = () => console.log("Alex");
let user2 = {
  dog(){
    console.log("I am Alex");
  }
}
let user3 = {};
 
user1?.();       // Alex
user2.dog?.();   // I am Alex
user3.dog();     // ERROR - Uncaught TypeError:
                 // user3.dog is not a function.
user3.dog?.();   // Will not generate any error.
```


==============================================================================================

# Destructuring Object

Similar to array destructuring, but with the ability to extract an object's properties (or keys) and their associated values rather than values from an array.

We utilise keys as the variable name while destructuring the objects. The name of the variable and the object's property (or keys) must correspond. If it doesn't match, it gets a value that isn't specified. JavaScript learns which property of the object we wish to attach by doing this.

In object destructuring, keys rather than positions are used to extract data (or index).

First, use the following example to try to understand the fundamental assignment in object destructuring.


- Simple assignment

```js
const num = {
a: 1, 
b: 2
};  
const {a, b} = num;  
  
console.log(a); // 1  
console.log(b); // 2  
```

Output:
```
1
2
```

Let us understand the basic object destructuring assignment.

 

- Basic Object Destructuring assignment

```
const student = {name: 'Prabal', rollno: '5'};  
const {name, rollno} = student;  
console.log(name); 
console.log(rollno);
``` 

Output:
```
Prabal
5
```

- Object destructuring and default value

Similar to array destructuring, if the value unpacked from the object is undefined, a default value can be assigned to the variable. The example that follows should make it clear.

```js
const {a = 1, b = 2} = {a: 5};  
  
console.log(a);   
console.log(b);  
```

Output:
```
5
2
```

- Assigning new variable names

We can assign a variable with a different name than the property of the object. You can see the illustration for the same as follows:

```js
const num = {x: 1, y: 2};  
const {x: a, y: b} = num;  
   
console.log(a);   
console.log(b); 
```

Output:
```
1
2
```

- Rest operator 

We can store all of an object's remaining keys in a new object variable by using the remainder operator (...) during object destructuring.

```js
let {a, b, ...args} = {a: 1, b: 2, c: 3, d: 4, e: 5}  
console.log(a);   
console.log(b);   
console.log(args);  
```

Output:
```
1
2
{ c: 3, d: 4, e: 5 }
```

==============================================================================================

# Keys, Values & entires

We have 3 different Methods that we can apply to Objects to make our life easier.

Let us try to understand this with an example-

1) Object.entries(): returns an array containing sub-arrays that contain Key-value pair from the Original Object.

```js
const obj = {
 name:"Prakash",
 age:99,
 city:"Mumbai"
};

const entries = Object.entries(obj);
console.log(entries);
```

Output
```
[ [ 'name', 'Prakash' ], [ 'age', 99 ], [ 'city', 'Mumbai' ] ]
```

2) Object.keys(): this method returns an array containing all the keys of an Object.

```js
const obj = {
 name:"Prakash",
 age:99,
 city:"Mumbai"
};

const keys = Object.keys(obj);
console.log(keys);
```

Output:
```
[ 'name', 'age', 'city' ]
```
 

3) Object.values(): this method returns an array containing all the values of the Object.

```js
const obj = {
 name:"Prakash",
 age:99,
 city:"Mumbai"
};

const values = Object.values(obj);
console.log(values);
```

Output:
```
[ 'Prakash', 99, 'Mumbai' ]
```

==============================================================================================

# "this" keyword

In JavaScript, this refers to the current execution context or scope. It can be a bit confusing at first, but understanding how this works is crucial for writing effective and efficient JavaScript code.

### What is "this"?

In simple terms, this refers to the object that the current function is a method of. It can also refer to the global object (i.e. window in a browser environment) if the function is not part of an object.

Here's an example to illustrate this:

```js
const person = {
  name: "John",
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

person.sayHello(); // Output: "Hello, my name is John!"
```

In this example, this refers to the person object because the sayHello function is part of that object. When we call person.sayHello(), the output is "Hello, my name is John!" because this.name refers to the name property of the person object.

How is "this" Determined?

The value of this is determined at runtime based on how a function is called, not how it is defined. There are four ways that this can be determined:

Global Scope: If a function is called in the global scope (i.e. not part of an object), this refers to the global object. In a browser environment, the global object is window.

```js
function sayHello() {
  console.log(`Hello, my name is ${this.name}!`);
}

sayHello(); // Output: "Hello, my name is undefined!" (assuming there is no global variable called "name")
```

In this example, this refers to the global object because sayHello() is not part of an object.

**Method Invocation:** If a function is called as a method of an object, this refers to that object.
```js
const person = {
  name: "John",
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};

person.sayHello(); // Output: "Hello, my name is John!"
```

In this example, this refers to the person object because sayHello() is called as a method of that object.

**Constructor Invocation:** If a function is called with the new keyword, this refers to the newly created object.

```js
function Person(name) {
  this.name = name;
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const person = new Person("John");
person.sayHello(); // Output: "Hello, my name is John!"
```

In this example, this refers to the newly created Person object because we are using the new keyword to create a new object.

**Explicit Binding:** If a function is called using call() or apply(), this is explicitly set to the object passed as an argument to call() or apply().

```js
function sayHello() {
  console.log(`Hello, my name is ${this.name}!`);
}

const person = {
  name: "John"
};

sayHello.call(person); // Output: "Hello, my name is John!"
```
In this example, we use call() to call the sayHello() function and explicitly set this to the person object.

==============================================================================================


# Constructor " New "

In this article, we are going to take a look at How Constructor Functions work in conjunction with New Keyword 

Constructor functions are technically like regular functions but they follow two conventions 

Name starts with a capital letter
They should be executed only with a new operator 
 
```js
function User(){
  console.log("Called as Construtor fn");
}

const user = new User();
console.log(user);
```

Output:
```
Called as Construtor fn
User {}
``` 

here in the output, you can see that We get an Object in return as User{}

Let's see what happens when we don't use the new Keyword 

```js
function User(){
  console.log("Called as Construtor fn");
}

const user =  User;
console.log(user);
```

Output:
```
[Function: User]
```

Here You can see that function is assigned to the variable user and did not return an object.
So what does the new keyword Do?

When the constructor function is executed new keyword creates an Object and this is assigned the value of the Object created .
So Constructor functions are generally used to create multiple Objects of the same type . Suppose we want to create 10 users with both name and age as their property .It will become difficult to create them using Object literally. In such scenarios, Constructor Function comes to the rescue.
let us try to understand this with an example.
 

```js
function User(name,age){
  (this.name=name),(this.age=age);
}

const user1 = new User("Prakash",27);
const user2 = new User("Ashish",25);
const user3 = new User("Sadaf",25);
const user4 = new User("Rohan",28);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
```


Output:
```
User { name: 'Prakash', age: 27 }
User { name: 'Ashish', age: 25 }
User { name: 'Sadaf', age: 25 }
User { name: 'Rohan', age: 28 }
```

Here we have created four users with name and age as properties, and in each case, this refers to the Object created when Constructor Function was invoked using this function.4

==============================================================================================


# Function Borrowing - call and apply

### What is Function Borrowing?

Function borrowing is the concept of reusing a method from one object on another object. This can be useful when you have two objects that share similar properties or functionality but are not related through inheritance.

For example, imagine you have two objects person1 and person2 with similar properties and methods, but they are not related through inheritance:
```js
const person1 = {
  name: "Rishi",
  age: 30,
  greet: function() {
    console.log(
);
  }
};

const person2 = {
  name: "Harsh",
  age: 25
};
```

Now, let's say we want to borrow the greet method from person1 and use it on person2. We can do this using the call() or apply() methods.

1. The call() Method

The call() method allows us to call a function and specify the value of this explicitly. We can pass in the object we want to borrow the method from as the first argument to call(), which will set this to that object. Any additional arguments will be passed to the function as parameters.

Here's an example of using call() to borrow the greet method from person1 and use it on person2:

```
person1.greet.call(person2); // Output: "Hi, my name is Harsh and I am 25 years old."
```

In this example, we use call() to call the greet method from person1, but set this to person2. This allows us to borrow the method and use it on person2. The output is "Hi, my name is Harsh and I am 25 years old.", which is the expected result.

2. The apply() Method

The apply() method is similar to call(), but it accepts an array of arguments instead of individual arguments. This can be useful when you have a dynamic number of arguments to pass to the function.

Here's an example of using apply() to borrow the greet method from person1 and use it on person2:

```
person1.greet.apply(person2); // Output: "Hi, my name is Harsh and I am 25 years old."
```

In this example, we use apply() to call the greet method from person1, but set this to person2. We don't have any additional arguments to pass to the function, so we just pass an empty array []. The output is "Hi, my name is Harsh and I am 25 years old.", which is the expected result.


==============================================================================================

# Function Borrowing - bind

### What is Function Borrowing?

Function borrowing is the concept of reusing a method from one object on another object. This can be useful when you have two objects that share similar properties or functionality but are not related through inheritance.

For example, imagine you have two objects person1 and person2 with similar properties and methods, but they are not related through inheritance:

```js
const person1 = {
  name: "Rishi",
  age: 30,
  greet: function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

const person2 = {
  name: "Harsh",
  age: 25
};
```

Now, let's say we want to borrow the greet method from person1 and use it on person2. We can do this using the bind() method.

1. The bind() Method

The bind() method creates a new function with this set to a specific value. It returns a new function that we can call later. We can pass in the object we want to borrow the method from as the argument to bind(), which will set this to that object.

Here's an example of using bind() to borrow the greet method from person1 and use it on person2:

```js
const greetPerson2 = person1.greet.bind(person2);
greetPerson2(); // Output: "Hi, my name is Harsh and I am 25 years old."
```

In this example, we use bind() to create a new function greetPerson2 that has this set to person2. We can call greetPerson2() later to use the borrowed method on person2. The output is "Hi, my name is Harshand I am 25 years old.", which is the expected result.

2. Passing Arguments with bind()

We can also pass arguments to the borrowed function using bind(). Any arguments passed after the object argument will be bound to the function and cannot be changed when the function is called.

Here's an example of using bind() to pass an argument to the borrowed greet method:

```js
const greetPerson2WithPrefix = person1.greet.bind(person2, "Hello");
greetPerson2WithPrefix(); // Output: "Hello, my name is Harsh and I am 25 years old."
```

In this example, we use bind() to create a new function greetPerson2WithPrefix that has this set to person2 and also passes the string "Hello" as an argument. When we call greetPerson2WithPrefix(), the output is "Hello, my name is Harsh and I am 25 years old.", which includes the prefix "Hello" that we passed with bind().


## Some important Objects concept

```js
function displayName(){
  console.log(this);
}

const user1 = {
  name: "Arun",
  showName: displayName;
}

user1.showName() // Here 'this' will refer to the user1 object.

const user2 = {
  name: "Bk",
  showName: function() {
    displayName()
  };
}

user2.showName() // Here 'this' will refer to the window object. as displayName is not the property of user2 and is called withing a function.
```

```js
const person {
  name: "Arun",
  sayHi: function() {
    console.log("Welcome ", this.name);
  }
}

person.sayHi() // Output: Welcome Arun

const person2 = person.sayHi; // person2 is now a regular function
person2() // Output: Welcome -> here 'this' refers to the window object and it has no property named 'name'
```