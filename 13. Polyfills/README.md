# polyfills for Map

Polyfills are a way to provide modern functionality to older web browsers that do not support them natively. They are JavaScript code that fills in the gaps in the browser's implementation of certain features, making it possible for developers to use those features without worrying about whether they will work in all browsers. For example, if a browser does not support the "fetch" API, a polyfill can be used to provide similar functionality. Polyfills are important because they allow developers to write code that is compatible with a wider range of browsers, without sacrificing the use of modern features.

The need for writing polyfills in JavaScript arises from the fact that not all web browsers support the latest JavaScript features or APIs. This can make it difficult for developers to write code that works across all browsers. By using polyfills, developers can fill in the gaps in browser support for certain features and ensure that their code works consistently across a wide range of browsers. This can save time and effort that would otherwise be spent on browser-specific workarounds or feature detection codes. Additionally, polyfills can help to future-proof code, allowing developers to use modern features confidently, knowing that they will work even in older browsers.

Some benefits of using polyfills in JavaScript:

- Increased backward compatibility: Polyfills can enable the use of modern JavaScript features on older browsers, making it easier to write code that works across a wider range of devices and platforms.
- Improved performance: By using polyfills selectively, developers can avoid loading large libraries or plugins, which can improve page load times and reduce the overall size of their codebase.
- Better security: Polyfills can help to mitigate security vulnerabilities by providing fallbacks for older browser versions that may not support the latest security features.
- Greater code consistency: By using polyfills, developers can write code that works consistently across all browsers, reducing the need for browser-specific code and workarounds.
- Overall, polyfills can help developers to write cleaner, more consistent, and more compatible code, which can lead to better performance, improved security, and a better user experience for visitors to their websites or applications.

The following code includes a polyfill for the map method, which can be used to support browsers that don't have that method defined.

```js
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    var arr = this;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(callback.call(thisArg, arr[i], i, arr));
    }
    return newArr;
  };
}
// To use the map method, simply call it on an array like this:
var myArray = [1, 2, 3];
var doubledArray = myArray.map(function(num) {
  return num * 2;
});
console.log(doubledArray); // [2, 4, 6]
```

Let's break this down step by step:

- First, we check if the map method is already defined on the Array.prototype. We do this by checking if Array.prototype.map is falsy (i.e. undefined).
- If Array.prototype.map is falsy, we define it by adding a new function to the Array.prototype. This function takes two arguments: a callback function and an optional thisArg.
- Inside the function, we create two variables: arr, which is the array on which we are calling the map method, and newArr, which is the new array that will be returned by the map method.
- We then iterate over each element in the arr array using a for loop. For each element, we call the callback function, passing in three arguments: the current element, its index, and the original arr array.
- We push the return value of the callback function into the newArr array.

Finally, we return the newArr array.


------------------------------------------------------------------------------------------

# polyfills for Filter

In this article, we are going to write the polyfill for the filter method. Here's an example polyfill for the filter method which prevents your code form breaking on browsers that don't support the filter method.

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, thisArg) {
    var arr = this;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  };
}
```
Let's break this down step by step:

- First, we check if the filter method is already defined on the Array.prototype. We do this by checking if Array.prototype.filter is falsy (i.e. undefined).
- If Array.prototype.filter is falsy, we define it by adding a new function to the Array.prototype. This function takes two arguments: a callback function and an optional thisArg.
- Inside the function, we create two variables: arr, which is the array on which we are calling the filter method, and newArr, which is the new array that will be returned by the filter method.
- We then iterate over each element in the arr array using a for loop. For each element, we call the callback function, passing in three arguments: the current element, its index, and the original arr array.
- We then use an if statement to check whether the return value of the callback function for the current element is truthy. If it is, we push the element into the newArr array.

Finally, we return the newArr array.

This polyfill works by defining the filter method on Array.prototype only if it does not already exist, ensuring that it will work on all browsers. The callback function is called on each element of the array, and the returned values are used to filter the array elements that are pushed into a new array that is returned at the end of the function.

```js
// To use the filter method, simply call it on an array like this:
var myArray = [1, 2, 3, 4, 5];
var filteredArray = myArray.filter(function(num) {
  return num % 2 === 0;
});
console.log(filteredArray); // [2, 4]
```

**Output:**
```
[ 2, 4 ]
```


------------------------------------------------------------------------------------------

# Polyfills for Reduce

In this article, we are going to write the polyfill for reduce method.it is one of the most asked interview questions. We will write our own myReduce method which will work like exactly the reduce method provided by javascript.

Here's a polyfill for the reduce method that defines a new myReduce method:

```js
if (!Array.prototype.reduce) {
  const myReduce = function(callback, initialValue) {
    var accumulator = initialValue;
    var startIdx = initialValue === undefined ? 1 : 0;
    for (var i = startIdx; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
  };
  Array.prototype.reduce = myReduce;
}
```

Here's a step-by-step breakdown of what's happening in this code:

- First, we check if the reduce method is not already defined on the Array.prototype. We do this by checking if Array.prototype.reduce is falsy (i.e. undefined).
- If Array.prototype.reduce is falsy, we define it by adding a new function to the Array.prototype. This function takes two arguments: a callback function and an optional initialValue.
- Inside the function, we create two variables: accumulator, which is the value that is accumulated as the callback function is called on each element of the array, and startIdx, which is the starting index for the loop.
- If an initialValue was provided, we set the accumulator to that value and start the loop at index 1. Otherwise, we set the accumulator to the first element of the array and start the loop at index 0.
- We then iterate over each element in the array using a for loop, starting at the index specified by startIdx. For each element, we call the callback function, passing in four arguments: the accumulator, the current element, its index, and the original array.

Finally, we return the accumulator.

This polyfill works by defining the a  reduce method on Array.prototype only if it does not already exist, ensuring that it will work on all browsers. The callback function is called on each element of the array, and the returned values are accumulated into a single value that is returned at the end of the function.

```
// To use the reduce method, simply call it on an array like this:
var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(accumulator, num) {
  return accumulator + num;
}, 0);
console.log(sum); // 15
```

**Output:**
```
15
```

------------------------------------------------------------------------------------------


# polyfills for flatten

In this article we are going to write the polyfill for array.flat method which will work exactly like the flat method.
Here is the step-by-step implementation of the array.flat method. 
 

```js
if (!Array.prototype.flat) {
  const myFlat = function(depth = 1) {
  	const flattened = [];
  	function getFlattenedArray(array, depth) {
		for (let element of array) {
      		if (Array.isArray(element) && depth) {
      			getFlattenedArray(element, depth - 1);
      		} else {
 				flattened.push(element);
	  		}
		}
  	}
  	getFlattenedArray(this, depth);
    return flattened;
  }
  Array.prototype.flat = myFlat;
}

const arr1 = [1, 2, 3, [5, 6], [[7,8]]];
console.log(arr1.flat(2)); // Output: [1,2,3,4,5,6];
```

Before we create a polyfill for Array.prototype.flat(), we need to check if the method is already defined in the browser. We can do this by checking if the method is undefined or not:

If the Array.prototype.flat() method is not defined, we can create our own implementation of the method. We can do this by creating a new function that can be added to the Array.prototype object. Here's how we can define the Array.prototype.flat() method:

The flat() method takes an optional parameter depth, which specifies the depth of the nested arrays that should be flattened. If depth is not provided, the method should flatten all levels of nested arrays.

To implement the Array.prototype.flat() method, we need to iterate over each element of the array and check if it is an array or not. If it is an array, we need to recursively call the flat() method on the sub-array.

Let's go over this code in detail:
- We create a new empty array called flattened to store the flattened array.
- We iterate over each element of the array using a for loop.
- For each element, we check if it is an array or not using the Array.isArray() method.
- If the element is an array, we recursively call the flat() method on the sub-array.
- If depth is not provided, we call the flat() method without any arguments to flatten all levels of nested arrays.
- If depth is greater than 0, we call the flat() method with depth - 1 to flatten the next level of nested arrays.
- If depth is 0, we simply push the sub-array to the flattened array.
- If the element is not an array, we simply push it to the flattened array.
- Finally, we return the flattened array.


# Polyfills - Call and Apply

In JavaScript, call and apply are methods that can be used to invoke a function with a specific "this" value and a set of arguments. Call and apply are similar in that they both allow you to call a function with a specific "this" value, but they differ in how they pass arguments to the function.

The call method is a built-in function in JavaScript that allows you to call a function with a specific this context and arguments. When you call a function using the call method, you pass the object that you want to use as the this context for the function as the first argument, and any arguments that you want to pass to the function as subsequent arguments. Here's an example:

```js
function greet() {
  console.log(`Hello, ${this.name}!`);
}
const person = {
  name: 'Alice'
};

greet.call(person); // Output: "Hello, Alice!"
```

Now Let us write our own myCall method and understand it step by step.

```js
Function.prototype.myCall = function(thisArg, ...args) {
  const fn = this;
  thisArg = thisArg || window;
  const fnKey = Symbol('fn');
  thisArg[fnKey] = fn;
  const result = thisArg[fnKey](...args);
  delete thisArg[fnKey];
  return result;
};
```

This code snippet adds a myCall method to the Function.prototype, which means that all functions in JavaScript can now use the call method. The call method takes two arguments: thisArg and ...args. The thisArg argument is the object that will be used as the this context for the function, and ...args is an array of arguments that will be passed to the function.

Let's break down the implementation step by step:

- We start by defining the call method on the Function.prototype. Inside the method, we store the current function in a variable fn, and set the thisArg argument to the global window object if it is not provided.
- We then create a new Symbol called fnKey. This symbol will be used to create a property on the thisArg object that stores a reference to the current function.
- We set the value of fn as the property with the key fnKey on the thisArg object
- We call the function stored in fn on the thisArg object, passing the arguments from the ...args array using the spread operator. We store the result of the function call in a variable called the result.
- Finally, we delete the property with the key fnKey from the thisArg object to clean up after ourselves and return the result of the function call

Now let us Write Polyfill for the apply method

The apply() method is used to call a function with a given this value and arguments provided as an array (or an array-like object). If you're using an older version of JavaScript that doesn't support this method, you can create a polyfill to add this functionality.

Let us now try to write polyfill for apply method in javascript.

```js
// Check if the apply() method already exists on the Function prototype
if (!Function.prototype.apply) {

  // If not, create a polyfill for the apply() method
  Function.prototype.apply = function (thisArg, argArray) {
    
    // First, check that the function is actually a function
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.apply called on non-function');
    }

    // Then, check that the second argument is an array
    if (!Array.isArray(argArray)) {
      throw new TypeError('second argument to Function.prototype.apply must be an array');
    }

    // Create a variable to hold the result of calling the function
    var result;

    // If the thisArg is undefined or null, use the spread operator to pass in the arguments
    if (thisArg === undefined || thisArg === null) {
      result = this(...argArray);
    } 

    // Otherwise, use the apply() method to pass in the arguments
    else {
      result = thisArg[Symbol.for('apply')](this, argArray);
    }

    // Finally, return the result of calling the function
    return result;
  };
}
```

In simpler terms:

- First, we check whether the apply() method already exists on the Function.prototype object. If it does, we don't need to create a polyfill, so we skip to the end.
- If the apply() method doesn't exist, we create a polyfill for it. The polyfill is just a function that takes two arguments: thisArg and argArray.
- Inside the polyfill function, we check that the function we're calling apply() on is actually a function. If it's not, we throw an error.

- Next, we check that the second argument passed to the apply() function is an array. If it's not, we throw an error.

- We create a variable called result to hold the result of calling the function.

- If the thisArg argument is undefined or null, we use the spread operator (...) to pass in the arguments to the function. This means that if the function expects three arguments and the argArray argument is [1, 2, 3], the function will be called with this(1, 2, 3).

- If the thisArg argument is defined and not null, we use the apply() method to call the function with the specified this value and arguments passed as an array. This means that if the function expects three arguments and the argArray argument is [1, 2, 3], the function will be called with this.apply(thisArg, [1, 2, 3]).

Finally, we return the result of calling the function.


-----------------------------------------------------------------

# Polyfills - bind

In JavaScript, the bind() method is used to create a new function with a fixed this value and some of its arguments pre-specified. When a function is called with bind(), a new function is returned with the this value bound to the argument passed to bind() and any additional arguments passed to bind() are pre-specified as the first arguments of the new function.

Here's an example:


const person = {
  name: 'John',
  greet: function(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
};

const greetJohn = person.greet.bind(person, 'Hello');
greetJohn(); // Output: Hello, John!

In the example above, we have an object person with a name property and a greet() method that takes a greeting argument. We create a new function greetJohn using bind() that binds the this value to person and pre-specifies the greeting argument as 'Hello'.When we call greetJohn(), it calls the greet() method with the this value of person, the greeting argument of 'Hello', and any additional arguments passed to greetJohn() (in this case, there are none). This results in the output: Hello, John!.

Let us now try to write polyfill for the bind method.

```js
// Check if `bind` method is already defined on Function.prototype
if (!Function.prototype.bind) {
  // If not, define `bind` method on Function.prototype
  Function.prototype.bind = function (thisArg) {
    // Store reference to original function
    var fn = this;
    // Get array of arguments passed to `bind`, starting at index 1
    var args = Array.prototype.slice.call(arguments, 1);
    // Return new function that will be used as the bound function
    return function () {
      // Concatenate arguments passed to bound function with arguments passed to `bind`
      var boundArgs = args.concat(Array.prototype.slice.call(arguments));
      // Call the original function with `thisArg` as `this` value and concatenated arguments
      return fn.apply(thisArg, boundArgs);
    };
  };
}
```

Here are the steps to explain how this polyfill works:

- First, we check if the bind method is already defined on the Function.prototype object. If it is, we don't need to define our own implementation.

- If the bind method is not already defined, we define it as a method on the Function.prototype object. This means that every function in JavaScript will now have access to this method.

- The bind method takes one or more arguments. The first argument is the this value that the function should be bound to. The this value is the value that the function will use for its this keyword when it is called.

- The rest of the arguments to the bind method are the arguments that will be passed to the function when it is called.

- Inside the bind method, we store a reference to the original function as fn. We also use the slice method to create a new array of the arguments passed to bind, starting at the second argument (since the first argument is the this value).

- We then return a new function that will be used as the bound function. This function will take any additional arguments that are passed to it and concatenate them with the arguments that were passed to bind.

- Inside the new function, we call the original function (fn) with the this value passed to bind and the concatenated array of arguments.

The apply method is used to call the original function with the correct this value and argument list.
