// Total Character Count in Strings
//  Return the total number of characters in an array of strings using `reduce()`.
//  Input 1: ['hi', 'world']
//  Output 1: 7
//  Input 2: ['a', 'ab', 'abc']
//  Output 2: 6




// ## ✅ **Basic Questions (Logic + Output)**

// 1. **Using `map()`**
//    Q: Double each number in `[1, 2, 3, 4]`
//    Expected Output: `[2, 4, 6, 8]`
// Return Multiple output= provide all elements


const double=()=>{
    let arr=[1, 2, 3, 4];
    let newArr=arr.map((el)=>el*2);
    console.log(newArr);
}
double();

// 2. **Using `filter()`**
//    Q: Return only even numbers from `[1, 2, 3, 4, 5, 6]`
//    Expected Output: `[2, 4, 6]`
// Return Multiple output=provide elements which pass the condition

const returnEven=()=>{
    let arr=[1, 2, 3, 4, 5, 6];
    let newArr=arr.filter((el)=>el%2==0)
    console.log(newArr)
}
returnEven()

// 3. **Using `reduce()`**
//    Q: Find the sum of all numbers in `[5, 10, 15]`
//    Expected Output: `30`
// Return single output

const findSum=()=>{
    let arr=[5,10,15];
    let newArr=arr.reduce((sum,curr)=>{
        return sum+curr;
    },0)
    console.log(newArr)
}
findSum()

// 4. **Using `forEach()`**
//    Q: Print each element of the array `[‘a’, ‘b’, ‘c’]`

const printAllEl=()=>{
    let arr=['a','b','c'];
    arr.forEach((el)=>console.log(el)); 
}
printAllEl()

// 5. **Using `find()`**
//    Q: Find the first number greater than 10 in `[2, 8, 15, 4]`
//    Expected Output: `15`
// Return single output

const findGreater=()=>{
    let arr=[2,8,15,4];
    let newArr=arr.find((el)=>el>10)
    console.log(newArr);
}
findGreater();

// 6. **Using `includes()`**
//    Q: Check if `'apple'` exists in `['banana', 'apple', 'grape']`
//    Expected Output: `true`
// Return Boolean output

const usingIncludes=()=>{
    let arr=['banana', 'apple', 'grape'];
    let newArr=arr.includes("apple");
    console.log(newArr)
}
usingIncludes();

// 7. **Using `some()`**
//    Q: Check if any number is odd in `[2, 4, 6, 7]`
//    Expected Output: `true`
// Return Boolean output

const usingSome=()=>{
    let arr=[2, 4, 6, 7];
    let newArr=arr.some((el)=>el%0 != 0)
    console.log(newArr)
}
usingSome()

// Example using all three arguments in some()
// Return Boolean output

const demoSomeArgs = () => {
    let arr = [2, 4, 6, 7];
    let result = arr.some((element, index, array) => {
        console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
        return element % 2 !== 0; // checks for odd number
    });
    console.log(result); // Output: true
}
demoSomeArgs()

// 8. **Using `every()`**
//    Q: Check if all elements are positive in `[3, 4, 5]`
//    Expected Output: `true` 
// Return Boolean output
const usingEvery=()=>{
    let arr=[3, 4, 5];
    let newArr=arr.every((el)=>el>0)
    console.log(newArr)
}
usingEvery()

// 9. **Using `sort()`**
//    Q: Sort `[4, 2, 5, 1]` in ascending order
//    Expected Output: `[1, 2, 4, 5]`
//modifies original array
const usingSort=()=>{
    let arr=[4, 2, 5, 1];
    arr.sort((a,b)=>a-b)
    console.log(arr)
}
usingSort()

// 10. **Using `reverse()`**
//     Q: Reverse `[1, 2, 3, 4]`
//     Expected Output: `[4, 3, 2, 1]`
//mutates original array, doesn't require parameters
const usingReverse=()=>{
    let arr=[1, 2, 3, 4];
    arr.reverse();
    console.log(arr)
}
usingReverse()

// ---

// ## 🧠 **Slightly Challenging Practice**

// 11. Remove duplicates from `[1, 2, 2, 3, 4, 4, 5]` without using `Set`

const removeDuplicates=()=>{
    let arr=[1, 2, 2, 3, 4, 4, 5];
    let unq=[];
    let newArr=arr.filter((el)=>{
        if(!unq.includes(el)){
            unq.push(el);
            return true;
        }
        return false;
    });
    console.log(newArr)
   
}
removeDuplicates()

const removeDuplicates1=()=>{
    let arr=[1, 2, 2, 3, 4, 4, 5];
    let unq=[];
    let newArr=arr.filter((el)=>!unq.includes(el) && unq.push(el));
    console.log(newArr)
}

removeDuplicates1();

// 12. Convert `['apple', 'banana']` to uppercase using `map()`

// 13. Count the total characters in `["hi", "world"]` using `reduce()`

// 14. Count frequency of each letter in `'hello'` using `reduce()`

// 15. Flatten a 2D array `[[1, 2], [3, 4]]` to `[1, 2, 3, 4]` using `reduce()`

// 16. Filter names starting with `'A'` from `['Amit', 'Bob', 'Anu']`

// 17. Square only even numbers from `[1, 2, 3, 4, 5]`

// 18. Replace every number > 10 with `'big'` using `map()`

// 19. Find the product of all numbers in `[2, 3, 4]` using `reduce()`

// 20. Check if all names are less than 5 characters using `every()`




// const charCount=()=>{
//     let arr=["hii","world"];
//     let newArr=arr.reduce((count,curr)=>{
//        return count+curr.length
//     },0)
//     console.log(newArr)
// }
// charCount()