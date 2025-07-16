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


const double=()=>{
    let arr=[1, 2, 3, 4];
    let newArr=arr.map((el)=>el*2);
    console.log(newArr);
}
double();

// 2. **Using `filter()`**
//    Q: Return only even numbers from `[1, 2, 3, 4, 5, 6]`
//    Expected Output: `[2, 4, 6]`

const returnEven=()=>{
    let arr=[1, 2, 3, 4, 5, 6];
    let newArr=arr.filter((el)=>el%2==0)
    console.log(newArr)
}
returnEven()

// 3. **Using `reduce()`**
//    Q: Find the sum of all numbers in `[5, 10, 15]`
//    Expected Output: `30`

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

// 6. **Using `includes()`**
//    Q: Check if `'apple'` exists in `['banana', 'apple', 'grape']`
//    Expected Output: `true`

// 7. **Using `some()`**
//    Q: Check if any number is odd in `[2, 4, 6, 7]`
//    Expected Output: `true`

// 8. **Using `every()`**
//    Q: Check if all elements are positive in `[3, 4, 5]`
//    Expected Output: `true`

// 9. **Using `sort()`**
//    Q: Sort `[4, 2, 5, 1]` in ascending order
//    Expected Output: `[1, 2, 4, 5]`

// 10. **Using `reverse()`**
//     Q: Reverse `[1, 2, 3, 4]`
//     Expected Output: `[4, 3, 2, 1]`

// ---

// ## 🧠 **Slightly Challenging Practice**

// 11. Remove duplicates from `[1, 2, 2, 3, 4, 4, 5]` without using `Set`

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