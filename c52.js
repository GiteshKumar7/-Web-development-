
let arr=[1,2,3,4,5];

arr.forEach(function(el){
    console.log(el);
})

// Or
    
// let print=function(el){
//     console.log(el);
// }
//  arr.forEach(print);


 console.log(" ");
//  for arrrow functions 
arr.forEach((el)=>{
    console.log(el);
})


//  Array of objects
let student=[ {
        name:"ram",
        age:22
     },
     {
        name:"shyam",
        age:23
     },
     {
        name:"manish",
        age:25
     }
  ];
console.log(student);

// forEach Methods
student.forEach((el)=>{
    console.log(el);
   console.log(el.age);
    console.log(el.name);
});

// using map funnction
let gpa=student.map((el)=>{
   return el.age*10;
});

console.log(gpa);



// Map methods

let num=[33,22,44];

// multipple of array 2 times
let double=num.map((el)=>{
    return el*2;
})
console.log(double);


// multipple of array 3 times
 console.log(" ");
let double1=num.map(function(el){
    return el*3;
})

console.log(double1);


//  without return type having same length
let double2=num.map(function(el){

})
console.log(double2);


// filter()

let num1=[2,4,2,5,7,8,1,9];

let even=num1.filter((num)=> {
    return num%2==0
});
console.log(even);

//  odd number
let odd=num1.filter((num)=> {
    return !(num%2==0);
});
console.log(odd);


//  condtion for number less than 5
let lessThan=num1.filter((num)=>{
    return num<5;
})
console.log(lessThan);


// Every() --> true or false after applying to each of elemnts in functions


console.log([1,2,3,4,].every((num)=> num%2==0));
console.log([12,2,8,4,].every((num)=> num%2==0));

// some() : just like Logically Or

console.log([1,2,3,4,5].some((num)=>num%2==0));
console.log([1,3,5].some((num)=>num%2==0));

// reduce() funtion

//example 1......
let num3=[1,2,3,4];
let finval=num3.reduce((acc,el)=> acc+el);
console.log(finval);

console.log("  ");

// example.............2
let num4=[1,2,3,4];
let finva=num3.reduce((acc,el)=>{
     console.log(acc);
    return  acc+el
} );
console.log(finva);


console.log(" ");
//  another example of reduce() function

//without reduce() function
let nums=[1,4,2,5,6,7,2,9,2];
let max=-1;

for(let i=0;i<nums.length; i++){
    if(nums[i]>max){
        max= nums[i];
    }else{
        
    }
}
console.log(max);

// using reduce() function
let maxRes=nums.reduce((res,el)=>{
     if(res<el){
        return el;
     }else{
        return res;
     }
})
console.log(maxRes);



//  practice questions
// 1....check if all numebr in our array are multiple of 10 or not

let numss=[11,22,10,20,30];
let mul_of_10=numss.every((el)=> el%10==0);
console.log(mul_of_10);

// one line code for the above
console.log([11,22,10,20,30].every((el)=> el%10==0));


//  2....create a function to find the min number in an array

function getMin(numss){
   let minArr=numss.reduce((res,el)=>{
   if(el<res){
    return el;
   }else{
   return  res;
   }
 });
return minArr;
}

console.log(getMin(numss));


//  default parameters
//1....
function sum(a,b=3){
   return a+b;
}
console.log(sum(2));

//2....

// Not possible : get NaN as answer
function snap(a=2,b){
  return a+b;
}
console.log(snap(1,2));//3
console.log(snap(1));//NaN


// Spread

// for array
let arr4=[3,2,5,3,7,9,0,22,4,];
console.log(Math.min(...arr4));//min vlaue
console.log(Math.max(...arr4));// max value

console.log(...arr4);

// for string
let a="Appna collge";
console.log(...a);// alag alag



//  spread with Array literals

let arr1=[1,2,3,4,5]; 
let newArr=[...arr1];// spread into the newArr
console.log(newArr);//


// in  string
let char=[..."hello"];
console.log(char);


// joining of two spread : joining of two array
let odd1=[1,3,5,7];
let even1=[2,4,6,8];

let nums1=[...odd1, ...even1];// first odd and then even printed in spread format
console.log(nums1);

let nums2=[ ...even1,...odd1];//even then odd in order
console.log(nums2);

// spread with object Literals


let data={
    email:"krgitesh1004gamil.com",
    password:"abcd"
};

let dtaCopy={...data, id:11, country: "Nepal"};
console.log(dtaCopy); 


// Indexing  in array
let arr5=[1,2,4,6,7,8];
let obj1=[...arr5];
console.log(obj1);

// indexing in string
let obj2=[..."hello"];
console.log(obj2);


//  rest -> collect all funnction int one as arguments

function sum(...args){
  //arguments 
  for(let i=0;i<args.length; i++){
    console.log("You gave us :" +args[i]);
  }
}
console.log(sum(2,5));
console.log(sum(3));
console.log(sum(3,2,8,5));
 
//  2........
function min(){
   console.log(arguments);// yes 
   console.log(arguments.length);// yes
  // arguments.push(-1);// No -> ist not a function its a collections
}
min(2,3,5);

// 3.....

// function sum(){
//      return arguments.reduce((sum,el)=>sum+el);
// }
// let arr6=[9,8,5,6,1,4,2,6];
// console.log(sum(arr6));//arguments is not a function


function sum(...args){
     return args.reduce((sum,el)=>sum+el);
}
// let arr6=[9,8,5,6,1,4,2,6]; //not of use
//arguments is not a function
console.log(sum(9,8,5,6,1,4,2,6));// give directly value taken
console.log(sum(3,2,3,4));


//  min value;
function min(...args){
   return args.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
   })
};
console.log(min(4,33,2,1,5));

// same code with msg parameter come before args
function min(msg,...args){
    console.log(msg);
   return args.reduce((min,el)=>{
    if(min>el){
        return el;
    }else{
        return min;
    }
   })
};
console.log(min("Gitesh",4,33,2,1,5));//Gitesh and 1 (output)
console.log(min(4,33,2,1,5)); // 4 and 1 (output)


// Destructuring 
// -> storing the values of the array into differnt variable
 

let names=["tony","bruce","peter","steve","abc","xyz","pqu"];

//  traditional way 
// let winner=names[0];
// let runnerup=names[1];
// let secondRunnerup=names[2];

//  new concept: Destructuring
let [win,run]=names;
console.log(win);

let [winner,runnerup,...other]=names;
console.log(winner);// tony
console.log(runnerup);//bruce
console.log(other);// remaining all other array value 

 
// destructuring in objects

const student1={
    name:"karan",
    age:11,
    class:9,
    subject:["Math","science","chemistry"],
    username:"karan@1004",
    password:"abcd",
    city:"pune"
}

// traditional ways
// let  username=student1.username;
// console.log(username);
// let password=student1.password;
// console.log(password);


// new : Destructuring with objects  

// use same key name in destructuring as mentioned in object(key: value)
// let {username,password}=student1;

// Or

//  In case of different name for storing
let { username:user,password ,city:place="Noida"}=student1;// default city: Noida

console.log(user);//karan@1004
console.log(secret);//abcd
console.log(place);// pune if otherwise "Noida" default



















