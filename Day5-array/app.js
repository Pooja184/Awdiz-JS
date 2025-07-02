
//print numbers from 1 to 10 using do while
const printNumbers = () => {
  let i = 10;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
};
// printNumbers();


// Array methods

// 1.push
const arrPush=()=>{
    // arr.push(23) adds 23 to the end of the arr.
    // But importantly, .push() returns the new length of the array, not the new array.
    let arr=[2,3,4,5,6];
    let newArr=arr.push(23);
    console.log(newArr);
    console.log(arr);

}
// arrPush();

const arrPop=()=>{
    // The original array is mutated (changed).
    // Original arr = [2, 3, 4, 5]
    // After .pop(), arr = [2, 3, 4]
    // newArr = 5 → the removed value
    let arr=[2,3,4,5];
    let newArr=arr.pop();
    console.log(newArr);
    console.log(arr);
}
// arrPop();

const arrShift=()=>{
  //   Removes the first element from the array.
  // Returns the removed element.
  // Mutates (changes) the original array.
    let arr=[2,3,4,5];
    let newArr=arr.shift();
    console.log(newArr);
    console.log(arr);
}
// arrShift();

const arrUnshift=()=>{
  let arr=[1,2,3,4,5];
  let newArr=arr.unshift(0);
  console.log(newArr);
  console.log(arr);
}
// arrUnshift();

const arrSort=()=>{
  // mutates arr
  let arr=[1,5,2,7,4];
  let newArr=arr.sort((a,b)=>a-b);
  console.log(newArr);
  console.log(arr);
}
// arrSort();

const arrSlice=()=>{
  //original array remains same;
  // slice(start, end) returns a shallow copy of the array from start index (inclusive) to end index (exclusive).
  let arr=[1,2,3,4,5];
  let newArr=arr.slice(2,4);
  console.log(newArr);
  console.log(arr);
}
// arrSlice();

// clg