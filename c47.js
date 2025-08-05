
//  Js object literals
let student= {
   name:"ram",
   age:"111",
   marks:9
};
console.log(student);


// Array 
let student1=["shraddha",22,2.9];
console.log(student1);  


const item={
    price:100.99,
    discount:19,
    colors:["pink","red"] //array inside js object literals
};
console.log(item);



//  twitter / Thread post creation using js objeect  literals

const post={
    username:[ "Gitesh Kumar"],
    content: "teaching",
    likes:200,
    reposts:20,
    tags:["shyam","kalash","hira"]
};

console.log(post);

//  Get values  
console.log(post["likes"]);
console.log(post.likes);
console.log(post["tags"]);
console.log(post.username);

let tagi="tags";
console.log(post[tagi]);


//  Conversion in get values
// automatically convert reserved keys into string format

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
   undefined:"e"
};

console.log(obj);
console.log(obj[1]);
console.log(obj[undefined]);


//  add and update Value

const student2={
  name :"Gitesh",
  age:22,
  marks:98.9,
  city:"delhi"
};

console.log(student2);

// updation
student2.city="Mumbai";
console.log(student2.city);

// addition
console.log(student2.gender="male");

// updation
student2.marks="A"; // number change into string 
console.log(student2.marks);

student2.marks=["A","B","c"]; // number change into array of three subjects 
console.log(student2.marks);

console.log(student2);

console.log(delete obj.age);

// object of objects(Nested Objects)

const classInfo ={
    aman:{
      grade:"A",
      city:"Delhi"
    },

     man:{
      grade:"C",
      city:"UT"
    },

     amn:{
      grade:"G",
      city:"krn"
    },

    karan:{
        grade:"B",
        city:"kahirabnni"
    }

};

console.log(classInfo);

//  for karan
console.log(classInfo.karan);
console.log(classInfo.karan.city);
console.log(classInfo.karan.grade=["L","K"]);
console.log(classInfo.karan.city="Gurgoin");
console.log(classInfo.karan);

console.log(classInfo.aman);


// Array of object


const  info=[
    {
         name:"Aman",
         city:"delhi",
         grade:"A+"
    },

       {
         name:"Amna",
         city:"mirzapur",
         grade:"C+"
    },

       {
         name:"Amna",
         city:"Rameshwaram",
         grade:"B+"
    }
];


console.log(info);


// Accessing  
console.log(info[0].name);
// updation
console.log(info[0].city=["hyderabad","pune"]);
console.log(info[0].grade=99);

// addition
console.log(info[0].gender="Male");

//  deletion
console.log( delete info[0].name);

console.log(info[0]);
console.log(info);



//  Math object


console.log(Math);

// example
console.log(Math.PI);
console.log(Math.E);

console.log(Math.pow(2,3));// power of a is b
console.log(Math.abs(-5));// absolute
console.log(Math.floor(2.4222222));
console.log(Math.ceil(4.3));
console.log(Math.random());


//  javascript program to get Random number between 1 to 10

let num= Math.random();
num =num*10;// similary for between 10 to 100
num=Math.floor(num);
console.log(num+1); // to get 10 previously(0-9) 

//  (OR code) in one line
console.log(Math.floor(Math.random()*10)+1);


//  Random Integer between 1 to 100
console.log(Math.floor(Math.random()*100)+1);


//  Random Integer between 1 to  5
console.log(Math.floor(Math.random()*5)+1);


// Random Interger Number netweeen 21 to 25
console.log(Math.floor(Math.random()*5)+21);

// Guessing Game
// User enter a max number and then tries to guess a random generated nummber between 1 to max;
 

