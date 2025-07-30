const thirdLargest=()=>{
    // find the third largest number in an array
let arr=[2,6,1,8,10,9,7,3];
let max=0;
let secMax=0;
let thirdMax=0;

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>max){
        thirdMax=secMax;
        secMax=max;
        max=arr[i];
    }else if(arr[i]>secMax && max !=arr[i]){
        thirdMax=secMax;
        secMax=arr[i];
    }else if(arr[i]>thirdMax && secMax !=arr[i]){
        thirdMax=arr[i]
    }
}
console.log(thirdMax,"Third");
console.log(secMax,"second");
console.log(max,"max");

}
// thirdLargest()