//Ways to print in Javascript
//Javascript console API
// alert("me");
// document.write("This is document write");
// 2) 3 logs
// console.warn("This is warning");
// console.error("This is an error");
// console.log("Hello World", 4+10, "another log");

//3. Javascript Variables
// What are variables? containers to store data values
var number1 = 32;
var number2 = 56;
// console.log(number1+number2);

// 4. Dataa Types in javascript
//Numvbers
var num1 = 455;
var num2 = 56.76;
//string
var str1 = "This is a string";
var str2 = "This is also a string";
//Objects
var marks = {
  golu: 32,
  molu: 40,
  patlu: 50,
};
//Booleans
// var a = true;
// var b = false;
//undefine or null
// var und = undefined;
// var und;
//null
// var n = null;

//At a very high level, there are two types of datatypes in javascript
// 1. primitive data
// 2. Reference
// var arr = [1,2,3,'hello',5];

//operators in javascript
//Arithmetic operators
// var a = 34;
// var b = 56;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a / b is ", a/b);
//Assignment operators
// var c = b;
// c+=2;
// console.log(c);
// c-=2;
// console.log(c);

// c/=2;
// console.log(c);

//comparision operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

//Logical Operators
//logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
//Logical OR operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

//logical Not
// console.log(!false);
// console.log(!true);

//functions in javarscript

function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
c1 = avg(4, 6);
c2 = avg(14, 6);
// console.log(c1);
// console.log(c2);

// conditionals in javascript
/*
var age = 25;
if(age > 32){
    console.log('you are not a kid');
}
else if (age > 26) {
    console.log('Bacche nahi rahe');
}
else if (age > 22) {
    console.log('YesBacche nahi rahe');
}
else if (age > 26) {
    console.log('18 Bacche nahi rahe');
}
else {
    console.log('end of ladder');
}
*/

var age = 5;
if (age > 16) {
  console.log("a person has done matriculation");
} else if (age > 19) {
  console.log("a person has done intermediate education");
} else if (age > 23) {
  console.log("a person has done graduation");
} else if (age > 26) {
  console.log("a person has done post graduation");
} else {
  console.log("a person belongs from other planet");
}

//Arrays
// console.log(arr);
// for (var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// });
// let j=0;
// const a=0;
// a = a+1;
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }
//do while loop

// let j = 2;
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// console.log(arr);

// console.log(a,b);

// console.log(und);

// console.log(n);

// console.log(marks);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// };
let myArr = ["fan","camera",34,null,true];
//Array Methods
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("hassan");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// // const newLen = myArr.unshift("Hassan");
// // console.log(newLen);
// console.log(myArr.toString());
// console.log(myArr.sort());

// String methods in Javascript
let myLovelyString = 'Harry is a good boy good good good';
// console.log(myLovelyString.length);
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(1,5));
// console.log(myLovelyString.replace("Harry", "Hassan"));
// console.log(myLovelyString.replace('good','bad'));
let myDate = new Date();
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);
// console.log(elem.innerHTML);
// console.log(elem.innerText);


let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");

// elem[0].innerHTML;
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// Get Elements by Tag Name
// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement2 = document.createElement('b');
// createdElement.innerText = 'This is a created para';
// createdElement2.innerText = 'This is a created bold';
// tn[0].appendChild(createdElement);

// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element);   
// Removes an element
// document.title
// Selecting using Query
sel = document.querySelector('.container');
// console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);

function clicked(){
  // console.log('The button was clicked')
}
window.onload = function (){
  // console.log('The docuemnt was loaded')
}
//Events in javascript
// firstContainer.addEventListener('click',function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked<b>"
//   console.log('clicked on container');
// })

// firstContainer.addEventListener('mouseout',function(){
//   console.log('Mouse out container');
// })

// firstContainer.addEventListener('mouseup',function(){
//   console.log('Mouse up when clicked on container');
// })
// firstContainer.addEventListener('mousedown',function(){
//   console.log('Mouse down when clicked on container');
// })
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//   document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//   console.log('Mouse up when clicked on container');
// })
// firstContainer.addEventListener('mousedown',function(){
//   document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked<b>"

//   console.log('Mouse down when clicked on container');
// })
//Arror functions
// function summ(a,b){
//   return a+b;
// }
summ = (a,b) =>{
  return a+b;
}
logKaro = ()=> {
  document.querySelectorAll('.container')[1].innerHTML = "<b>set interval Fired<b>"
  console.log("I am your log");
}
//Set Timeout and Set Interval

// setTimeout(logKaro, 2000);
clr = setInterval(logKaro, 2000);
//Set timeout
//use clearInterval(clr)/clearTimeout(clr) to cancenl setInterval/setTimeout


//Javascript Local storage


//JSON
obj = {name: "hassan", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse(`{"name":"hassan","length":1,"a":{"this":"tha\"t"}}`);
console.log(parsed);




















