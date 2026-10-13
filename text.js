console.log("hello javascript");
var a=100;
var b=20;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
var aa=100;
console.log(typeof(aa));
var bb="helo";
console.log(typeof(bb));
var cc=true;
console.log(typeof(cc));
var dd={name:'abc'}
console.log(typeof(dd));
var ee=function (){}
console.log(typeof(ee));
var ff=[1,2,3,4];
console.log(typeof(ff));
if(a>b){
    console.log("a is greater")
}else{
    console.log("b is greater")
}
var m=7;
var n=5;
if(m>n){
    console.log("m is greater")
}else{
    console.log("n is greater")
}
// logical operator
// && and
// || or
// ! not
var x=true;
var y=false;
console.log(x&&y); // true and false = false
console.log(x||y); // true or false = true
console.log(!x); // true = false
var week=1;
switch(week){
    case 1:console.log("monday");break;
    case 2:console.log("tuesday");break;
    case 3:console.log("wednesday");break;
    default:console.log("no match");

}
var month=1;
switch(month){
    case 1:console.log("january");break;
    case 2:console.log("february");break;
    case 3:console.log("march");break;
    default:console.log("no match");
}
// loops
var k=5;
var i=1;
while(k>=i){
    console.log(k);
    k=k-1;
}
// + addition
// -subtraction
// * multiplication
// / division

var prod=1;
var val=5;
var flag=true;
for(i=2;i<val;i++){ // for loop i++= i=i+1
    //print odd number
    if(val%i==0){
        flag=false;
    
    }
}
if(flag)
console.log(prime);

