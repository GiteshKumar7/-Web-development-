
// Selecting elements

//1.........getElementsByClassName

// let smallImages=document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i]);// directories
//       console.dir(smallImages[i].src);// source
//     smallImages[i].src="spiderman.webp";
//     console.log(`value number ${i} is changed`);
// }


// Query selectors

// For normal selector 
console.dir(document.querySelector('h1'));

//for all h1 selector
console.dir(document.querySelectorAll('#description'));

// for id selector
console.dir(document.querySelector('#description'));

//for class
console.dir(document.querySelector('.oldImg'));

//  nesting of query selectors
console.dir(document.querySelector("div a"));

// all <a> tag inside div
console.dir(document.querySelectorAll("div a"));

 
//  changing the color of the anchor tag 

let links =document.querySelectorAll(".box a");

for(let i=0; i<links.length; i++){
    links[i].style.color="green";
}

// using for each loop
for(link of links){
    link.style.backgroundColor="yellow";
}








