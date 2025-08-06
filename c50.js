// javascript part-7 

//  this keyword -> calling or accessign  the current piece of code

// o bject creation or literals
const info={
   name: "ram",
   age:11,
   sex:"Other",
   math:88,
   sc:99,
   ph:98,

   getavg(){
    console.log(this);// this 
    let avg= (this.math+this.sc+this.ph)/3;
     console.log(`${this.name} got avg marks = `+ avg);
   }
}

info.getavg();


//  window object
function  getavg1(){
    console.log(this);// this 
 }


// try and catch 
//  try -> let you to run the remaining code even there is porblem in middle of the program
// catch -> to catch the error while execution 
 
console.log("hello");
console.log("hello");
// let a=3;//normally printed if not ommeted
try{
console.log(a);
} 

catch(e){
    console.log("Caught an err... a is not defined");
    console.log(e);
}
console.log("hello2"); 
console.log("hello2");



//  Arrow functions

//  sum of two number
const sum=(a,b) =>{
    console.log(a+b);
};
sum(4,4);


//  cube of a number
const cube= a =>{
    return a*a*a; 
}
console.log(cube(3));


// power fucntion
const power=(a,b)=>{
  return a**b;
}

// Arrow function without parameter

let hello=()=>{
    console.log("hello!");
}
hello();


// implicit return

const  mul=(a,b)=>(
  a*b
);
console.log(mul(2,2));


//  same as above
const mull=(a,b)=>a*b;
console.log(mull(1,2));


const cube1=n=>n*n*n;
console.log(cube1(2));


//  setTimeOut : execute after 4 seconds

console.log("Hi there!");

setTimeout ( ()=>{
    console.log("Gitesh Kumar")
},4000);

console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");

//  ..output..
// Hi there
// Welcome to
// Gitesh Kumar (after 4s)

console.log("");

// setInterval 
//setInterval(funtion,timeout)

// 1...example
console.log("hi ma'am");
let id = setInterval(()=>{
    console.log("Gitesh Kumar")
},2000);

// clearInterval(id);


// 2....example
let id1= setInterval(()=>{
    console.log("hello World");
},3000);

// clearInterval(id1);

