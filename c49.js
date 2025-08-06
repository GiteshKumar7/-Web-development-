// Function

function fun(){
    console.log("hello");
}
fun();
fun();
fun();


// 2...
function name(){
    console.log("Appna collge");
}

name();
name();

// 3.. functiton with loop

function printName(){
    for(let i=0; i<=5; i++){
        console.log(i);
    }
}
printName();


// function withh loop
function printName1(){
    for(let i=0; i<=5; i++){
        console.log("Hello Gitesh");
    }
}
printName1();

// function with conditional 
function isAdult(){
  let age=33;
  if(age<18){
     console.log("Not adult");
  }else{
    console.log("Adult");
  }
}
isAdult();


// print a poem

function printPeom(){
    console.log("Twinke Twinke little star");
    console.log("How I wonder what you are !");
}

printPeom();

// print a function to roll a dice and always  display the values of the dice(1 to 6); 

function rollDice(){
let random= Math.floor(Math.random()*6)+1;
  console.log(random);
}
rollDice();
rollDice();
rollDice();


//  function with Arguments


// 1..
function funcName(a , b){
console.log(a+b);
}
funcName(2,9);
funcName(2,5);
funcName(2,2);


// 2..
function functionName(name, age){
    console.log(`${name}'s age is ${age}`);
}
functionName("Gitesh",19);
functionName("Ritesh",18); 
functionName("Hitesh");// undefined


//  practice Questions


//  Multiplication table of  any number
function multiTable(n){
    for(let i =1; i<=10; i++){
         console.log(n*i);
    }
}
multiTable(7);
 

//  average of three numbers
function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(2,3,4);


// return .............

function sum(a,b){
    console.log("hello");
    return a+b;
}
  
// 1 ways
 let r=sum(sum(2,3),4);
 console.log(r);

//  2 ways
let ram=sum(2,4);
console.log(ram);

console.log(sum(2,5));



function isAdult(age){
    if(age>18){
        return "adult";
    }else {
        return "Not adult";
    }
    //console.log("Unreachable code")//Not runnale code
}

let s=isAdult(isAdult(6),88);
console.log(s);


// practice questions
// create a function that return  the sum of numbers from 1 to n

function sumNumbers(n){
    let sum=0;
    for(let i=1; i<=n; i++){
       sum+=i;
    }
     return sum;
}
console.log(sumNumbers(4));//11


// create a function that return the concatenation of all string in an array;
let arr=["abb","bnn","cjjj="];
function concatNumber(arr){
    let result;
    for(let i=0; i<arr.length; i++){
      result+=arr[i];  
    }
    return result;
}
console.log(concatNumber(arr)); 


//  Scope 
//  funnction , lexical , Block


//  function scope
let sum1=22;// Global scope

function calSum(a,b){
 //  let sum1=a+b;   // functional Scope
   console.log(sum1);
}
calSum(2,3);


//  Block 
// ->varibale cant not be acccessed outside of block 

{
    var a=11;
}
console.log(a);


for(let i =0; i<3;i++){
 console.log(i);
}
//  console.log(i);//i is not defined


// let age=24;
// if(age>18){
//    let  str="adult";
// }
//( i cannot be accessed from otside)
// console.log(str);//str is not defined


//  Lexical Scope
function outer1() {
  let a = 30;
  let b = 20;

  function inner1() {
    console.log(a); // Accesses 'a' from outer1
    console.log(b); // Accesses 'b' from outer1
  }
  inner1(); // Output: 3,2
}
outer1();

 //it  is possible due to  HOISTing
function outer(){
   console.log("only outer here");
     function Inner(){
        console.log(a);
        console.log(b);
  }
  let a=33;
  let b=22;
   Inner();//3,2
}
outer();



//  ......... practice Questions

let greet="hello";  // Global scope

function changeGreet(){
        let greet="Namaste"; //functional scope
        console.log(greet);
    function innerGreet(){
            console.log(greet); // lexical scope
    }

    innerGreet();
}

console.log(greet);
changeGreet();


//  Funtion expressions
// 1 (a)Nameless function

//....1
let sum2=function(a,b){
    return a+b;
}
console.log(sum2(1,2));


//...2
let hello=function(){
    console.log("hello");
}
hello();

//.....3.. Now answer is "Ram Ram" not "hello"
hello=function(){
    console.log("Ram Ram");
}
hello();



// Higher order functions


//1.....function inside functions as parameters

function MultiGreet(func,count){
    for(let i =1; i<=count;i++){
       func();
    }
}

let greet1= function(){
    console.log("hello");
}

MultiGreet(greet1,100);



// 2......Return as function

// .......Normal code 
// let n=prompt("enter your n:")
// let odd=function(n){
//     console.log(!(n%2==0));
// }
// odd();

// let even=function(n){
//     console.log(n%2==0);
// }
// even();



//........Code : return for function

function oddEvenTest(request){
     if(request=="odd"){
         return function(n){
          console.log(!(n%2==0));
        }
     }else if(request=="even"){
         return function(n){
             console.log(n%2==0);
        }
     }else{
            console.log("Wrong request"); 
        }
 }


let request="odd";//"even"

let func= oddEvenTest(request);// request: odd
console.log(func(2));// false
console.log(func(3));// true 



// Methods : (key : value)

const calculator={
    num:22,
    sum: function(a,b){
        return a+b;
    },

    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};

console.log(calculator);
console.log(calculator.num);//22
console.log(calculator.mul(2,2));//4
console.log(calculator.sum(3,3));//6
console.log(calculator.sub(2,1));//1


//  or 
// short hand implementation of the method

let cal={
   numm: 22,

    add(a,b){
      return a+b;
    },

    sub(a,b){
        return a-b;
    }
};

console.log(cal);
console.log(cal.add(2,2));
console.log(cal.sub(5,2));


// Practice questions


// 1...JavaScript function that returns all array elements larger than a given number:

// let n=18;
// let arr1=[11,32,19,22];
// let arr2="";
// console.log(arr1);
// function func1(arr1,n){
//     for(let i=0; i<arr1,length; i++){
//         if(arr1[i]>n){
//             return  arr[i];
//         }
//     }
// }

// console.log(arr2);


let n=18;
let arr1=[11,22,19,33];

let arr2=arr1.filter(num => num > n);
console.log(arr2);

// simple JavaScript function to extract unique characters 
// from a string (i.e., characters that appear only once):



function func2(str){
    let result="";
    for(let i=0;i<str.length; i++){
       let char=str[i];
         if(!result.includes(char)){
          result+=char;
       } 
    }
    return result;
}

let str= "abcdabcdefgggh";
let result=func2(str);

console.log(str);
console.log(result); // Output: "poain"


// JavaScript function that accepts a list of country names
//  and returns the longest country name:


function fun3(countryName){
    let  longest="";
   for(let i=0; i<countryName.length; i++){
       if(countryName[i].length > longest.length){
          longest= countryName[i];
       }
   }
   return longest;
}

let countryName=["Australia","Germanyiii","United States of America"];
let LongestCountryName=fun3(countryName);


console.log(countryName);
console.log(LongestCountryName);



// JavaScript function to count the number
//  of vowels in a given string:


function funct(words){
     words=words.toLowerCase();
     let count=0;


     for(let  i=0; i<words.length;i++){
        if("aeiou".includes(words[i])){
            count++;
        }
     }
    return count;
}


let words="Gitesh Kumar";
let vowel=funct(words);

console.log(vowel);


//javaScript function to generate a random number 
// within a given range — from start to end (inclusive):



function func4(start,end){
   
    let star= Math.floor(Math.random()*(end-start+1))+start;
    return star;
}

let start=20;
let end=50;

let randomValue=func4(start,end);
console.log(randomValue);






