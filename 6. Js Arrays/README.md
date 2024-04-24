# Basic Properties of Arrays and Iterating over Array

In JavaScript, the array is a single variable that is used to store different elements. It is often used when we want to store a list of elements and access them by a single variable. Unlike most languages where the array is a reference to the multiple variables, in JavaScript array is a single variable that stores multiple elements.

**Declaration of an Array:** There are basically two ways to declare an array.

Example:

```js
var House = [ ]; // Method 1
var House = new Array(); // Method 2
```

**Note:** But generally method 1 is preferred over method 2. Let us understand the reason for this.

Example: Initialization of an Array according to method 1.

```js
// Initializing while declaring
var house = ["1BHK", "2BHK", "3BHK", "4BHK"];
```

Example: Initialization of an Array according to method 2.

```js
// Initializing while declaring
// Creates an array having elements 10, 20, 30, 40, 50
var house = new Array(10, 20, 30, 40, 50);

// Creates an array of 5 undefined elements
var house1 = new Array(5);

// Creates an array with element 1BHK
var home = new Array("1BHK");
```

As shown in above example the house contains 5 elements i.e. (10 , 20, 30, 40, 50) while house1 contains 5 undefined elements instead of having a single element 5. Hence, while working with numbers this method is generally not preferred but it works fine with Strings and Boolean as shown in the example above home contains a single element 1BHK.

**Example:** An array in JavaScript can hold different elements that can store Numbers, Strings, and Boolean in a single array.

```js
// Storing number, boolean, strings in an Array
var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
```

Example: Accessing Array Elements of an Array in JavaScript are indexed from 0 so we can access array elements as follows.

```js
var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
alert(house[0]+" cost= "+house[1]);
var cost_1BHK = house[1];
var is_for_rent = house[5];
alert("Cost of 1BHK = "+ cost_1BHK);
alert("Is house for rent = ")+ is_for_rent);
```

## Ways of iterating over a array in JavaScript.

Arrays in Javascripts, are single variables used to store different kind of elements.
For example, a simple array accesses may look something like this: 

```js
array = [ 'geeks', '4', 'geeks' ];
 
// Accessing array elements one by one
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
```

Output:
```
geeks
4
geeks
```

There are multiple ways one can iterate over an array in JavaScript. The most useful ones are mentioned below.

1. Using for loop.

This is similar to for loops in other languages like C/C++, Java, etc 

```js
array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
}
```

Output:
```
1
2
3
4
5
6
```

2. Using while loop. 
This is again similar to other languages. 

```js
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
while (index < array.length) {
    console.log(array[index]);
    index++;
}
```

Output:
```
1
2
3
4
5
6
```

3. using forEach method - The forEach method calls the provided function once for every array element in the order. 

```js
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
array.forEach(myFunction);
function myFunction(item, index)
{
    console.log(item);
}
```

Output:
```
1
2
3
4
5
6
```

4. Using every method - The every() method checks if all elements in an array pass a test (provided as a function). 

```js
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
const under_five = x => x < 5;
 
if (array.every(under_five)) {
    console.log('All are less than 5');
}
else {
    console.log('At least one element is not less than 5');
}
```
Output:
```
At least one element is not less than 5
```

5. Using map. 
A map applies a function over every element and then returns the new array. 

```js
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
square = x => Math.pow(x, 2);
squares = array.map(square);
console.log(array);
console.log(squares);
```

Output:
```
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 4, 9, 16, 25, 36 ]
```

6. Using Filter

It is used to filter values from an array and return the new filtered array

```js
array = [ 1, 2, 3, 4, 5, 6 ];
 
even = x => x%2 === 0;
evens = array.filter(even);
console.log(array);
console.log(evens);
```

Output:
```
[ 1, 2, 3, 4, 5, 6 ]
[ 2, 4, 6 ]
```

7. Using Reduce

It is used to reduce the array into one single value using some functional logic

```js
array = [ 1, 2, 3, 4, 5, 6 ];
 
const helperSum = (acc,curr) => acc+curr
sum = array.reduce(helperSum, 0);
 
console.log(array)
console.log(sum);
```

Output:
```
[ 1, 2, 3, 4, 5, 6 ]
21
```


8. Using Some

It is used to check whether some array values passes a test

```js
array = [ 1, 2, 3, 4, 5, 6 ];
 
const lessthanFourCheck = (element) => element < 4 ;
const lessthanFour = array.some(lessthanFourCheck)
 
 
console.log(array);
if(lessthanFour){
    console.log("At least one element is less than 4" )
}else{
    console.log("All elements are greater than 4 ")
}
```

Output:
```
[ 1, 2, 3, 4, 5, 6 ]
At least one element is less than 4
```

================================================================================

# Array push, pop and slice methods

1. Array push() Method

The arr.push() method is used to push one or more values into the array. This method changes the length of the array by the number of elements added to the array.

Syntax:

```
arr.push(element1, elements2 ....., elementN)
```

Parameters: This method contains as many numbers of parameters as the number of elements to be inserted into the array. Return value: This method returns the new length of the array after inserting the arguments into the array. 

Below is an example of Array push() method.

Example: 

```js
function func() {
var arr = ['GFG', 'gfg', 'g4g'];

// Pushing the element into the array
arr.push('GeeksforGeeks');
console.log(arr);

}
func();
```

Output: [ 'GFG', 'gfg', 'g4g', 'GeeksforGeeks' ]
 

Example 1: In this example, the function push() adds the numbers to the end of the array.

```js
var arr = [34, 234, 567, 4];
print(arr.push(23,45,56));
print(arr);
```

Output:
```
7
34,234,567,4,23,45,56
```

Example 2: In this example, the function push() adds the objects to the end of the array.

```
var arr = [34, 234, 567, 4];
print(arr.push('jacob',true,23.45));
print(arr);
```

Output:
```
7
34,234,567,4,jacob,true,23.45
```

More example codes for the above method are as follows:

Program 1: 

```js
function func() {
    // Original array
    var arr = [34, 234, 567, 4];
 
    // Pushing the elements
    console.log(arr.push(23,45,56));
    console.log(arr);
}
func();
```

Output
```
7
[
  34, 234, 567, 4,
  23,  45,  56
]
```
 

2. Array pop() Method

The arr.pop() method is used to remove the last element of the array and also returns the removed element. This function decreases the length of the array.

Syntax:

```
arr.pop()
```

Parameters: This method does not accept any parameter.

Return value This method returns the removed element array. If the array is empty, then this function returns undefined.

Below is an example of Array pop() method.

Example: 

```js
function func() {
var arr = ['GFG', 'gfg', 'g4g', 'GeeksforGeeks'];

// Popping the last element from the array
console.log(arr.pop());
}
func();
```

Output: GeeksforGeeks
 

Example 1: In this example, the pop() method removes the last element from the array, which is 4, and returns it.

```js
var arr = [34, 234, 567, 4];
var popped = arr.pop();
print(popped);
print(arr);
```

Output:
```
4
34,234,567
```

Example 2: In this example, the function pop() tries to extract the last element of the array but since the array is empty therefore it returns undefined as the answer.
```js
var arr = [];
var popped = arr.pop();
print(popped);
```

Output: undefined

More example codes for the above method are as follows :

Program 1: 

```js
function func() {
    var arr = [34, 234, 567, 4];
 
    // Popping the last element from the array
    var popped = arr.pop();
    console.log(popped);
    console.log(arr);
}
func();
```

Output:
```
4
[ 34, 234, 567 ]
```

Program 2:

```js
function func() {
    var arr = [];
 
    // popping the last element
    var popped = arr.pop();
    console.log(popped);
}
func();
```

Output: undefined
 

3. Array slice() Method

The arr. slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.

Syntax:

```
arr.slice(begin, end)
```

Parameters: This method accepts two parameters as mentioned above and described below:

- begin: This parameter defines the starting index from where the portion is to be extracted. If this argument is missing then the method takes begin as 0 as it is the default start value.
- end: This parameter is the index up to which the portion is to be extracted (excluding the end index). If this argument is not defined then the array till the end is extracted as it is the default end value If the end value is greater than the length of the array, then the end value changes to the length of the array.
- Return value: This method returns a new array containing some portion of the original array. 

Below is an example of the Array slice() method.

Example: 

```js
function func() {
	// Original Array
	var arr = [23,56,87,32,75,13];
	// Extracted array
	var new_arr = arr.slice(2,4);
	console.log(arr);
	console.log("<br>");
	console.log(new_arr);
}
func();
```

Output:

```
[ 23, 56, 87, 32, 75, 13 ]
<br>
[ 87, 32 ]
```

Example 1: In this example, the slice() method extracts the entire array from the given string and returns it as the answer since no arguments were passed to it.

```js
var arr = [23,56,87,32,75,13];
var new_arr = arr.slice();
console.log(arr);
console.log(new_arr);
```

Output:
```
[23,56,87,32,75,13]
[23,56,87,32,75,13]
```

Example 2: In this example, the slice() method extracts the array starting from index 2 till the end of the array and returns it as the answer.

```js
var arr = [23,56,87,32,75,13];
var new_arr = arr.slice(2);
console.log(arr);
document.write(new_arr);
```

Output:
```
[23,56,87,32,75,13]
[87,32,75,13]
``` 

Example 3: In this example, the slice() method extracts the array from the given array starting from index 2 and including all the elements less than the index 4.

```js
var arr = [23,56,87,32,75,13];
var new_arr = arr.slice(2,4);
console.log(arr);
console.log(new_arr);
```

Output:
```
[23,56,87,32,75,13]
[87,32]
```

The code for the above method is provided below:

Program 1: 

```js
function func() {
        //Original Array
        var arr = [23,56,87,32,75,13];
        //Extracted array
        var new_arr = arr.slice();
        console.log(arr);
        console.log("<br>");
        console.log(new_arr);
    }
    func();
```

Output:
```
[ 23, 56, 87, 32, 75, 13 ]
<br>
[ 23, 56, 87, 32, 75, 13 ]
```

Program 2: 

```js
function func() {
        //Original Array
        var arr = [23,56,87,32,75,13];
        //Extracted array
        var new_arr = arr.slice(2);
        console.log(arr);
        console.log("<br>");
        console.log(new_arr);
}
func();
```

Output:
```
[ 23, 56, 87, 32, 75, 13 ]
<br>
[ 87, 32, 75, 13 ]
```

================================================================================

# Array Includes and sort methods

1. Array includes() Method

The array.includes() method is used to know either a particular element is present in the array or not and accordingly, it returns true or false i.e, if the element is present, then it returns true otherwise false.

Syntax:
```
array.includes(searchElement, start)
```

Parameter: This method accepts two parameters as mentioned above and described below:

searchElement: This parameter holds the element which will be searched.
start: This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.
Return Value: It returns a Boolean value i.e, either True or False.

Below examples illustrate the Array includes() method in JavaScript:

```
Example 1: In this example the method will searched for the element 2 in that array.
Input : [1, 2, 3, 4, 5].includes(2);
Output: true
 

Example 2: In this example the method will searched for the element 9 in that array.
Input : [1, 2, 3, 4, 5].includes(9);
Output: false
```

Code for the above method is provided below:

 

Program 1:


```js
// Taking input as an array A
// having some elements.
var A = [ 1, 2, 3, 4, 5 ];

// includes() method is called to
// test whether the searching element
// is present in given array or not.
a = A.includes(2)

// Printing result of includes().
console.log(a);
```

Output: true
 

Program 2:

```js
// Taking input as an array A
// having some elements.
var name = [ 'gfg', 'cse', 'geeks', 'portal' ];

// includes() method is called to
// test whether the searching element
// is present in given array or not.
a = name.includes('cat')

// Printing result of includes()
console.log(a);
```

Output: false
 

2. Array sort() Method

The arr.sort() method is used to sort the array in place in a given order according to the compare() function. If the method is omitted then the array is sorted in ascending order.

Syntax:
```
arr.sort(compareFunction)
```

- Parameters: This method accepts a single parameter as mentioned above and described below:
- compareFunction: This parameter is used to sort the elements according to different attributes and in a different order.

```
compareFunction(a,b) < 0
compareFunction(a,b) > 0
compareFunction(a,b) = 0
```

- Return value: This method returns the reference of the sorted original array.

Below is an example of Array sort() method.

Program 1: 


```js
// JavaScript to illustrate sort() function
function func() {

// Original string
var arr = ["Geeks", "for", "Geeks"]

console.log(arr);
// Sorting the array
console.log(arr.sort());
}
func();
```

Output:

```
[ 'Geeks', 'for', 'Geeks' ]
[ 'Geeks', 'Geeks', 'for' ]
```


Example 1: In this example, the sort() method arranges the elements of the array in ascending order.

```js
var arr = [2, 5, 8, 1, 4]
console.log(arr.sort());
console.log(arr);
```


Output:
```
1,2,4,5,8
1,2,4,5,8
```
 

Example 2: In this example, the sort() method the elements of the array are sorted according to the function applied on each element.

```js
var arr = [2, 5, 8, 1, 4]
console.log(arr.sort(function(a, b) {
  return a + 2 * b;
}));
console.log(arr);
```

Output:
```
2,5,8,1,4
2,5,8,1,4
```


Example 3: In this example, we use the sort() method on the array of numbers & observe some unexpected behavior.

```js
let numbers = [20,5.2,-120,100,30,0]
console.log(numbers.sort())
```

Output:
```
-120,0,100,20,30,5.2
```


Our output should be -120, 0, 5.2, 20, 30, 100 but it’s not so, why? Because as we apply the direct sort() method, it would process accordingly: 100 would be placed before 20, as ‘2’ is larger than ‘1’, and similarly in the case of 30 & 5.2,  as ‘5’ is larger than ‘3’ thus, 30 would be placed before 5.2. We can resolve this unexpected error by using the sort() method for numerics using the following compare function: 

```js
let numbers = [20,5.2,-120,100,30,0];

/* Logic: 
   20 - (5.2) = +ve => 5.2 would be placed before 20,
   20 - (-120) = +ve => -120 would be placed before 20,
   20 - (100) = -ve => 100 would be placed after 20,
   20 - (30) = -ve => 30 would be placed after 20,
   20 - (0) = +ve => 0 would be placed before 20,
   Similarly for every element, we check and place them accordingly in iterations.
*/
function compare(a,b){
    return a-b;
}
console.log(numbers.sort(compare));
```


Output:
```
-120,0,5.2,20,30,100
```

Code for the above method is provided below: 

Program 1: 

```js
// JavaScript to illustrate sort() function
function func() {
//Original string
var arr = [2, 5, 8, 1, 4]

//Sorting the array
console.log(arr.sort());
console.log(arr);
}
func();
```

Output:
```
[ 1, 2, 4, 5, 8 ]
[ 1, 2, 4, 5, 8 ]
```


Program 2: 

```js
// JavaScript to illustrate sort() function
function func() {

// Original array
var arr = [2, 5, 8, 1, 4];
console.log(arr.sort(function(a, b) {
return a + 2 * b;
}));
console.log(arr);
}
func();
```

Output:
```
[ 2, 5, 8, 1, 4 ]
[ 2, 5, 8, 1, 4 ]
```


- Time Complexity: The time complexity of the sort() method varies & depends on implementation.

For example, in the Firefox web browser, it uses the merge sort implementation which gives time complexity as O(nlog n). Whereas, in Google Chrome web browser, it uses the Timsort implementation (a hybrid of merge sort and insertion sort), gives time complexity is O(nlogn).


================================================================================

# Split and Join

1. String split() Method

JavaScript str.split() method is used to split the given string into an array of strings by separating it into substrings using a specified separator provided in the argument.

Syntax:

```
str.split(separator, limit)
```

separator: It is used to specify the character, or the regular expression, to use for splitting the string. If the separator is unspecified then the entire string becomes one single array element. The same also happens when the separator is not present in the string. If the separator is an empty string (“”) then every character of the string is separated.
limit: Defines the upper limit on the number of splits to be found in the given string. If the string remains unchecked after the limit is reached then it is not reported in the array.
Return value: This function returns an array of strings that is formed after splitting the given string at each point where the separator occurs.

Below is an example of the String split() Method.

Example: 

```js
// JavaScript Program to illustrate split() function
 
function func() {
    //Original string
    var str = 'Geeks for Geeks'
    var array = str.split("for");
   console.log(array);
}
func();
```

Output:
```
[ 'Geeks ', ' Geeks' ]
```

Examples of the above function are provided below:

Example 1: 

```js
var str = 'It iS a 5r&e@@t Day.'
var array = str.split(" ");
print(array);
```

Output: In this example, the function split() creates an array of strings by splitting str wherever ” ” occurs.
```
[It,iS,a,5r&e@@t,Day.]
```

Example 2: 

```js
var str = 'It iS a 5r&e@@t Day.'
var array = str.split(" ",2);
print(array);
```

Output: In this example, the function split() creates an array of strings by splitting str wherever ” ” occurs. The second argument 2 limits the number of such splits to only 2.
```
[It,iS]
```

Codes for the above function are provided below:

Program 1:

```js
function func() {
    //Original string
    var str = 'It iS a 5r&e@@t Day.'
    var array = str.split(" ");
    console.log(array); 
}
func();
```

Output:
```
[ 'It', 'iS', 'a', '5r&e@@t', 'Day.' ]
```

Program 2:

```js
function func() {
 
    // Original string
    var str = 'It iS a 5r&e@@t Day.'
 
    // Splitting up to 2 terms
    var array = str.split(" ",2);
    console.log(array);
}
func();
```
Output: [ 'It', 'iS' ]
 

2. Array join() Method

The arr.join() method is used to join the elements of an array into a string. The elements of the string will be separated by a specified separator and its default value is a comma(, ).

Syntax:
```
array.join(separator)
```

**Parameters:** This method accepts single parameter as mentioned above and described below:
**separator:** It is Optional i.e, it can be either used as parameter or not. Its default value is comma(, ).
**Return Value:** It returns the string which contain the collection of array's elements.

Below example illustrate the Array join() method in JavaScript: 

```
Example 1: In this example the function join() joins together the elements of the array into a string using ‘|’.
var a = [1, 2, 3, 4, 5, 6];
print(a.join('|'));

Output:
1|2|3|4|5|6

Example 2: In this example the function join() joins together the elements of the array into a string using ‘, ‘ since it is the default value.
var a = [1, 2, 3, 4, 5, 6];
print(a.join()); 

Output:
1, 2, 3, 4, 5, 6

Example 3: In this example the function join() joins together the elements of the array into a string using ‘ ‘ (empty string).
var a = [1, 2, 3, 4, 5, 6];
print(a.join(''));

Output:
123456
```

Code for the above method is provided below:


Program 1:

```js
function func() { 
      var a = [ 1, 2, 3, 4, 5, 6 ]; 
      console.log(a.join()); 
}  
func(); 
```

Output: 1,2,3,4,5,6
 

Program 2:

```js
function func() { 
    var a = [ 1, 2, 3, 4, 5, 6 ]; 
    console.log(a.join('')); 
} 
func();
```

Output: 123456


================================================================================

# Spread operator

Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than one value expected. It allows us the privilege to obtain a list of parameters from an array. Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.

Syntax:
```
var variablename1 = [...value];
```

In the above syntax, … is spread operator which will target all values in particular variable. When … occurs in function call or alike, it is called a spread operator. Spread operator can be used in many cases, like when we want to expand, copy, concat with math object. Let’s look at each of them one by one:

Note: In order to run the code in this article make use of the console provided by the browser.

```
Concat()
```

The concat() method provided by JavaScript helps in concatenation of two or more strings(String concat() ) or is used to merge two or more arrays. In case of arrays, this method does not change the existing arrays but instead returns a new array.

```js
// normal array concat() method
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = arr.concat(arr2);
  
console.log(arr); // [ 1, 2, 3, 4, 5 ]
```

Output: [ 1, 2, 3, 4, 5 ]

We can achieve the same output with the help of the spread operator, the code will look something like this:

```js
// spread operator doing the concat job
let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
```

Output: [ 1, 2, 3, 4, 5 ]

**Note:** Though we can achieve the same result, but it is not recommended to use the spread in this particular case, as for a large data set it will work slower as when compared to the native concat() method.

 
## Copy(like splice method)

In order to copy the content of array to another we can do something like this:

```js
// copying without the spread operator
let arr = ['a','b','c'];
let arr2 = arr;
  
console.log(arr2); // [ 'a', 'b', 'c' ]
```

Output: [ 'a', 'b', 'c' ]

The above code works fine because we can copy the contents of one array to another, but under the hood, it’s very different as when we mutate new array it will also affect the old array(the one which we copied). See the code below:

```
// changed the original array
let arr = ['a','b','c'];
let arr2 = arr;
  
arr2.push('d');
  
console.log(arr2);
console.log(arr); // even affected the original array(arr) 
```

Output:
```
[ 'a', 'b', 'c', 'd' ]
[ 'a', 'b', 'c', 'd' ]
```

In the above code we can clearly see that when we tried to insert an element inside the array, the original array is also altered which we did not intended and is not recommended. We can make use of the spread operator in this case, like this:

```js
// spread operator for copying 
let arr = ['a','b','c'];
let arr2 = [...arr];
  
console.log(arr); // [ 'a', 'b', 'c' ]
  
arr2.push('d'); //inserting an element at the end of arr2
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
console.log(arr); // [ 'a', 'b', 'c' ]
```

Output:
```
[ 'a', 'b', 'c' ]
[ 'a', 'b', 'c', 'd' ]
[ 'a', 'b', 'c' ]
```

By using the spread operator we made sure that the original array is not affected whenever we alter the new array.

Expand

Whenever we want to expand an array into another we do something like this:

```js
// normally used expand method
let arr = ['a','b'];
let arr2 = [arr,'c','d'];
  
console.log(arr2); // [ [ 'a', 'b' ], 'c', 'd' ]
```

Output:
```
[ [ 'a', 'b' ], 'c', 'd' ]
```

Even though we get the content on one array inside the other one, but actually it is array inside another array which is definitely what we did not want. If we want the content to be inside a single array we can make use of the spread operator.

```js
// expand using spread operator
let arr = ['a','b'];
let arr2 = [...arr,'c','d'];
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
```

Output:
```
[ 'a', 'b', 'c', 'd' ]
```

## Math

The Math object in JavaScript has different properties that we can make use of to do what we want like finding the minimum from a list of numbers, finding maximum etc. Consider the case that we want to find the minimum from a list of numbers, we will write the following code:

```js
console.log(Math.min(1,2,3,-1)); //-1 
```

Output: -1

Now consider that we have an array instead of a list, this above Math object method would not work and will return NaN, like:

```js
// min in an array using Math.min()
let arr = [1,2,3,-1];
console.log(Math.min(arr)); //NaN
```

Output: NaN
 

When …arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
In order to avoid this NaN output, we make use of spread operator, like:

```js
// with spread 
let arr = [1,2,3,-1];
  
console.log(Math.min(...arr)); //-1
```

Output: -1
 

Example of spread operator with objects

ES6 has added spread property to object literals in JavaScript. The spread operator (…) with objects is used to create copies of existing objects with new or updated values or to make a copy of an object with more properties. Let’s take at an example of how to use the spread operator on an object,

```js
const user1 = {
    name: 'Jen',
    age: 22
};
  
const clonedUser = { ...user1 };
console.log(clonedUser);
```

Output: { name: 'Jen', age: 22 }

Here we are spreading the user1 object. All key-value pairs of the user1 object are copied into the clonedUser object. Let’s look on another example of merging two objects using the spread operator,

```js
const user1 = {
    name: 'Jen',
    age: 22,
};
  
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
  
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)
```

Output:
```
{ name: 'Andrew', age: 22, location: 'Philadelphia' }
```

mergedUsers is a copy of user1 and user2. Actually, every enumerable property on the objects will be copied to mergedUsers object. The spread operator is just a shorthand for the Object.assign() method but, they are some differences between the two.



================================================================================

# Destructuring Array

The Destructuring assignment is the important technique introduced in ECMAScript 2015 (ES6) version of JavaScript that provides a shorthand syntax to extract or unpack array elements or properties of an object into distinct variables using a single line of code. In other words, this assignment helps us to segregate data of any iterable as well as non-iterable object and then helps us to use that segregated data individually on need or demand. It makes the code shorter and more readable. 

In general way implementation of the extraction of the array is as shown below: 

Example:

```js
var names = ["alpha", "beta", "gamma", "delta"];
 
var firstName = names[0];
var secondName = names[1];
 
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
```

Output:
```
alpha
beta
```

Syntax:

```
Array destructuring:

var x, y;
[x, y] = [10, 20];
console.log(x); // 10
console.log(y); // 20

or

[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(restof); // [30, 40, 50]

Object destructuring:

({ x, y} = { x: 10, y: 20 });
console.log(x); // 10
console.log(y); // 20

or

({x, y, ...restof} = {x: 10, y: 20, m: 30, n: 40});
console.log(x); // 10
console.log(y); // 20
console.log(restof); // {m: 30, n: 40}
```

## Array destructuring:

Using the Destructuring Assignment in JavaScript array possible situations, all the examples are listed below:

 

Example 1: When using destructuring assignment the same extraction can be done using below implementations. 

```js
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
     
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 
//Both of the procedure are same
var [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(secondName);//"beta
```

Output:
```
alpha
beta
alpha
beta
```

Example 2: The array elements can be skipped as well using a comma separator. A single comma can be used to skip a single array element. One key difference between the spread operator and array destructuring is that the spread operator unpacks all array elements into a comma-separated list which does not allow us to pick or choose which elements we want to assign to variables. To skip the whole array it can be done using the number of commas as there is a number of array elements. 

```js
var [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"
```

Output:
```
alpha
gamma
```

Example 3: In order to assign some array elements to variable and rest of the array elements to only a single variable can be achieved by using rest operator (…) as in below implementation. But one limitation of rest operator is that it works correctly only with the last elements implying a subarray cannot be obtained leaving the last element in the array. 

```js
var [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];
         
console.log(firstName);//"alpha"
console.log(lastName);//"gamma, delta"
```


Output:
```
alpha
[ 'gamma', 'delta' ]
```

Example 4: Values can also be swapped using destructuring assignment as below:

```js
var names = ["alpha", "beta", "gamma", "delta"];
var [firstName, secondName] = names;
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
 
//After swapping
[firstName, secondName] = [secondName, firstName]
     
console.log(firstName);//"beta"
console.log(secondName);//"alpha"
```

Output:
```
alpha
beta
beta
alpha
```

Example 5: Data can also be extracted from an array that is returned from a function. One advantage of using a destructuring assignment is that there is no need to manipulate an entire object in a function but just the fields that are required can be copied inside the function.

```js
function NamesList() {
        return ["alpha", "beta", "gamma", "delta"]
    }
var[firstName, secondName] = NamesList();
 
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
```

Output:
```
alpha
beta
```

Example 6: In ES5 to assign variables from objects its implementation is

```
var marks = {x: 21, y: -34, z: 47 };
 
var x = marks.x; // x = 21
var y = marks.y; // y = -34
var z = marks.z; // z = 47
 
console.log(x);
console.log(y);
console.log(z);
```

Output:
```
21
-34
47
```

Example 7: The above implementation in ES6 using destructuring assignment is. 

```js
var marks = {x: 21, y: -34, z: 47 };
 
const { x, y, z } = marks; // x = 21, y = -34, z = 47
 
 
console.log(x);
console.log(y);
console.log(z);
```

Output:
```
21
-34
47
```

================================================================================


# Copy By Reference

Shallow copy: In the case of shallow copy when we copy the original object into the clone object then the clone object has the copy of the memory address of the original object i.e. both point to the same memory address.

Both original object and cloned object internally point to the same referenced object. Since they point to the same memory address so if we changed the cloned object then changes would be reflected back to the original object.

```js
// changed the original array
let arr = ['a','b','c'];
let arr2 = arr;
  
arr2.push('d');
  
console.log(arr2);
console.log(arr); // even affected the original array(arr) 
```

Output:
```js
[ 'a', 'b', 'c', 'd' ]
[ 'a', 'b', 'c', 'd' ]
```
In the above code we can clearly see that when we tried to insert an element inside the array, the original array is also altered which we did not intend and is neither recommended. The use of the spread operator is described below.

Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array. Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.

Syntax:

```js
var variablename1 = [...value]; 

// spread operator for copying 
let arr = ['a','b','c'];
let arr2 = [...arr];
  
console.log(arr); // [ 'a', 'b', 'c' ]
  
arr2.push('d'); //inserting an element at the end of arr2
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
console.log(arr); // [ 'a', 'b', 'c' ]
```

Output:
```
[ 'a', 'b', 'c' ]
[ 'a', 'b', 'c', 'd' ]
[ 'a', 'b', 'c' ]
```

By using the spread operator we made sure that the original array is not affected whenever we alter the new array.


================================================================================