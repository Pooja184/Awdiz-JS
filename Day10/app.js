const traditionalIfElse=()=>{
    let age=22;
    if(age>=18){
        console.log("Adult")
    }else{
        console.log("Minor")
    }
}
traditionalIfElse()

const usingTernaryOperator=()=>{
    let age=14;
    let category= age>=18?"Adult":"Minor";
    console.log(category);
}
usingTernaryOperator()

//Template literals

const usingConcatination=()=>{
    let name="Pooja";
    let surname="Bhambid";
    console.log("Welcome to our webpage " + name +" "+ surname)
}
usingConcatination()

const usingTemplateLiterals=()=>{
     let name="Pooja";
    let surname="Bhambid";
    console.log(`Welcome to our webpage ${name} ${surname}`)
}
usingTemplateLiterals()

const destructuringArr=()=>{
    let arr=[1,2,3,4];
    let [a,b,c,d]=arr;
    console.log("Distructuring Output Array : ",a,b,c,d)

}
destructuringArr()

const destructuringObj=()=>{
    let obj={name:"Awdiz",location:"Vashi",course:"Full Stack"};
    let {name,location,course}=obj;
    console.log("Distructuring Output Object :" ,name,location,course)
}
destructuringObj()

//Callback function
const callbackFunction=(name,callback)=>{
    console.log("Welcome",name);
    callback();
}

const AfterCallback=()=>{
    console.log("Please accept privacy policy.")
}

callbackFunction("Pooja",AfterCallback)