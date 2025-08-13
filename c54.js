// question 1
let para1=document.createElement("p");
para1.innerText="hey I am red!";

document.querySelector("body").append(para1);
para1.classList.add("red");


// question 2
let h3=document.createElement("h3");
h3.innerText="i am blue h3!";

document.querySelector("body").append(h3);
h3.classList.add("blue");


// questions 3

let div=document.createElement("div");

let h1=document.createElement("h1");
let p=document.createElement("p");

h1.innerText="i am in a Div";
p.innerHTML="ME TOO!";


div.append(h1);
div.append(p);
div.classList.add("pink");

document.querySelector("body").prepend(div);