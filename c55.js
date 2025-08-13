// practice question number 1 & 2

let input= document.createElement("input");
input.type="Text";
input.placeholder="username";

let  button=document.createElement("button");
button.innerText="click me";
button.id="btn"

document.querySelector("body").append(button);
document.querySelector("body").append(input);

// qtns 4

let h1=document.createElement("h1");
h1.innerText="DOM Practice";

h1.classList.add("line");
document.querySelector("body").append(h1);


// 5

let pa=document.createElement("h1");
pa.innerHTML="Appna college <b>Delta</b> batch practice";

pa.classList.add("paa");
document.querySelector("body").append(pa);












