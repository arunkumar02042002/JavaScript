# Prototype


Every object in Javascript has a hidden property called **"Prototype"**. The value of this property can be null or a reference to another object. 

```js
const user = { 
    name : "Prakash",
    role : "mentor",
};
console.log (user) ;
```

Output
```
{ name: 'Prakash', role: 'mentor' }
```

### Accessing Prototype Methods:
```js
const user = { 
    name : "Prakash",
    role : "mentor",
};
console.log (user) ;
console.log(user.toString());
```

**Output:**
```
{ name: 'Prakash', role: 'mentor' }
[object Object]
```

**Explanation:**

The code creates an object named "user" with two properties, *"name"* and *"role"*, set to *"Prakash"* and *"mentor"*, respectively.

The first console.log(user) statement logs the entire user object to the console. The output would be: `{ name: 'Prakash', role: 'mentor' }`.

The second `console.log(user.toString())` statement calls the *toString()* method on the user object. Since the user object doesn't have its own toString() method defined, JavaScript will look for it in the prototype chain of the user object.

Since toString() method is not found in the user object, JavaScript looks for it in the prototype of user, which is Object.prototype. The Object.prototype.toString() method is found in the prototype of user, and it is called to convert the user object to a string.

The output of `console.log(user.toString())` would be: `[object Object]`. This is the default *toString()* method provided by Object.prototype that returns a string representation of the object.

Declaring Prototype :
`__proto__` : *"proto"* is a reserved keyword used for creating prototypes in JavaScript. In the given example, it is used to set the prototype of the user object to the admin object.

```js
const admin={
    isAdmin : true,
};

const user = { 
    name : "Prakash",
    role : "mentor", 
    __proto__ : admin,
};

console.log (user) ;
console.log(user.isAdmin);
```

**Output:**
```
{ name: 'Prakash', role: 'mentor' }
true
```

**Explanation:**

The code creates two objects, admin and user. The admin object has one property isAdmin set to true.

The user object has three properties, name set to "Prakash", role set to "mentor", and `__proto__` set to the admin object.

The `__proto__` property is a reference to the prototype object of user. In this case, it is pointing to the admin object, which means that any property or method that is not found in the user object will be looked up in the admin object.

The first console.log(user) statement prints the entire user object to the console, which would display the output as: { name: 'Prakash', role: 'mentor', proto: { isAdmin: true } }.

The second console.log(user.isAdmin) statement accesses the isAdmin property of the user object. Since isAdmin is not found in the user object, JavaScript looks for it in the prototype of user, which is the admin object. The isAdmin property is found in the admin object, and its value is true.

The output of console.log(user.isAdmin) would be: true.

**Note : Nested prototype is also possible**

## Prototype Chaining:

**Prototype chaining** is a mechanism in JavaScript that allows objects to inherit properties and methods from their prototypes. When a property or method is accessed on an object, JavaScript first looks for that property or method on the object itself. If the property or method is not found on the object, it then looks for it on the object's prototype. If the property or method is not found on the prototype, it continues to look up the prototype chain until it reaches the end of the chain. 

```js
const loggedInStatus={
    isLoggedIn : false,
};

const admin={
    isAdmin : true,
    __proto__ : loggedInStatus,
};

const user = { 
    name : "Prakash",
    role : "mentor", 
    __proto__ : admin,
};

console.log (user) ;
console.log(user.isLoggedIn);
```

**Output:**
```
{ name: 'Prakash', role: 'mentor' }
false
```

**Explanation:**

The code defines two objects: admin and user. The admin object has a property isAdmin with a value of true. The user object has two properties, name and role, and its `__proto__` property is set to admin, which means that the user object inherits all properties from the admin object.

In this code, when console.log(user) is executed, it prints out the user object, which includes the name and role properties as well as the `__proto__` property that refers to the admin object. When console.log(user.isAdmin) is executed, it first checks if the isAdmin property exists on the user object itself, which it does not. So it then looks for the property on the admin object, which it finds and returns its value of true. Therefore, the output of console.log(user.isAdmin) is true. 

**Note : One object can only have one prototype.**

## Prototype Methods:

```js
const loggedInStatus={
isLoggedIn : false,};

const admin={
isAdmin : true,
__proto__ : loggedInStatus,

showMessage(){
console.log("user is the admin");
}
};
const user = { 
name : "Prakash",
role : "mentor", 
__proto__ : admin,};

console.log (user) ;
user.showMessage();
```

**Output:**
```
{ name: 'Prakash', role: 'mentor' }
user is the admin
```

**Explanation:**

This code defines an object named admin with two properties: `isAdmin` and `showMessage()`. The `showMessage()` method logs the message `"user is the admin"` to the console.

Next, an object named user is created with three properties: name, role, and `__proto__`. The `__proto__` property sets the prototype of the user object to the admin object. This means that any properties or methods that are not found on the user object will be looked for on the admin object.

Finally, user object is logged to the console, followed by a call to `user.showMessage()`. Since user does not have its own `showMessage()` method, the JavaScript engine looks for it on the prototype chain. It finds it on the admin object, and so it is called, resulting in the message `"user is the admin"` being logged to the console.

## Overriding Prototype Methods:

```js
const loggedInStatus={
isLoggedIn : false,};

const admin={
isAdmin : true,
__proto__ : loggedInStatus,

showMessage(){
console.log("user is the admin");
}
};
const user = { 
name : "Prakash",
role : "mentor", 
showMessage(){
console.log("hello user");
},
__proto__ : admin,};


user.showMessage();
```

**Output:**
```
hello user
```

**Explanation:**

The code creates two objects, admin and user, and defines a method `showMessage()` on each of them.

The admin object has a property isAdmin set to true, and a `showMessage()` method that logs the message "user is the admin" to the console.

The user object has a property name set to "Prakash", a property role set to "mentor", and a `showMessage()` method that logs the message "hello user" to the console. The  __proto__ property of user is set to admin, which means that user inherits the isAdmin property and `showMessage()` method from admin.

The console.log(user) statement logs the user object to the console, which will display its properties and methods, including isAdmin and `showMessage() `inherited from admin.

The `user.showMessage()` statement invokes the `showMessage()` method on the user object, which will log the message `"hello user"` to the console, as defined in the user object's `showMessage()` method. This method overrides the `showMessage()` method inherited from admin.

## Keys:

1. Object.Keys ( ) :

```js
const loggedInStatus={
isLoggedIn : false,};
const admin = {
isAdmin: true,
_proto_: loggedInStatus,
showMessage() {
console.log(this.isAdmin);
},
};
const user = {
name:"prakash",
role: "mentor",
_proto_: admin,
};
console.log(user);
console.log(Object.keys (user));
```

**Output:**
```
{
  name: 'prakash',
  role: 'mentor',
  _proto_: {
    isAdmin: true,
    _proto_: { isLoggedIn: false },
    showMessage: [Function: showMessage]
  }
}
[ 'name', 'role', '_proto_' ]
```

**Explanation:**

The code above creates three objects: `loggedInStatus`, `admin`, and `user`. `loggedInStatus` has a single property called isLoggedIn, while admin has two properties called `isAdmin` and `showMessage`. `showMessage` is a method that logs the value of the `isAdmin` property to the console.

The user object has two properties called `name` and `role`, and a method called showMessage that logs `"hello user" `to the console. The proto property of user is set to the admin object, which creates a prototype chain.

When the code is executed, the `console.log(user)` statement displays the user object with its own properties and the properties inherited from the admin object.

The second `console.log(Object.keys(user))` statement logs only the keys present in the user object and not those in its prototype chain. Therefore, it only logs the keys `"name"` and `"role"` that are present in the user object, and not the `"isAdmin"` and `"showMessage"` keys that are inherited from the admin object.

In summary, the code demonstrates how objects can inherit properties and methods from their prototypes through the prototype chaining mechanism. The `Object.keys()` method is used to get only the keys present in an object and not those in its prototype chain.

2. For Loop : 
```js
const loggedInStatus={
isLoggedIn : false,};
const admin = {
isAdmin: true,
_proto_: loggedInStatus,
showMessage() {
console.log(this.isAdmin);
},
};
const user = {
name: "prakash",
role: "mentor",
_proto_: admin,
};
console.log(user);
console.log(Object.keys(user));
for (let key in user) {
console.log(key);
}
```

**Output:**
```
{
  name: 'prakash',
  role: 'mentor',
  _proto_: {
    isAdmin: true,
    _proto_: { isLoggedIn: false },
    showMessage: [Function: showMessage]
  }
}
[ 'name', 'role', '_proto_' ]
name
role
_proto_
```

**Explanation:**

The given code defines three objects: `loggedInStatus`, `admin`, and `user`. `loggedInStatus` has a single property isLoggedIn set to false. `admin` has two properties: `isAdmin` set to true and a method called `showMessage` that logs the value of the `isAdmin` property to the console. admin also has a prototype reference (proto) set to `loggedInStatus` object.

The `user` object has two properties called name and role and a prototype reference (proto) set to admin.

The first `console.log(user) `statement displays the user object with its own properties and the properties inherited from the admin object.

The second `console.log(Object.keys(user))` statement logs only the keys present in the user object and not those in its prototype chain. Therefore, it only logs the keys `"name"` and `"role"`.

The for loop is used to iterate through all the properties of the user object and print their keys to the console. The for loop will iterate over both the properties of the user object as well as those inherited from the admin object. Therefore, it will print `"name"`, `"role"`, `"isAdmin"`, and `"showMessage"` to the console.


---------------------------------------------------------------------------------


# Basics of Classes

### Class

A `Class` serves as a blueprint for creating multiple objects with similar properties and methods. One real-life example of a class is the Car class. This class defines the blueprint for creating car objects, including properties such as make, model, year, color, and price, and methods for performing actions like starting the engine, accelerating, braking, and turning.

To create a car object using the Car class, you can specify values for its properties, such as a red 2022 Tesla Model S priced at $85,000. By using the Car class, you can create multiple car objects with different values for their properties. It is important to note that the name of the class should be singular as it is used to create multiple objects.

```js
class User {
  constructor(name, role, isAdmin, isLoggedIn) {
    this.name = name;
    this.role = role;
    this.isAdmin = isAdmin;
    this.isLoggedIn = isLoggedIn;
  }
}

const User1 = new User("Prakash", "Mentor", false, true);
const User2 = new User("Ashish", "Mentor", false, true);
const User3 = new User("Sakshi", "Mentor", true, true);

console.log(User1);
console.log(User2);
console.log(User3);
```

**Output:**

```
User {
  name: 'Prakash',
  role: 'Mentor',
  isAdmin: false,
  isLoggedIn: true
}
User {
  name: 'Ashish',
  role: 'Mentor',
  isAdmin: false,
  isLoggedIn: true
}
User {
  name: 'Sakshi',
  role: 'Mentor',
  isAdmin: true,
  isLoggedIn: true
}
```

**Explanation:**

The given code defines a User class with a constructor function that initializes an instance of the class with four properties: `name`, `role`, `isAdmin`, and `isLoggedIn`.

Subsequently, three instances of the User class are created using the new keyword and assigned to the variables User1, User2, and User3, respectively. Each instance is initialized with different values for the `name`, `role`, `isAdmin`, and `isLoggedIn` properties.

Finally, the `console.log()` function is used to print the properties of each instance of the User class. Upon execution, the console displays the details of each user object.

**Declaring Methods Outside Constructors Body:**
```js
class User {
  constructor(name, role, isAdmin, isLoggedIn) {
    this.name = name;
    this.role = role;
    this.isAdmin = isAdmin;
    this.isLoggedIn = isLoggedIn;
  }
  displayInfo() {
    console.log(`${this.name} is a ${this.role}`);
  }
}

const user1 = new User("Prakash", "Mentor", false, true);
const user2 = new User("Ashish", "Mentor", false, true);
const user3 = new User("Sakshi", "Mentor", true, true);

console.log(user1.displayInfo());
console.log(user2);
console.log(user3);
```

**Output:**
```
Prakash is a Mentor
undefined
User {
  name: 'Ashish',
  role: 'Mentor',
  isAdmin: false,
  isLoggedIn: true
}
User {
  name: 'Sakshi',
  role: 'Mentor',
  isAdmin: true,
  isLoggedIn: true
}
```

**Explanation:**

The code defines a class called User, which has a constructor that takes in four parameters: name, role, isAdmin, and isLoggedIn. Inside the constructor, the this keyword is used to set the instance variables with the values of the passed parameters.

Additionally, the class has a method named `displayInfo()` that logs the name and role of the user object using string interpolation.

The code then creates three instances of the User class using the new keyword and stores them in the variables user1, user2, and user3. The `displayInfo()` method is called on user1 to log the name and role of the user.

Finally, user2 and user3 are logged to the console without calling any specific method. Since no specific method is called, the default `toString()` method is called and displays information about the instance of the class.


---------------------------------------------------------------------------------

# Classes Inheritance

## Inheritance 
Inheritance refers to the ability of a child class to inherit properties and methods from its parent class.

*Example:*

An example of inheritance in real life can be seen in the animal kingdom. The different species of animals can be grouped into families based on their shared characteristics. For example, all cats have certain common characteristics such as fur, four legs, and sharp teeth. The cat family can be further divided into sub-families such as lions, tigers, and domestic cats.

In this example, the cat family can be considered the parent class and the sub-families can be considered child classes that inherit the properties of the parent class. The child classes may have some additional properties or behaviors specific to them, but they also have the common properties of the parent class.

 
```js
class Laptop {
  constructor(ram, processor, generation) {
    this.ram = ram;
    this.processor = processor;
    this.generation = generation;
  }
  displayMessage() {
    console.log(`Laptop Spec:: RAM ${this.ram} - Processor ${this.processor} ${this.generation} Gen`);
  }
}

class Dell extends Laptop {
  constructor(ram, processor, generation) {
    super(ram, processor, generation);
  }
}

const dell1 = new Dell("8GB", "Intel", "15");
console.log(dell1);
dell1.displayMessage();
```

Output:

```
Dell { ram: '8GB', processor: 'Intel', generation: '15' }
Laptop Spec:: RAM 8GB - Processor Intel 15 Gen
```

**Explanation:**

There are two classes defined in the code: Laptop and Dell.

Laptop is the parent class, which has a constructor that initializes three properties: `ram`, `processor`, and `generation`. It also has a method called `displayMessage()` that logs a message containing the values of these properties.

Dell is the child class, which extends the Laptop class using the extends keyword. The Dell class has a constructor that takes in the same three properties as the Laptop class and calls the super method with these values to invoke the constructor of the parent class.

An instance of the Dell class is created using the new keyword and assigned to the variable dell1. The constructor of the Dell class sets the values of the `ram`, `processor`, and `generation` properties using the parent class's constructor through the super method.

Finally, the `displayMessage()` method is called on dell1, which logs the message to the console with the values of the ram, processor, and generation properties of the instance.

Thus, the concept of inheritance is used to create a child class (Dell) that inherits properties and methods from its parent class (Laptop). The Dell class can also have its own properties and methods in addition to those inherited from the parent class.

 
---------------------------------------------------------------------------------

# Static Properties and Methods

## Static Methods
Methods that are created inside a class, but the method as a whole is available to all objects of that class. For example, we can use Static Methods for sorting an employee database according to the performance of employees.

```js
class Children {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static sortByAge(a, b) {
    return a.age - b.age;
  }
}

const child1 = new Children("prakash", 11);
const child2 = new Children("ashish", 19);
const child3 = new Children("riya", 9);
let arr = [child1, child2, child3];
console.log(arr.sort(Children.sortByAge));
```

**Output:**
```
[
  Children { name: 'riya', age: 9 },
  Children { name: 'prakash', age: 11 },
  Children { name: 'ashish', age: 19 }
]
```

**Explanation:**

The code above defines a Children class with a constructor that takes name and age as parameters and assigns them to instance variables. It also defines a static method called sortByAge, which takes two Children objects a and b as parameters and returns the difference between their ages.

Next, the code creates three instances of the Children class (child1, child2, and child3) and stores them in an array called arr. The arr array is then sorted using the sortByAge static method of the Children class by calling it directly on the class itself (Children.sortByAge), rather than on an instance of the class. The sorted arr array is then logged to the console.

This demonstrates the use of a static method to perform an operation on a collection of objects of the same class. In this case, the static method sortByAge is used to sort an array of Children objects based on their age.

**Note: Static methods are generally used for performing operations and comparisons.**

## Class Field:

A class field refers to a variable that is declared and assigned a value inside a class.

*Example:*

```js
class Children {
   id = 1; 
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = Children.id++; // Assign a unique ID to each child
    }
    static sortByAge(a, b) {
        return a.age - b.age;
    }
}

const child1 = new Children("prakash", 11);
const child2 = new Children("ashish", 19);
const child3 = new Children("riya", 9);

let arr = [child1, child2, child3];
console.log(arr.sort(Children.sortByAge));
```

**Output:**
```
[
  Children { id: NaN, name: 'riya', age: 9 },
  Children { id: NaN, name: 'prakash', age: 11 },
  Children { id: NaN, name: 'ashish', age: 19 }
]
```

**Explanation:**

The code defines a class Children with three properties: id, name, and age. id is a class field that is initialized to 1. The constructor takes name and age as arguments and assigns them to the corresponding properties of the instance. It also assigns a unique ID to each instance by incrementing the class field id.

The class also defines a static method sortByAge that takes two Children instances as arguments and returns the difference in their ages.

The code creates three instances of the Children class: child1, child2, and child3. These instances are added to an array arr. The arr.sort method is called with the static method Children.sortByAge as the sorting function. This sorts the arr array in ascending order of age. Finally, the sorted array is logged to the console.

## Static Property
These static properties are defined using static keyword.

*Example:*

```js
class Children {
    static id = 1; // Declare a static property to keep track of IDs
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = Children.id++; // Assign a unique ID to each child
    }
    static sortByAge(a, b) {
        return a.age - b.age;
    }
}

const child1 = new Children("prakash", 11);
const child2 = new Children("ashish", 19);
const child3 = new Children("riya", 9);

let arr = [child1, child2, child3];
console.log(arr.sort(Children.sortByAge));
```

**Output:**
```
[
  Children { name: 'riya', age: 9, id: 3 },
  Children { name: 'prakash', age: 11, id: 1 },
  Children { name: 'ashish', age: 19, id: 2 }
]
```

**Explanation:**

In the given code, Children is a class that has a static property named id which is initialized to 1. A static property is a property that belongs to the class itself rather than being tied to any instance of the class.

The constructor method takes two parameters name and age, creates an instance of the Children class, assigns the name and age values to the instance properties, and assigns a unique ID to each child. The unique ID is assigned using the Children.id++ statement which increments the static property id and assigns the incremented value to the id instance property.

The sortByAge method is a static method of the Children class that takes two parameters a and b and sorts the array of children objects based on their age using the Array.sort() method.

Three instances of the Children class are created with their respective name and age values. These instances are pushed into an array called arr. The arr array is then sorted using the static sortByAge method of the Children class, which sorts the array of children objects based on their age.

The final sorted array is then logged to the console.

---------------------------------------------------------------------------------

# Private Properties

Private properties refers to class properties that are only accessible within the class itself and cannot be accessed or modified from outside the class. 

```js
class User {
id =123;
}
const user = new User();
user.id = 321;
console.log(user);
```

**Output:**
```
User { id: 321 }
```

**Explanation:**

In the above code, a User class is defined with a class field `"id"` that is initialized to 123. Then, an instance of the User class is created and stored in the "user" variable using the `"new"` keyword.

After creating the instance, the code attempts to modify the `"id"` property of the user object by setting it to 321. When the user object is logged to the console, it will show the `"id"` property with the value 321.

However, what if you want the class field changes to be made only within the class and not outside the class? You can solve this problem using Private Property.

Generally, developers set a convention that if any class field or `static property has "_" in the beginning`, it means that it is a Private Property and no changes should be made to it outside of the class.

But this convention still does not completely solve the problem. Recently, JavaScript added the feature for *Private Property (designated by the "#" symbol), which is only supported by some browsers.* However, you can use it with Polyfill in the remaining browsers.

 
```js
class User {
  #id = 123;
}
const user = new User();
user.#id = 321;
console.log(user);
```


**Output:**

![alt text](image.png)

**Explanation:**

The code defines a User class with a private instance variable, #id, initialized to 123 in the class definition. Subsequently, a new instance of the class is created and assigned to the user variable. However, attempting to directly modify the #id private property using the syntax user. #id = 321; results in a syntax error since Private Properties are not accessible from outside the class.
