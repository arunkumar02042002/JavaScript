
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


const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.map(number => number%2 == 0 ? number-1: number+1)
console.log(result);

const numbers_list = [12, 13, 42, 23, 56, 3, 74];
const sum = numbers.reduce((prev, curr) => curr<40 ? prev+curr : prev, 0);
console.log(sum);


const numbers_list2 = [1, 2, 3, 4, 5, 6, 7, 8];
const even_odd = numbers_list2.reduce((obj, val) => {
    if (val%2 == 0) obj.even += val;
    else obj.odd += val;
    return obj
}, {even:0, odd:0})

console.log(even_odd);

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

const result2 = employees.filter((employee) => employee.numOfYears > 3).map(employee => employee.name);;
console.log(result2);


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

const totalAge = familyMembers.reduce((acc, curr) => acc+curr.age, 0);
const averageAge = totalAge / familyMembers.length;
console.log(averageAge);


const arr = [
    "a", "b", "c",
    "c", "d", "e",
    "b", "f", "a"
]

const result3 = arr.reduce((acc, curr) => curr in acc ? {...acc, [curr]: acc[curr] += 1} : {...acc, [curr]: acc[curr] = 1}, {})
console.log(result3);