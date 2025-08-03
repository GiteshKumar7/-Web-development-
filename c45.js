
//JavaScript program to delete all occurrences of an element 'num' in a given array:
// ifarr=[1,2,3,4,5,6,2,3] & num=2 
// Result should be arr=[1,3,4,5,6,3]

let arr=[2,3,5,3,2,6,2];
let num=2;

console.log(arr);
for(let i=0; i<arr.length;i++){
    if(arr[i] ==num){
        arr.splice(i,1);
           i--;
    }
}
console.log(arr);


// JavaScript program to find the number of digits in a given number:
// Example:ifnumber=287152,count=6


let number=287152;
let count=0;

let copy=number;

while(copy>0){
  copy=Math.floor(copy/10);
  count++;
}


console.log(count);


// JavaScript program to find the sum of digits in a number
// number=287152,sum=25


let sum=0;
while(number !=0){
  
    sum+=number%10;// get last
    number=Math.floor(number/10);// removes last
}

console.log(sum);

// JavaScript program to print the factorial of a number n

let n=prompt("enter a number n");

let fact=1;
for(let i=1; i<=n; i++){
  fact *=i;
}

console.log(`factorial of ${n} : ` + fact );


// javaScript program to find the largest number in an array that contains only positive numbers:

let arr1=[22,21,44,22,29];
let maxi=arr1[0];

for(let i=0; i<arr1.length;i++){
    if(arr1[i]>maxi){
        maxi=arr1[i];
    }
}

console.log(`the maximum in an array ` + maxi);

