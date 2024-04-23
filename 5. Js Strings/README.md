# JS Iterating Over String

Whenever we are dealing with strings we need to iterate over them. There are basically two ways in which we can iterate over a string.

Firstly, we can simply use for(let char of message) to iterate through every character of the string. 

```js
let message = "Hello Geeks";

//here char is a variable which takes the value of every letter in the message
for (let char of message){
	console.log(char);
}
```


Output:
```
H
e
l
l
o
 
G
e
e
k
s
```

There can be many use case of iterating over a string. Let us discuss one simple use case using the above mentioned method: 

Problem: Find the number of times the letter 'e' occurs in our message.

```
let message = "Hello Geeks";

//a variable to keep tract of the instances of 'e'
let count=0;

for (let char of message){
	if(char === 'e'){
    	count++; //value of count will be incremented everytime we come across 'e'
    }
}
console.log("e occurs "+count+" times");
```

Output:
```
e occurs 3 times
```

The Second way in which we can iterate over a string is using index, ie. position of a particular character in the string. 

```js
let message = "Hello Geeks";

console.log(message[0]) //print char at position 0
console.log(message[6]) //print char at position 6
console.log(message[5]) //print char at position 5
```

Output:
```
H
G
```

Note: Any special symbols or space is also a character in the string

Therefore if we want to iterate over the entire string using indexes we make use of for loop as bellow.

```js
let message = "Hello Geeks";

//here i takes the value of index for every character 
for (let i=0;i<message.length;i++){
	console.log(message[i]);
}
```
Output:
```
H
e
l
l
o
 
G
e
e
k
s
```

Now Solving the same problem(Find the number of times the letter 'e' occurs in our message.) using indexes.

```js
let message = "Hello Geeks";

//a variable to keep tract of the instances of 'e'
let count=0;

for (let i=0; i<message.length; i++){
	if(message[i] === 'e'){
    	count++; //value of count will be incremented everytime we come across 'e'
    }
}
console.log("e occurs "+count+" times");
```
Output:
```
e occurs 3 times
```

=====================================================================================================

# JS String Method - charAt & charCodeAt

1. str.charAT() - str.charAT() Returns character at given index of string.
```
character = str.charAt(index)
```
**Arguments:** The only argument to this function is the index in the string from where the single character is to be extracted. The range of this index is between 0 and length - 1, including the limits. If no index is specified then the first character of the string is returned as 0 is the default index used for this function. Return value This function returns a single character located at the index specified as the argument to the function. If the index is out of range, then this function returns an empty string. 

Example 1: 

```js
function func() {

    // Original string
    var str = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = str.charAt(0); 
    var value1 = str.charAt(4); 
    console.log(value); 
    console.log(value1);
}
func();
```

Output:
```
J
S
```

Example 2: 

In this example the function charAt() finds the character at index 50. Since the index is out of bounds for the given string therefore the function returns "" an empty string. 

```js
// JavaScript to illustrate charAt() function
function func() {

    // Original string
    var str = 'JavaScript is object oriented language';

    // Finding the character at given index 
    var value = str.charAt(50);
    console.log("Char at index 50 is: "+value);    
}
func();
```

Output:
```
Char at index 50 is: 
```

2. str.charCodeAt() - str.charCodeAt() method returns a Unicode character set code unit of the character present at the index in the string specified as the argument. The syntax of the method is as follows:
```
str.charCodeAt(index)
```
**Arguments**: The only argument to this method is the index of the character in the string whose Unicode is to be used. The range of the index is from 0 to length - 1. Return value This method returns the Unicode (ranging between 0 and 65535) of the character whose index is provided to the method as the argument. If the index provided is out of range this method returns NaN.


Example 1:

In this example the method charCodeAt() extracts the character from the string at index 4. Since this character is m, therefore this method returns the Unicode sequence as 109. 

```js
// JavaScript to illustrate charCodeAt() method

function func() {
    var str = 'ephemeral';

    // Finding the code of the character at
    // given index 
    var value = str.charCodeAt(4);
    console.log(value);    
}

func();
```

Output:
```
109
```

Example 2:

In this example the method charCodeAt() extracts the character from the string at index 20. Since the index is out of bounds for the string, therefore this method returns the answer as NaN. 

```js
// JavaScript to illustrate charCodeAt() method

function func() {
    var str = 'ephemeral';

    // Finding the code of the character 
    // at given index 
    var value = str.charCodeAt(20);

    console.log(value);    
}
func();
```

Output:
```
NaN
```

=====================================================================================================

# JS String Method - indexOf()

str.indexOf() function finds the index of the first occurrence of the argument string in the given string. The value returned is 0-based. The syntax of the function is as follows: 

str.indexOf(searchValue , index)

**Arguments:**
The first argument to the function searchValue is the string that is to be searched in the base string. The second argument to the function index defines the starting index from where the searchValue is to be searched in the base string.

**Return value:**
This function returns the index of the string (0-based) where the searchValue is found for the first time. If the searchValue cannot be found in the string then the function returns -1.

Example 1: 

In this example, the function indexOf() finds the index of the string Train. Since the first and the only index where this string is present is 9, therefore this function returns 9 as the answer.

```js
// JavaScript to illustrate indexOf() function
function func() {

    // Original string
    var str = 'Departed Train';

    // Finding index of occurrence of 'Train'
    var index = str.indexOf('Train');
    console.log(index); 
}
func();
```

Output:
```
9
```

Example 2: 

In this example, the function indexOf() finds the index of the string ed Tr. Since the first and the only index where this string is present is 6, therefore this function returns 6 as the answer.

```js
// JavaScript to illustrate indexOf() function
function func() {

    // Original string
    var str = 'Departed Train';

    // Finding index of occurrence of 'Train'
    var index = str.indexOf('ed Tr');
    console.log(index);  
}
func();
```

Output:
```
6
```
Example 3: 

In this example, the function indexOf() finds the index of the string Train. Since the searchValue is not present in the string, therefore this function returns -1 as the answer.

```js
// JavaScript to illustrate indexOf() function
function func() {

    // Original string
    var str = 'Departed Train';

    // Finding index of occurrence of 'Train'
    var index = str.indexOf('train');
    console.log(index);  
}
func();
```

Output:
```
-1
```

=====================================================================================================

# JS String Method - includes()

In JavaScript, includes() method determines whether a string contains the given characters within it or not. This method returns true if the string contains the characters, otherwise, it returns false. 

Note: The includes() method is case sensitive i.e, it will treat the Uppercase characters and Lowercase characters differently.

Syntax:  
```
string.includes(searchvalue, start)
```

Parameters Used: 

- search value: It is the string in which the search will take place.
- start: This is the position from where the search will be processed  (although this parameter is not necessary if this is not mentioned the search will begin from the start of the string).
- Returns either a Boolean True indicating the presence or it returns a False indicating the absence.

Example 1: 

```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("Geeks");
if(check){
	console.log("present");
}
else{
	console.log("not present");
}
```

Output:
```
present
```

**Explanation**: Since the second parameter is not defined, the search will take place from the starting index. And it will search for Geeks, as it is present in the string, it will return a true.
 

Example 2: 

```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("geeks");
console.log(check);
```

Output:
```
false
```

**Explanation**: Even in this case the second parameter is not defined, so the search will take place from the starting index. But as this method is case sensitive it will treat the two strings differently, hence returning a boolean false. 

Example 3: 
 

```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o",18);
console.log(check);
```

Output:
```
false
```

**Explanation**: In this case the second parameter is 18, so the search will take place from index 18, and since there is no 'o' after index 18, it returns false.

 

**Exceptions:**

The search will not be processed if the second parameter i.e computed index(starting index) is greater than or equal to the string length and hence return false.

```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o",30);
console.log(check);
```

Output:
```
false
```

If the computed index(starting index) i.e the position from which the search will begin is less than 0, the entire array will be searched. 

```js
var str = "Welcome to GeeksforGeeks.";
var check = str.includes("o",-2);
console.log(check);
```

Output: true

=====================================================================================================

# JS String Method - toUpperCase() and toLowerCase()

1. str.toUpperCase()

str.toUpperCase() method converts the entire string to Upper case. This method does not affect any of the special characters, digits, and the alphabets that are already in the upper case. 

Syntax: 
```
str.toUpperCase()
```

Return value: This method returns a new string in which all the lower case letters are converted to upper case.

Example 1: 

```js
function func() {
    var str = 'geeksforgeeks';
    var string = str.toUpperCase();
    console.log(string);
}
func();
```

Output: GEEKSFORGEEKS

In this example the method toUpperCase() converts all the lower case alphabets to their upper case equivalents.

Example 2: 

```js
function func() {
    var str = 'geeksforgeeks#@';
    var string = str.toUpperCase();
    console.log(string);
}
func();
```

Output: GEEKSFORGEEKS#@

In this example the method toUpperCase() converts all the lower case alphabets to their upper case equivalents without affecting the special characters and the digits. 

 
2. str.toLowerCase() - str.toLowerCase() method converts the entire string to lower case. This method does not affect any of the special characters, digits, and the alphabets that are already in the lower case. 

Syntax:  
```
str.toLowerCase()
```

**Return value:** This method returns a new string in which all the upper case letters are converted to lower case.

Example 1: 

```js
function func() {
    var str = 'GEEKSFORGEEKS';
    var string = str.toLowerCase();
    console.log(string);
}
func();
```

Output: geeksforgeeks

In this example, the method toLowerCase() converts all the upper case alphabets into lower case alphabets without affecting all those characters that are already in the lower case.


Example 2: 

```js
function func() {
    var str = 'GEEKSFORGEEKS@123';
    var string = str.toLowerCase();
    console.log(string);
}
func();
```

Output: geeksforgeeks@123

In this example the method toLowerCase() converts all the upper case alphabets into lower case alphabets without affecting the special characters, digits and all those characters that are already in lower case.

=====================================================================================================

# JS String Method - substring()

The substring() is an inbuilt function in JavaScript which is used to return the part of the given string from start index to end index. Indexing start from zero (0). 

Syntax: 
```
string.substring(Startindex, Endindex)
```

**Parameters**: Here the Startindex and Endindex describes the part of the string to be taken as substring. Here the Endindex is optional. 

**Return value:** It returns a new string which is part of the given string. 

JavaScript code to show the working of string.substring() function: 
Example 1: 

```js
// Taking a string as variable
var string = "geeksforgeeks";
a = string.substring(0, 4)
b = string.substring(1, 6)
c = string.substring(5)
d = string.substring(0)

// Printing new string which are
// the part of the given string
console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

Output:
```
geek
eeksf
forgeeks
geeksforgeeks
```

Example 2: 
Index always start with 0. If still we take index as negative, it will be considered as zero and index can't be in fraction if it is found so, it will be converted into its just lesser whole number. 
 

```js
// Taking a string as variable
var string = "geeksforgeeks";
a = string.substring(-1)
b = string.substring(2.5)
c = string.substring(2.9)

// Printing new string which are
// the part of the given string
console.log(a);
console.log(b);
console.log(c);
```

Output:
```
geeksforgeeks
eksforgeeks
eksforgeeks
```

=====================================================================================================

# JS String Method - trim()

1. str.trim() method is used to remove the white spaces from both the ends of the given string.

Syntax:  
```
str.trim()
```

**Return value:** This method returns a new string, without any of the leading or the trailing white spaces. 

Example 1: In this example the trim() method removes all the leading and the trailing spaces in the string str.

```js
function func() {
    var str = "  GeeksforGeeks      ";
    var st = str.trim();
    console.log(st);
}
func();
```

Output: GeeksforGeeks
 

Note: Trim is used to remove white spaces only from the start and end of a string and not from in-between. 

```js
function func() {
    var str = "  Geeks for Geeks      ";
    var st = str.trim();
    console.log(st);
}
func();
```

Output: Geeks for Geeks
 
2. str.trimLeft() method is used to remove the white spaces from the start of the given string. It does not affect the trailing white spaces.

Syntax:  
```
str.trimLeft()
```

Return value: 

This method returns a new string, without any of the leading white spaces. 

```js
function func() {
    var str = "  Geeks for Geeks      ";
    var st = str.trimLeft();
    console.log(st);
}
func();
```

Output:
```
Geeks for Geeks      
```

3. str.trimRight() method is used to remove the white spaces from the end of the given string. It does not affect the white spaces at the start of the string.

Syntax:  
```
str.trimRight()
```

Return value: This method returns a new string, without any of the trailing white spaces. 

```js
function func() {
    var str = "  Geeks for Geeks      ";
    var st = str.trimRight();
    console.log(st);
}
func();
```

Output:  Geeks for Geeks

=====================================================================================================