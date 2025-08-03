
// Javascript part 4

// loop 

//  for loop :forward 
for(let i=0; i<4; i++){
    console.log(i);
}

// for loop : backward : odd number
for(let i=10; i>=0;i=i-3){
    console.log(i);
}

let i=99;
console.log(i);


//  for even number
for(let i=2; i<=10; i=i+2){
 console.log(i);
}

for(let i=10; i>=2;i=i-2){
    console.log(i);
}


//  infinite loops 

// for(let i=0; ;i++){
//     console.log(i);
// }


// print the multiplication table for any number n

//  let n=prompt("Enter your number :");
//  n=parseInt(n);

//  for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
//  }


let n =5;
for(let i=1; i<=10; i++){
    console.log(i*n);
}


// Nested for loop

for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`)
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}



// while loop
let m=2;
while(m<=8){
    console.log(m);
    m=m+4;
}

//oddd
let l=1; 
while(l<=20){
    console.log(l);
    l=l+2;
}


//even
let j=2; 
while(j<=20){
    console.log(j);
    j=j+1;
}


// checking the favorite movie whether it is or not

const favorite="avatar";
 let guess=prompt("Guess Your favorite movie :");

while(guess!=favorite){
   if( (guess==="quit")){
         console.log("you quit");
         break;
   }
    guess=prompt("wrong guess, Please try again");
}

if(guess==favorite){
 console.log(favorite);
}


// break keyword

let g=1;
while(g<=9){
    console.log(g);
    if(g==5){
       break;
    }
    g++;
}


// loop with arrays
let fruits=["mango","apple","banana","litchi","orange"];


//  printinng from begning
for(let i=0;i<fruits.length; i=i+2){
    console.log(i,fruits[i]);
}

// printing from last
for(let i=fruits.length-1;i>=0; i=i-2){
    console.log(i,fruits[i]);
}


// Nested loop with nested array

let heroes=[["ironman","spiderman","thor"],["superman","wonder-women","flash"]];
console.log(heroes);


for(let i=0; i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
}

for(let i=0; i<heroes.length;i++){
    console.log(`list ${i}`);
    for(let j=0; j<heroes[i].length;j++){
        console.log(`j=${j} `+ heroes[i][j]);
    }
}


let student=[["aman",88],["shradha",99]];
console.log(student);

for(let i=0; i<student.length; i++){
    console.log(`info of student i=${i} `)
    for(let j=0; j<student[0].length;j++){
        console.log(`j=${j} ` + student[i][j]);
    }
}



// for of loop

let Fruits=["apple","mango","litchi","banana","Orange"];

for( frts of Fruits){
   console.log(frts);
}

//  printing all the character;
for(char of "appna_collge"){
    console.log(char);
}


// above initialized variables
for(list of heroes){
    for(hero of  list){
          console.log(hero);
    }
    // console.log(list);
}



