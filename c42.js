console.log("hello Javascript!");
console.log("hello Gitesh!");
console.log("Hello Gitesh Kumar!");


let pencilPrice=11;
let eraserPrice=12;

//Noraml ways
console.log("The sum of "+ (pencilPrice + eraserPrice)  + " rupees" );

// template  laterals examples
console.log(`the total  price : $(pencilPrice + eraserPrice) rupees.`);
console.log(`the price of pencilPrice : ${pencilPrice}`);

//Arithmetic Operators
let a=10;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


//unary operators

console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);


//Assignment Operators

console.log(a+=2);
console.log(a-=2);
console.log(a%=2);
console.log(a/=2);

//comparison operators
let age=22;

console.log(age>22);// false
console.log(age<=22);// true
console.log(age!=22);// false

console.log(age==22);//true
console.log(age>=22);//true



console.log("123"==123);
console.log("1"==1);
console.log(0==false);
console.log(null==undefined);
console.log(0=="");



console.log("123"===123);
console.log("1"===1);
console.log(0===false);
console.log(null===undefined);
console.log(0==="");


//comparison for the non Numbers
console.log('a'>"A");
console.log('b'<"A");
console.log('a'<"c");
console.log('*'>"&");



// conditional Statments 


console.log("Before my if statement");
let ag=22;
if(ag>=18){
    console.log("You can vote");
      console.log("You can drive");
}

if(age<=28){
    console.log("You cannot vote");
     console.log("You can drive");
    
}
console.log("After my if statement");


let firstName="Gitesh kumar";
if(firstName=="Gitesh kumar"){
    console.log(`Welcome ${firstName}`);
}



// practice Qs  of traffic light system that shows what to do based on color
 

 let color="yellow";// red or green

 // traffic light system
 if(color==="red"){
    console.log("Stop!  Light color is red");
 }

 if(color==="yellow"){
    console.log("slow down! Light color is yellow");
 }

 if(color==="green"){
    console.log("Go! Light color is green");
 }
 
// else if documents 

let r=11;
   if(r>=18){
    console.log("You can vote!");
} else if (r<18){
    console.log("you can not vote");
} else if(r<18){
      console.log("you can not vote!");
}



//marks system in  the school

let marks=75;

if(marks >=90 ){
    console.log("A++");
}else if(60<= marks){
  console.log("A");
}else if(33<=marks){
    console.log("B");
}else if(marks<33){
     console.log("Just fail");
}

// for month 

let month="january";

if(month==="january"){
    console.log("Winter is here");
}else if(month=="april"){
    console.log("summer is here");
}


// learning the else statement in javascript

let subject= "science";

if(subject==="math"){
    console.log("math is here")
} else if(subject==="science"){
    console.log("science is here");
}else {
    console.log("other is here");
}



 let color1="red";// red or green

 // traffic light system
 if(color1==="red"){
    console.log("Stop!  Light color is red");
 }else if(color1==="yellow"){
    console.log("slow down! Light color is yellow");
 }else{
    console.log("Go! Light color is green");
 }



//  practice questions 
//  to make a system to calculate the price of popcorn base don the sise of the customer asked for


let size="L";

if(size==="XL"){
   console.log("Price is Rs 250");
}else if(size==="L"){
   console.log("price is Rs 200")
} else if(size=="M"){
    console.log("price is Rs 100");
}else if (size=="S"){
  console.log("price is Rs 50");
}


//   Nested else if Statements 


let mark=55;

if(mark>=33){
    console.log("pass")
   if(mark>=88){
    console.log("O grade!");
   }else{
    console.log("A grade!");
   }
}else{
    console.log("Better luck next time");
}



//  Logical operators


 // logical And (&&) operators

  console.log((3<4) && (99>33));// true
   console.log((8<4) && (99>33));// false
    console.log((3<4) && (9>33));// false


let mrks=78;

if(mrks>=33 && mrks >=70){
    console.log("Pass");
    console.log("A+");
}


// logical Or(||) operators

console.log((3>2) ||(33<32));// true
console.log((4>6) ||(33<3));// false
console.log((4>2) ||(33<30));// true


let mrk=44;

if(mrk>=33 || mrk >=70){
    console.log("Pass");
    console.log("A+");
}


//logical not (!) operators

let m=33;
if(!(m<30)){
    console.log("hello World!");
}

console.log(!false);
console.log(!true);
console.log(!0);
console.log(!1);



// Practice questions 
//  A "good string " is a string that start with the letter "a"  & has a length >3 . write a program to find if a sting is good or not;





let str="snake";


if((str[0]==="a") &&( str.length>=3)){
    console.log("String is good");
}else{
    console.log("String is bad");
}

 

let number=12;
if((number%3===0) && ((number+1===15) || (number-1) ==11)){
    console.log("safe");
}else{
    console.log("unsafe");
}



// truthy and falsy value




if(NaN){
console.log("hello I am true here");
}else{
    console.log("heloo I am false here");
}

    // gitesh have some truthy values
if("Gitesh Kumar"){
console.log("hello I am true here");
}else{
    console.log("heloo I am false here");
}


// another example
let string="";// empty --> false , space empty -> true

if(string){
    console.log("string is not empty");
}else{
    console.log("string is empty");
}



// Switch Statement

let clr="red";

switch(clr){
   case "red":
    console.log("stop!");
    break;

    case "yellow":
        console.log("get ready!");
        break;


     case "green":
        console.log("Go!");
        break;

        default:
            console.log("Broken-light");
}



//  practice questions for the Switch day form values 1 to 7

let day= 5;

switch(day){
    case 1: 
    console.log("sunday");
    break;

     case 2: 
    console.log("Monday");
    break;

     case 3: 
    console.log("Tuesday");
    break;

     case 4:
    console.log("wednesday");
    break;

     case 5: 
    console.log("Thursday");
    break;

     case 6: 
    console.log("friday");
    break;

     default:
    console.log("saturday");
    break;
}


  // Alert and prompt

//   alert("Something is Wrong!");
 
    // takinng the input 
//  let roll=prompt("Enter your roll no:");
// console.log(roll);


let Fname=prompt("Enter your first name");
let Lname=prompt("Enter your last name");
console.log(`Welcome ${Fname+ Lname}`);

let msg="Welcome " + Fname+ " "+ Lname+"!";
alert(msg);



// error and warning 
// -> to pprint the error and warning



console.error("This is an error message");
console.warn("This is a warning message");



//  part 2 pracctce questions
// 1.
let num=11;

if(num%10==0){
    console.log("good");
}else{
  console.log("bad");
}


// 2.

let userName=prompt("Enter your user's name ");
let userAge=prompt("Enter your user's age");

// alert(userName +"is" + userAge+" "+  "years old");
alert(`${userName} is ${userAge} years old!`);



//3.. month using the switch case

let mnth="Quarter3";

switch(mnth){
    case "Quarter1":
    console.log("January,February,March");
    break;

    case "Quarter2":
    console.log("April,May,June");
    break;

    case "Quarter3":
    console.log("July,August,September");
    break;

    case "Quarter4":
    console.log("October,November,December");
    break;
}


// 4.character start with "a" and "A" and str len>5

let strr="Angele";

if((strr[0]==="A" || strr[0]==="a") && strr.length>5){
    console.log("String is Golden");
}else{
        console.log("String is not a golden ");
}


// 5.  write aprogram to finnt the larges among 3 numbers


let num1= 22;
let num2=33;
let num3 =28;

if(num1>num2 &&  num1>num3){
    console.log(`${num1} is the largest` )
}else if(num2>num1 &&  num2>num3){
    console.log(`${num2} is the largest` )
}else{
    console.log(`${num3} is the largest` )
}


// 6..

let numA=11234;
let numB=87654;

if((numA%10)==(numB%10)){
    console.log(4);
}






