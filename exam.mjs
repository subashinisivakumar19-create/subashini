// ES6 MODULE

console.log("helo");

let add=(a,b)=>{
    return a+b;
}
let subtract=(a,b)=>{
return a-b;
}
let multiply=(a,b)=>{
return a*b;
}

export default add;   // default export
export {subtract,multiply};    // named export