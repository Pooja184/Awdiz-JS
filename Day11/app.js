
const localStorageExample=()=>{
    const token="hgvfr467q2tsf";
    localStorage.setItem("token",token)   

    let getToken=localStorage.getItem("token");
    console.log(getToken)

    localStorage.removeItem("token")
}
// localStorageExample()

const sessionStorageExample=()=>{
    const token="jhf86528jfdb";
    sessionStorage.setItem("token",token);

    let getToken=sessionStorage.getItem("token");
    console.log(getToken);

    sessionStorage.removeItem("token");
}
// sessionStorageExample();

const printTriangleStarPattern=()=>{
    let range=5;
    for(let i=1;i<=range;i++){
        let pattern="";
        for(let j=1;j<=i;j++){
            pattern+="* ";
        }
        console.log(pattern);

    }
}
printTriangleStarPattern();

// iteration 1
// i<=range(5) = true || i=1
// j<=i    =  true || j=1 || pattern= * 
//clg(pattern)= *
// i++ 

// iteration 2
// i<=range(5) = true || i=2
// j<=i    =  true || j=1 || pattern= * 
// j<=i    =  true || j=2 || pattern= * *
//clg(pattern)= * *
// i++ 

// iteration 3
// i<=range(5) = true || i=3
// j<=i    =  true || j=1 || pattern= * 
// j<=i    =  true || j=2 || pattern= * *
// j<=i    =  true || j=3 || pattern= * * *
//clg(pattern)= * * *
// i++ 

// iteration 4
// i<=range(5) = true || i=4
// j<=i    =  true || j=1 || pattern= * 
// j<=i    =  true || j=2 || pattern= * *
// j<=i    =  true || j=3 || pattern= * * *
// j<=i    =  true || j=4 || pattern= * * * *
//clg(pattern)= * * * *
// i++ 

// iteration 5
// i<=range(5) = true || i=5
// j<=i    =  true || j=1 || pattern= * 
// j<=i    =  true || j=2 || pattern= * *
// j<=i    =  true || j=3 || pattern= * * *
// j<=i    =  true || j=4 || pattern= * * * *
// j<=i    =  true || j=5 || pattern= * * * * *

//clg(pattern)= * * * * *
// i++ 
