// javascript part 3 : String method 
 

//  str.trim()  function

let msg="  hello  ";

console.log(msg);
console.log(msg.trim());


let msg1=prompt("Enter your password");
console.log(msg1);
console.log(msg1.trim());


// string is immutable in javascript


let msg2="     appna    ";

console.log(msg2); // original
console.log(msg2.trim());// new copy after trimming
console.log(msg2);// again original


//  String Method : 
// str.toUpperCase and str.toLowerCase


let str="Random Strings";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let  str1="Error";

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());



// String method with Arguments


//  indexOf   : provide the index of the first occurances of that ;

 let msg3="ILoveCoding";
  
 console.log(msg3.indexOf("L"));
 console.log(msg3.indexOf("c"));
 console.log(msg3.indexOf("Love"));
  console.log(msg3.indexOf("Z"));


//  Method Channing  
// -> method added to method

let msg4="  hello Hi ";


 console.log(msg4);
console.log(msg4.toUpperCase().trim());// method channing
 console.log(msg4);


 //Slice method 
 // form Start index to  final index

let  msg5="ILoveCoding";

console.log(msg5.slice(3));// starting fromm 3 to last
console.log(msg5.slice(2,4));// start and end index
console.log(msg5.slice(4,msg5.length));
 
console.log(msg5.slice(-3));//11-3=8 so ing


// repalce() and repeat() method

let  msg6="ILoveCoding";

console.log(msg6); 
console.log(msg6.replace("Love","do"));
console.log(msg6.replace("Coding","Programming"));
console.log(msg6);


let  msg7="appnaappnaappna";

console.log(msg7); 
console.log(msg7.replace("appna","college"));




let msg8="Mango";
console.log(msg8.repeat(3));// repeat three times


// practice Questions

// 1..
let msg9="help!";
console.log(msg9.toUpperCase().trim());


// 2..prdedict

let name="ApnaCollege";

console.log(name.slice(4,9)); //Colle
console.log(name.indexOf("na")); //2
console.log(name.replace("Apna","Our"));//OurCollege

// console.log(name.slice(4,9).indexOf("na"));


// 3.......

console.log(name.slice(4));
let r= name.slice(4).replace("l","t").replace("l","T");// Method channing
console.log(r);
console.log(r.replace("l","t"));
   



// Arrays data structure


// String data type 
let student=["Ritesh", "Mandil","Rupesh","sitanandan"];
console.log(student);
console.log(student[3]);


// number type data structure
let num=[2,4,6,8];
console.log(num);
console.log(num[0]);
console.log(num[3]);
console.log(num[4]);// undefined

console.log(num.length);// 4
console.log(typeof num); // Object



//  number type data structure
let  score=[44,88.34,99,54];
console.log(score);
 

// mixed type array data structure
let info=["aman",33,2.2];
console.log(info);


//  empty array
let newArr=[];
console.log(newArr);


//  empty array with initialization later
let newArr1=[];
newArr1[0]="Aman";
newArr1[1]=11;
newArr1[2]=22.3;
console.log(newArr1);
console.log([].length);


let arr=["shradhaa" ,22, 222.09];
console.log(arr[0][2]);
console.log(arr[0].length);


// Arrays are mutable   


// string are immutable 
let name1="rohit";
 console.log(name1[0]="tohit");
 console.log(name1);

// arrays

let fruits=["mango", "apple", "Litchi"];
console.log(fruits);

console.log(fruits[0]="banana");
console.log(fruits);
console.log(fruits[10]="papapya");
console.log(fruits); // all
console.log(fruits.length);// 11
console.log(fruits[8]);// unndefined 




//  array methods

let cars=["audi", "BMW","XUV","Maruti"];

//  push -> addd to last
console.log(cars);
console.log(cars.push("Toyata"));
console.log(cars);

//  pop -> delete from end and print it

console.log(cars.push("Ferrari"));
console.log(cars);
console.log(cars.pop());
console.log(cars);


//  shift 

let car1=["audi", "BMW","XUV","Maruti"];
console.log(car1.unshift("ferrari"));
console.log(car1);
console.log(car1.shift());


// bocling in instagram

let follower=["A","B","C"];
let blocked=follower.shift();

console.log(follower);
console.log(blocked);


//  practice Questions
  

// (4) ['july', 'june', 'march', 'august'] end

let  month=["january", "july","march","august"];// start
console.log(month);
console.log(month.shift());// january
console.log(month.shift());

console.log(month.unshift("june"));//3
console.log(month);
console.log(month.unshift("july")); //4



//  array Methods


// indexOf() : return index of sommething
let primary=['red','yello','blue'];

console.log(primary.indexOf("red"));//0
console.log(primary.indexOf("blue"));//0
console.log(primary.indexOf("Red"));//-1
console.log(primary.indexOf("gree"));//-1


// includes() : search  for a value;

console.log(primary.includes("red"));// true
console.log(primary.includes("Red"));// false
console.log(primary.indexOf("green"));//false

//  concat() : concate two array

let secondary=["Orange","green","violet"];
let teritary=primary.concat(secondary)
console.log(teritary);

let tert=secondary.concat(primary);
console.log(tert);

console.log(primary);// No change here in original
console.log(secondary); //No change here in original


//reverse() : reverse an array

console.log(primary.reverse());
console.log(secondary.reverse());


// slice() :copies a portion of an array

let colors=["red", "yellow","blue","orange","pink","white"];

console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,5));
console.log(colors.slice(-2));
console.log(colors.slice(9))//empty box

// splice() : removes /replaces /add elements in place

console.log(colors.splice(4));// from 4 to all : splice or slice
console.log(colors);// change in  original array

console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.push("helo"));
console.log(colors);
console.log(colors.splice(1,2));
console.log(colors);

console.log(colors.splice(0,1,"morron","grey"));// removing and adding morron and gren at 0 position
console.log(colors);

console.log(colors.splice(1,0,"kk","iiii"));// placed kk and iii in between at index 1
console.log(colors);


console.log(colors.splice(1,1,"Gwagnor"));
console.log(colors);

console.log(colors.splice(1,3,"kill","grams"));
console.log(colors);


// sort() : sort the array

let day=["sunday","monday","tuesday","wednesday"];
console.log(day.sort());
console.log(colors.sort());

let char=["r","w","b","a","f"];
console.log(char.sort());


// not sortig possible here -> discrepencies here
let num1=[11,2,33,2,11,5];
console.log(num1.sort()); 


// practice Questions

//change using the splice 
let mnth=['january','july','march','august'];

console.log(mnth);
console.log(mnth.splice(0,2,"july","june"));
console.log(mnth);


//reverse and indexOf  of index 
let  arr1=["c",'c++','html','javascript','python','java','c#','sql'];

console.log(arr1);
console.log(arr1.reverse().indexOf("javascript"));



//  Array Refenrences

// for string
console.log("name"=="name");// true
console.log("name"==="name");// true

// for array
console.log([1]==[1]);// falss



let arr2=['a','b'];
let archy=arr2;
console.log(arr2===archy);// true : smae reference variable
console.log(arr2==archy);// true
 
console.log(archy.push("c")); // a b c
console.log(arr2);// a b c
console.log(arr2.pop());
console.log(archy);
 

// constant array

const g=10;
console.log(g);

const m=[1,2,7,3];
console.log(m);

let arr3=m;
console.log(arr3);// posible 

// m=[2,2,4]; // this means giving new refererence (address) 
// console.log(m);// Not posssible 



// Nested arrays

let nums=[[2,4],[3,6],[4,8]];
console.log(nums);

console.log(nums[0]);
console.log(nums[0][0]);
console.log(nums[0][1]);
console.log(nums[0].length);
 

//  pratice Questions

let tictoc=[["x",null,"0"],[null,"x",null],["0",null,"x"]];

console.log(tictoc);
tictoc[0][1]="0";
console.log(tictoc);


//  javascript (part 3 ) 
//  practice Questions

// JavaScript program that gets the first n elements of an array:


let array=[7,9,0,-2];
let n=3;

console.log(array.slice(0,n));

// JavaScript program to get the last n elements of an array:

console.log(array.slice(-n));


// JavaScript program to check whether a string is blank or not:


let p="ram";
console.log(p.length);

  if(p.length==0){
     console.log("blank");
  }else{
     console.log("filled");
  }

  // vaScript program to test whether the character at a given index is lowercase:

let str2="helloRummer";
let  idx=6;//u

if(str2[idx]==str2[idx].toLowerCase){
  console.log("character is at lower case");
}else{
  console.log("character is not at lowercase");
}


// JavaScript program to strip leading and trailing spaces from a string:

let  input="  hello World!  ";
console.log(input);
console.log(input.trim());


// JavaScript program to check if an element exists in an array or not:

let arr4=[1,2,3,5,2];
let element=3;

 if(arr4.includes(element)){
   console.log(true);
 }


