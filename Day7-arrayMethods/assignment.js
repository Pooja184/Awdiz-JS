// Find the second highest number in an array without sorting it.
// Input: [10, 5, 20, 8, 15]
// Output: 15
console.log("-------------------Q1--------------------");
const secHighest = () => {
  let arr = [10, 5, 20, 8, 15];
  let max = 0;
  let secMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i];
    }
  }
  console.log(secMax);
};
secHighest();

console.log("-------------------Q2--------------------");
// Character frequency counter from a string.
// Input: "apple"
// Output: { a: 1, p: 2, l: 1, e: 1 }

const charFrequency = () => {
  let characterStr = "apple";
  let obj = {};
  for (let i = 0; i <= characterStr.length - 1; i++) {
    // console.log(characterStr[i]);
    if (obj[characterStr[i]]) {
      obj[characterStr[i]]++;
    } else {
      obj[characterStr[i]] = 1;
    }
  }
  console.log(obj);
};
charFrequency();

console.log("-------------------Q3 without inbuilt--------------------");
// Reverse only words in an array of strings.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

//Without inbuilt methods
const reverseWordInArray1 = () => {
  let arr = ["hello", "world"];
  let reverseArr = [];
  for (let i = 0; i < arr.length; i++) {
    let singleWord = arr[i];
    let words = "";
    for (let j = singleWord.length - 1; j >= 0; j--) {
      // console.log(singleWord[j]);
      words += singleWord[j];
    }
    // console.log(singleWord);
    // console.log(words)
    reverseArr[reverseArr.length] = words;
    // break;
  }
  console.log(reverseArr);
};
reverseWordInArray1();

console.log("-------------------Q3 with inbuilt--------------------");
//With inbuilt methods
const reverseWordInArray = () => {
  let arr = ["hello", "world"];
  let reverseArr = [];
  arr.map((el) => {
    let newStr = el.split("").reverse().join("");
    // console.log(newStr);
    reverseArr.push(newStr);
  });
  console.log(reverseArr);
};
reverseWordInArray();

console.log("-------------------Q4--------------------");
// Check even or odd using map.
// Input: [1, 2, 3, 4]
// Output: ["odd", "even", "odd", "even"]

const evenOddUsingMap = () => {
  let arr = [1, 2, 3, 4];
  let newArr = [];
  arr.map((ele) => {
    // console.log(ele)
    if (ele % 2 === 0) {
      // console.log("even")
      newArr.push("even");
    } else {
      // console.log("odd");
      newArr.push("odd");
    }
  });
  console.log(newArr);
};
evenOddUsingMap();

console.log("-------------------Q5--------------------");
// Flatten a nested array (1 level deep).
// Input: [1, 2, [3, 4], 5]
// Output: [1, 2, 3, 4, 5]

const flattenArr = () => {
  let arr = [1, 2, [3, 4], 5];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(typeof(arr[i]))
    if (typeof arr[i] == "object") {
      let obj = arr[i];
      // console.log(obj)
      for (let j = 0; j < obj.length; j++) {
        // console.log(obj[j])
        newArr[newArr.length] = obj[j];
      }
    } else {
      // console.log(arr[i])
      newArr[newArr.length] = arr[i];
    }
  }
  console.log(newArr);
};
flattenArr();

console.log("-------------------Q6--------------------");
// Print all prime numbers between 10 and 50.
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

const primeNumbers = () => {
  let primeArr = [];
  for (let i = 10; i <= 50; i++) {
    let isPrime = false;
    for (let j = 3; j < i; j++) {
      // console.log(j)
      if (i % j === 0) {
        isPrime = true;
        break;
      }
    }
    if (isPrime === false) {
      primeArr[primeArr.length] = i;
    }
  }
  console.log(primeArr);
};
primeNumbers();

console.log("-------------------Q7--------------------");
// Filter names that start with vowels.
// Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"]
// Output: ["Alice", "Eve", "Uma"]

const filterNames = () => {
  let arr = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let singleWord = arr[i];
    for (let j = 0; j < singleWord.length; j++) {
      // console.log(singleWord[0])
      if (
        singleWord[0] === "A" ||
        singleWord[0] === "E" ||
        singleWord[0] === "I" ||
        singleWord[0] === "O" ||
        singleWord[0] === "U"
      ) {
        newArr[newArr.length] = singleWord;
      }
      break;
    }
  }
  console.log(newArr);
};
filterNames();

console.log("-------------------Q7 using Filter method--------------------");

const filterNamesMethod = () => {
  let arr = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
  let newArr = [];
  arr.filter((el) => {
    if (
      el[0] === "A" ||
      el[0] === "E" ||
      el[0] === "I" ||
      el[0] === "O" ||
      el[0] === "U"
    ) {
      newArr.push(el);
    }
  });
  console.log(newArr);
};
filterNamesMethod();

console.log("-------------------Q8--------------------");
// Rotate array by one to the right.
// Input: [1, 2, 3, 4]
// Output: [4, 1, 2, 3]

const rotateEle = () => {
  let arr = [1, 2, 3, 4];
  let lastEl = arr.length;
  let i = arr.length - 1;
  while (i >= 0) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[0] = lastEl;
  console.log(arr);
};
rotateEle();

console.log("-------------------Q9--------------------");
// Check if all array elements are greater than 10.
// Input: [12, 15, 22]
// Output: true

const checkAllEle = () => {
  let arr = [12, 15, 22, 15];
  let allTrue = false;
  for (let i = 0; i < arr.length; i++) {
    allTrue = false;
    if (arr[i] > 10) {
      allTrue = true;
    }
  }
  if (allTrue) {
    console.log(true);
  }else{
    console.log(false)
  }
};
checkAllEle();

console.log("-------------------Q9 using every method--------------------");
const checkAllEle1 = () => {
  let arr = [12, 15, 22, 5];
  let newArr = arr.every((el) => el > 10);
  console.log(newArr);
};
checkAllEle1();

console.log("-------------------Q10--------------------");
// . Filter numbers divisible by 3 and 5.
// Input: [10, 15, 30, 20, 45]
// Output: [15, 30, 45]

const filterNum=()=>{
    let arr=[10, 15, 30, 20, 45]
    let newArr=arr.filter((el)=>(el%3===0 && el%5===0));
    console.log(newArr)
}
filterNum();

console.log("-------------------Q11--------------------");
// Fibonacci sequence up to 15 terms.
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

//wrong output
const fibonacciSeries=()=>{
  let fibonacci;
  let first=0;
  let sec=1;
  let i=0;
  let newArr=[]
while(i<15){
  fibonacci=first+sec
  console.log(fibonacci)
    first=sec;
    sec=fibonacci;
    i++;
}
}
// fibonacciSeries();

console.log("-------------------Q12--------------------");

// . Count occurrences of a value in array.
// Input: [1, 2, 1, 3, 1, 4], Element: 1
// Output: 3

const occurOfValue=()=>{
    let element=2;
    let count=0;
    let arr=[1, 2, 1, 3,2, 1, 4];
    for(let i=0;i<arr.length;i++){
        if(element===arr[i]){
          count++;
        }
    }
    console.log(count);
}
occurOfValue();

console.log("-------------------Q13--------------------");
// Sum of even numbers using reduce.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12

const sumOfEven=()=>{
    let arr=[1, 2, 3, 4,2, 5, 6];
    let newArr=arr.reduce((sum,el)=>(
      el%2===0 ? sum+=el:sum
    ),0)
    console.log(newArr)
}
sumOfEven();


