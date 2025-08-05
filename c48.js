// Guessing Game(classwork)
// User enter a max number and then tries to guess a random generated nummber between 1 to max;
 

// const max=prompt("Enter a max number");

// const random = Math.floor(Math.random()*max)+1;

// let guess=prompt("guess your number :");

// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//     break;
//     }

//     if(guess==random){
//         console.log("Yes, you are right. Congrats! your random value was " +random);
//       break;
//     }else if(guess<random){
//        guess=prompt("guess is smaller. Increase your number:");
//     }else if(guess>random){
//     guess=prompt("guess is larger . try with smaller than guess");
//     } 
// }


//  JS(Part5)Practice Questions
//1..JavaScript that generates a random number between 1 and 6, simulating a dice roll:

let dice=Math.floor(Math.random()*6)+1;
console.log("You rolled a :"+ dice);


// 2..object creation for the car with its properties

const car={
     name:["hero","honda"],
     model:120,
     color:"red"
};

console.log(car.name);

// create an object person with their name ,age ,city

const Person={
     name:"Gitesh",
     age:["11",22],
     city:"delhi"
};

console.log(Person.city="Ney York");
console.log(Person.country="USA");
console.log(Person);
