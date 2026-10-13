// commonjs module
let example=()=>{
    console.log("hello from module");
}
let add=(a,b)=>{
    return a+b;
}
let subtract=(a,b)=>{
    return a-b;
}
let multiply=(a,b)=>{
    return a*b;
}
let divide=(a,b)=>{
    return a/b;
}
module.exports={example,add,subtract,multiply,divide};