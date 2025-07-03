

const arrExample=()=>{
    let arr= [1,2,3,4,5];
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
arrExample();
console.log("-----------------------------");

const evenNumbersCount=()=>{
    let arr=[2,3,1,5,8,6];
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++;
        }
    }
    console.log(count);
}
evenNumbersCount();
console.log("-----------------------------");


const mapMethod=()=>{
    let arr=[2,5,1,7,3];
    let newArr=arr.map((num)=>num+2);
    console.log(newArr);
}
mapMethod();
console.log("-----------------------------");
 

const forEachMethod=()=>{
    let arr=[1,2,6,4,3];
    arr.forEach((el,idx)=>console.log(el,idx));
}
forEachMethod();
console.log("-----------------------------");


const filterMethod=()=>{
    let arr=[2,1,4,6,3];
    let newArr=arr.filter((el)=>el%2 !== 0);
    console.log(newArr);
}
filterMethod();