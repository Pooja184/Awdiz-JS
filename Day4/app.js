// Write a program to check if a number is positive, negative, or zero using if-else.
const question1 = () => {
  let number = 0;
  if (number < 0) {
    console.log(`${number} is Negative Number`);
  } else if (number > 0) {
    console.log(`${number} is positive number`);
  } else {
    console.log("Number is zero");
  }
};
question1();

const evenOddUsingConditionals = () => {
  let number = 68;
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is Odd`);
  }
};
evenOddUsingConditionals();

// Write a program that accepts age as input and prints:
// ○ "Child" if age < 13
// ○ "Teenager" if 13 ≤ age < 20
// ○ "Adult" if 20 ≤ age < 60
// ○ "Senior" if age ≥ 60

const question3 = () => {
  let age = 80;
  if (age < 13) {
    console.log("Child");
  } else if (age >= 13 && age < 20) {
    console.log("Teenager");
  } else if (age >= 20 && age < 60) {
    console.log("Adult");
  } else {
    console.log("Senior");
  }
};

question3();

// Create a program to print the grade of a student using if-else based on marks:
// ○ 90+ => A
// ○ 80–89 => B
// ○ 70–79 => C
// ○ 60–69 => D
// ○ below 60 => F

const grade = () => {
  let marks = 100;
  if (marks >= 90) {
    console.log("A");
  } else if (marks <= 89 && marks > 80) {
    console.log("B");
  } else if (marks <= 79 && marks > 70) {
    console.log("C");
  } else if (marks <= 69 && marks > 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};
grade();

// Use a switch case to take a number between 1–7 and print the corresponding weekday.

let day = 8;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Number");
    break;
}

// Create a program using switch that takes a character input and prints whether it is a
// vowel (a, e, i, o, u) or consonant.

const vowel = () => {
  let char = "a";
  switch (char) {
    case "a":
      console.log("Vowel");
      break;
    case "e":
      console.log("Vowel");
      break;
    case "i":
      console.log("Vowel");
      break;
    case "o":
      console.log("Vowel");

      break;
    case "u":
      console.log("Vowel");
      break;
    default:
      console.log("Constant");
      break;
  }
};
vowel();

// Use if-else to check if a year is a leap year or not.

const leapYear = () => {
  let year = 2000;
  if (year % 4 === 0) {
    console.log("leap year");
  } else {
    console.log("Not a Leap year");
  }
};

leapYear();

const arthmetic = () => {
  let op = "+";
  let num1 = 4;
  let num2 = 6;
  switch (op) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "*":
      console.log(num1 * num2);

      break;
    case "%":
      console.log(num1 % num2);
      break;
    default:
      console.log("Invalid operator");
      break;
  }
};

arthmetic();

// Write a program using if-else to check if a person is eligible to vote (age ≥ 18)
const voteEligible = () => {
  let age = 15;
  if (age >= 18) {
    console.log("You are eligible for voting");
  } else {
    console.log("You are not eligible for voting");
  }
};
voteEligible();

// . Using if-else, check if three given sides can form a triangle or not.

const triangle = () => {
  let side1 = 45;
  let side2 = 34;
  let side3 = 26;
  if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
    console.log("Sides can form triangle");
  } else {
    console.log("Sides cannot form triangle");
  }
};
// triangle();

//----------------------Loops-----------------------------------------//
console.log("-------------------------Loops-------------------------------")
// Print all even numbers from 1 to 50 using a for loop and if condition

const printNumbers = () => {
  for (let i = 1; i <= 50; i++) {
    console.log(i);
  }
};
printNumbers();
console.log("------------------")
// Using a while loop, print numbers from 10 to 1 in reverse order.
const reverseNum = () => {
  let num = 10;
  while (num >= 1) {
    console.log(num);
    num--;
  }
};
reverseNum();
console.log("------------------")


// Write a program that prints the multiplication table of a number (e.g., 7) using a for
// loop.

const table = () => {
  let num = 5;
  for (let i = num; i <= num * 10; i += num) {
    console.log(i);
  }
};
table();
console.log("------------------")

// Using a for loop, print only the odd numbers from 1 to 100
const odd=()=>{
    for(let i=1;i<=100;i++){
        if(i%2===1){
            console.log(i);
        }
    }
}
odd();
console.log("------------------")

// Create a program to count how many numbers between 1 and 100 are divisible by both
// 3 and 5 using for and if.

const divisibleAndCheck=()=>{
    // let count=0;
    for(let i=1;i<=100;i++){
        if(i%3===0 && i%7===0){
            console.log(i);
            // count++;
        }
    }
    // console.log(count);
}
divisibleAndCheck();
console.log("------------------")

// Print the factorial of a number using a while loop.
const factorial=()=>{
    let num=5;
    let fact=1;
    for(let i=num;i>=1;i--){
        fact*=i;
    }
    console.log(fact);
}
factorial();
console.log("------------------")

// Use a for loop to find the sum of all numbers from 1 to 100.

const sumOfNum=()=>{
    let sum=0;
    for(let i=1;i<=100;i++){
        sum+=i;
    }
    console.log(sum);
}
sumOfNum();
console.log("------------------")

// Write a program using a loop and switch to print:
// ○ "Fizz" if the number is divisible by 3
// ○ "Buzz" if divisible by 5
// ○ "FizzBuzz" if divisible by both
// ○ Else print the number
// (From 1 to 50)

const loopAndSwicth=()=>{
    for(let i=1;i<=50;i++){
        let value=true;
        switch (value) {
            case (i%3===0 && i%7===0):
                console.log(i,"FizzBuzz");
                break;
            case (i%5===0):
                console.log(i,"buzz");
                break;
            case (i%3===0):
                console.log(i,"Fizz");
                break;
            default:
                console.log(i)
                break;
        }
    }
}
loopAndSwicth();
console.log("------------------")

// Print the first 10 Fibonacci numbers using a while loop.

const Fibonacci=()=>{
    let i=1;
    let fib=0;
    while(i<=10){
        fib+=i;
        console.log(fib);
        i++;
    }
}
Fibonacci();
console.log("------------------")


// . Using a for loop, print the square of numbers from 1 to 10 and categorize them using
// if:
// ● Less than 20: “Small”
// ● Between 20–50: “Medium”
// ● More than 50: “Large

const square=()=>{
    let sqr=1;
    for(let i=1;i<=10;i++){
       sqr= i*i;
       if(sqr<20){
        console.log(i,"Small");
       }else if(sqr>=20 && sqr<=50){
        console.log(i,"Medium");
       }else{
        console.log(i,"Large");
       }

        // console.log(i,sqr)
    }
}
// square();