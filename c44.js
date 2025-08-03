// Todo App

let todo=[];
let req=prompt("please enter your request");
// console.log(req);

while(true){
    if(req=="quit"){
     console.log("quiting the app");
     break;
    }

    if(req=="list"){
       console.log("______");
           for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
           }
      console.log("______");
 }else if(req=="add"){
    let task=prompt("Enter your the task you want to add");
    todo.push(task);
    console.log("added sucessfully");
 }else if(req=="delete"){
    let idx=prompt("Enter your task you want to delete");
    todo.splice(idx,1);
    console.log("task deleted");
 }else {
     console.log("wrong request");
 }
 req=prompt("please enter your request");

}