// promises
// promises are asynchronous function which will return
// result in future
let areaofcircle=(radius)=>{
    return new Promise((resolve,reject)=>{
        if(radius==0){
            reject("invalid input")
        }else{
            resolve(3.14*radius*radius);
        }
    })
}
let pr=areaofcircle(10);
pr.then(result=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
let cir=async()=>{
    try{
    let result=await areaofcircle(20);
    console.log(result);
}catch(e){
    console.log(e)
}
}
cir();
let findGrade=(marks)=>{
    return new Promise((resolve,reject)=>{
        if(marks>50){
            resolve("passed")
        }else{
            reject("failed")
        }
    })
}
findGrade(60)
.then(result=>console.log(result))
.catch(error=>console.log(error))
// Async Await
// it will work like synchronous function calling
let k=async ()=>{
    try{
        let result=await findGrade(60);
        console.log(result);
    }catch(e){
        console.log(e)
    }
};
k();