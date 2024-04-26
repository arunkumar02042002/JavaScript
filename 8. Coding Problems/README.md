# Pallindrome String

```js
const str = "malayala";
function getReversedStr (str){
    let reversedStr = "";
    for (let i=str.length-1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

const result = getReversedStr(str);
if (result === str){
    console.log("String is a Palindrome");
}else{
    console.log("String is not a Palindrome");
}
```

----------------------------------------------------------------------------------------

# Remove vowels

```js
const string = "The quick browm fox jumps over the lazy dog";

function getStrWithNoVowels(str){
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";
    for (let char of str){
        if (!vowels.includes(char.toLowerCase())){
            result += char
        }
    }
    return result;
}


const updatedStr = getStrWithNoVowels(string);
console.log(updatedStr);
```

----------------------------------------------------------------------------------------

# Mask Character

```js
/**
 * mask the last 4 characters with #
 */

const str = "123456789987654321"; // 12345678998765####;

const maskChar = "#".repeat(4);
const result = str.slice(0, str.length - 4) + maskChar;
console.log(result);
```

----------------------------------------------------------------------------------------

```js
/**
 * Generate Secret Code from a given string
 * Input --> prakash
 * Encode By Chars --> 2
 * Output --> rtcmcuj
 * ASCII Table
 */

// Encode
const inputStr = "prakash";
const shiftByPos = 4;

const getEncodedStr = (str, shiftByPos) => {
    let encodedStr = "";
    let currentPos = 0, newPos = 0;
    for (let i=0; i<str.length; i++){
        currentPos = str.charCodeAt(i);
        newPos = currentPos + shiftByPos;
        encodedStr += String.fromCharCode(newPos);
    }
    return encodedStr;
}

console.log(getEncodedStr(inputStr, shiftByPos));


// Decode
const encodedStr = getEncodedStr(inputStr, shiftByPos);
const shiftedByBos = 4;

const getDecodedStr = (encodedStr, shiftedByBos) => {
    let decodedStr = "";

    for (let i = 0; i<encodedStr.length; i++){
        let charCode = encodedStr[i].charCodeAt(0)-shiftedByBos;
        decodedStr += String.fromCharCode(charCode);
    }

    return decodedStr;
}

console.log(getDecodedStr(encodedStr, shiftedByBos));
```

-------------------------------------------------------------------------------

# All substrings

```js
const str = "prakash_sakari";

for (let i=0; i<str.length; i++){
    for (let j=i+1; j<=str.length; j++){
        console.log(str.slice(i, j))
    }
}
```

-------------------------------------------------------------------------------

# Convert Even to Odd and Vice Versa

```js
const numbers = [1, 2, 3, 4, 5, 6, 7]
const result = numbers.map(number => number%2 == 0 ? number-1: number+1)
console.log(result);
```


-------------------------------------------------------------------------------

# Sum of numbers less than 40

```js
/**
 * Sum of numbers less than 40
 */

const arr = [10, 17, 61, 54, 44, 32, 39, 23];

const result = arr.reduce((acc, cur) => cur < 40 ? acc + cur: acc, 0);

console.log(result);
```


--------------------------------------------------------------------------------

# Create an array of names of senoir employees

```js
const employees = [
    {
        name: "Prakash",
        numOfYears: 5
    },
    {
        name: "Ashish",
        numOfYears: 3
    },
    {
        name: "Riya",
        numOfYears: 1
    },
    {
        name: "Jay",
        numOfYears: 1
    },
    {
        name: "Chinmoy",
        numOfYears: 5
    }
]

const result2 = employees.filter(employee => employee.numOfYears > 3).map(employee => employee.name);
console.log(result);
```

--------------------------------------------------------------------------------

# Even Odd Sum

```js
/**
 * Given an array write a function that returns an object with sum of even and odd numbers
 * arr = [1, 2, 3, 4, 5, 6]
 * OUTPUT = {even: 12, odd: 9}
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const reducerFunction = (acc, cur) => cur % 2 === 0 ? {...acc, even: acc.even + cur} : {...acc, odd: acc.odd + cur}

const result = arr.reduce(reducerFunction, {even: 0, odd: 0});

console.log(result);

/**
 * const acc = {even: 0, odd: 0}
 * const cur = 1
 * acc.even + cur;
 * acc --> {even: 1, odd: 0}
 */
```


---------------------------------------------------------------------------------

# Average-Age of Family members 

```js
/**
 * Average-Age of Family members
 */

const familyMembers = [
    {
        name: "Narsingrao",
        age: 56
    },
    {
        name: "Padma",
        age: 52
    },
    {
        name: "Poonam",
        age: 30
    },
    {
        name: "Prakash",
        age: 27
    },
    {
        name: "Ashish",
        age: 50
    }
]

const totalAge = familyMembers.reduce((acc, cur) => acc + cur.age, 0);
const averageAge = totalAge / familyMembers.length;
console.log(averageAge);
```

---------------------------------------------------------------------------------

# Count Distinct Element

```js
/**
 * Count occurence of distinct elements
 * Output: {a:2, b:2,c:2,d:1,e:1,f:1}
 */

/**
 * const arr = [1, 2, 3, 4, 5]
 * {even: 6, odd: 9}
 */

const arr = [
    "a", "b", "c",
    "c", "d", "e",
    "b", "f", "a"
]

const result = arr.reduce((acc, cur) => cur in acc ? {...acc, [cur]: acc[cur] + 1} : {...acc, [cur]: 1}, {});
console.log(result);
```