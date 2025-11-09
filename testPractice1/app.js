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


const reverseNumber=()=>{

    let num=123;
     let reverse=0;
    while(num>0){
        let rem=num%10;
        reverse=Math.floor(reverse*10+rem);
        num=Math.floor(num/10);
        console.log(rem)  
    }
    console.log(reverse)
}
// reverseNumber()

const checkAnagrams=()=>{
    let str1="listen";
    let str2="silenp";
    if(str1.length != str2.length){
        console.log("Not anagrams");
    }else{
        
        let isAnagram=false;
        for(let i=0;i<str1.length;i++){
        // isAnagram=true;
        for(let j=0;j<str2.length;j++){
            if(str1[i]==str2[j]){
                isAnagram=true;
                break;
            }else{
                isAnagram=false;
                
            }
        }
    }
    // console.log(isAnagram)
    if(isAnagram){
        console.log("Strings are anagrams");
    }else{
        console.log("Strings are not anagrams")
    }
    }
}
checkAnagrams();
