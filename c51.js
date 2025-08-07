//this with arrow functions

  const student ={
    name:"gitesh",
    marks:95,
    prop:this, //global scope
     getName : function() {
        console.log(this);
        return this.name
    },

    getMarks: ()=>{
        console.log("this");// parent's scpe-> window
        return this.marks;
    },

    getInfo1: function(){  
       setTimeout(()=>{     // arrow function
        console.log(this); // studnet
    },2000);
    },

    getInfo2: function(){
        setTimeout(function(){ //normal function
            console.log(this);
        },2000);
    },


  };

console.log(student);
console.log(student.prop);
console.log(student.getName());
// console.log(student.getMarks());//not work;
console.log(student.getInfo1());

console.log(student.getInfo2());


// practice Questions

// square fa number "n"

let square=(n)=>{
   return n*n;
}
console.log(square(8));


// another way
const sq= n =>n*n;
console.log(sq(11));


// write a fuction that  prints "hello World" 5times at intervals of 2s eac


let id=setInterval(()=>{
    for(let i=0; i<5; i++){
         console.log("hello worls!");
    }
},2000);


setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval ran");
},10000);

// simple arrow function in JavaScript named arrayAverage that accepts an array of numbers and returns the average:
// using thte 

const  arrayAverage=(arr)=>{
   if(arr.length==0){
    return 0;
   }
   const sum=arr.reduce((acc,curr)=>acc+curr,0);
   return sum/arr.length;
}

//  Product of an array

const  arrayAverage1=(arr)=>{
   if(arr.length==0){
    return 0;
   }
   const sum=arr.reduce((acc,curr)=>acc*curr,1);
   return sum;
}

let  arr=[22,33,11];
console.log(arrayAverage1(arr));//

//simple arrow function named isEven() that checks if a number is even:

let isEven =(n)=>{
  return (n%2==0);
}

console.log(isEven(2));
console.log(isEven(22));
console.log(isEven(55));


// predict the output

const object = {
  message: 'Hello, World!',
  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000);//undefined


