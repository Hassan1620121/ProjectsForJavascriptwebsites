// console.log('Hello World');

//Section 3 values and variables ***/

// var myName = 'Hasan Sial';
// var myName = 26;
// console.log(myName);

// var myName = "Hassan";
// var myAge = 26;
// console.log(myName);
var iAmThapa = true;
// console.log((iAmThapa));
// console.log(typeof(iAmThapa));
// console.log(10+"20");
// console.log("java"+"Script");
// console.log(" "+" ");
// console.log("vinod"-"thapa");
// console.log(true+true);
// console.log(true+false);
// console.log(false+true);
// console.log(false-true);
// console.log(9-"5");
// console.log("This is "-"5");
// console.log(false-true);
// Difference between null and undefined?
// var iAmUseless = null;
// var iAmStandBy;
// console.log(typeof(iAmStandBy));
// console.log(typeof(iAmUseless)); //2nd Bug

// var myPhoneNumber = 923015337280;
// var myName = "Hassan";
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone number");
// }

// console.log(NaN==NaN);
// console.log(Number.NaN ==NaN);
// console.log(isNaN(NaN));

//Expressions and 
// console.log(5+20);
// var x = 20;
// var y = 20;
// console.log(20+34);

// console.log( x==y);

//Arithemtic Operators

//Either literals or variables as their operands and return a single numerical value.
// console.log(3+3);
// console.log(3*3);
// console.log(3/3);
// console.log(3*3);
// console.log(3-3);

//Comparison Operators
//Comparison Operators
//Increment and Decrement Operators
//++ -- or --x 
// var num = 15;
// var newNum = ++num ;
// console.log(num);
// console.log(newNum);
// var num = 15;
// var newNum = --num + 5; //jnum-1 +5
// console.log(num);
// console.log(newNum);

//postfix and prefix


// comparison operator . 
// comparison operators compares its opeands and returns a logicl value bsed on whethere the comprison its tru

// var  a= 50;
// var b = 40;
// console.log(a==b);
// console.log(a!=b);

// console.log(a>=b);

//Logical Operators

// console.log((a<b) && (b>0) ||(b<0));

// console.log (!((a>0)||(b<0)));
// console.log(!false);
// console.log(!true);

//Concatination operators
// concatination operator concatenates two string values together.concatenates
//returning antoher string that is the union of the two operand strings

// console.log("Hello World");
// console.log("hello "+"world");

// var myName = "vinod";
// console.log(myName + " thapa");
// console.log(myName + " bahadur");


//Conditional and ternry operators

// console.log(3**3);  //3*3*3*3
// console.log(4+"four");
// console.log(10 ** -1);

//Sol2:
// console.log(5-"thapa");

// var a = 5;
// var b = 10;
// output b=5;a=10


// var c = b; //c=10
// b = a;
// a = c;
// console.log("the value of a is " +a);
// console.log("the value of b is " +b);


// sol 4: 
var a = 5;
var b = 10;

a = a+b;  //a = 15
b = a-b; //b = 5;
a = a-b //a =10;

// console.log("The value of a is " +a);
// console.log("The value of b is " +b);


//Sol
// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1==num2);
// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1===num2);

//Control statement and loops

// Conditional ternary operators 
// if else
// switch statement 
// while loop 
// dowhile loop 
// for loop 
// for in loop  
// for of loop  
// conditional ternary operator

// if raining = raincoat
// else no raincoat

// var tomr = "sunny";
// if (tomr == "rain") {
//     console.log("Take a raincoat"); 
// } else {
//     console.log("No need to take raincoat");
// }

// var year = 2021;
// debugger;
// if(year % 4 ===0){
//     if(year%100 ===0){
//             if (year %400 ===0) {
//                 console.log("The year " + year + "is a leap year");
                
//             } 
//             else 
//             {
//              console.log("The year " + year + "is not a leap year");
            
//              }

//     }
//     else{
//         console.log("The year " + year + "is a leap year");
        
//     }
// }
// else{
//     console.log("The year " + year + "is not a leap year");
// }

//Truthy and falsy values in javascript
// var scores = 0;
// if(undefined){
//     console.log("We lost the game");
// }
// else{
//     console.log("We won the game");
// }


// 0 undefined, null  NaN, false are falsy 


//Ternary Operators

//What is ternary operator
//three operands
// 5+20; 
// let age = 18;
// if(age>=18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote");
// }

//Find the ara of circle, traiangle and rectangle
// console.log((age>=18)? "You are eligible to vote":"You are not eligible to vote");

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// area = circle 
// var area = "square";
// var PI = 3.142,l = 5, b=4, r=3;
// if(area == "circle"){
//     console.log("The area of the cricle is> "+ PI*r**2);
// }
// else if(area =="tiangle"){
//     console.log("The area of the triangle is "+ (l*b)/2);
// }
// else if(area =="rectangle"){
//     console.log("The area of the rectangle is> "+ (l*b));
// }
// else{
//     console.log("please enter a valid data");
// }

// var area = "triangle";
// var PI = 3.142,l = 5, b=4, r=3;
// switch (area) {
//     case 'circle':
//         console.log("The are of circle is "+ PI*r**r);
//         break;
//     case "triangle":
//         console.log("The area of triangle is "+ (l*b)/2);
//         break;
//     case "rectangle":
//         console.log("The area of rectangle is "+(l*b));
//         break;
    
//     default:
//         console.log("Please enter a valid data");
//         break;
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
//blok scope
var num = 11;

//block scrope
// while(num<=10){
//     console.log(num);
//     num++;
// }

//do while loop statement
// do {
//     console.log(num);
//     num++;
// } while (num<10);
// array = [1,2,3,3,4,56,7,8,]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }

// for (let name = 0; name < 100; name++) {
//     // const element = i;
//     debugger;
//     console.log(name);
    
// }


// for (let i = 0; i < 11; i++) {
//     // const element = array[1];
//     var tableof = 9;
//     console.log(tableof + " * " +i + " = " + tableof*i);
    
// }

//Javascript function is a block of code designed to perform a particluar task
//

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function sum() {
//     var a = 10, b= 20;
//     var totals = a+b;
//     console.log(totals);
   
    

// }
// sum();

// difference between function parameters and function arguments

// function sum(a,b){
//     // var a =10,b=10;
//     // var total = a+b;;
//     // console.log(total);
//     // return a + b;
//     var total = a +b;
//     console.log(total);
    
// }
// sum();
// sum(20,30);
// sum(50,50);
// sum(120,250);

//Donot repeat yourself


//Creata a function and put it in the variable
//When javascript reaches a return statement, the function will stop executing.
//Functions often compute a return value
// function sum(a,b){
//     // var a =10,b=10;
//     // var total = a+b;;
//     // console.log(total);
//     // return a + b;
//     var total = a +b;
//     // console.log(total);
//     return total = a+b;
    
// }
// var funExp = sum(5,20);
// console.log('the sum of two no is '+funExp);

//Anonymous Funtion


var funExp = function(a,b){
    // var a =10,b=10;
    // var total = a+b;;
    // console.log(total);
    // return a + b;
    // var total = a +b;
    // console.log(total);
    return total = a+b;
    
}
// var sum = (funExp(5,15));
// var sum1 = funExp(100,100);
 
// console.log('the sum of two no is '+sum);
// console.log('the sum of two no is '+sum1);
// var myName = "thapa technical";
// console.log(myName);
// myName = "Hassan";
// console.log(myName);

// const myName = "thapa technical";
// console.log(myName);
// myName = "Hassan";
// console.log(myName);


//Function scope and block scope
// function biodata(){
//     var myFirstName = "Hassan";
//     console.log(myFirstName);

//     if(true){
//         const myLastName = "iqbal";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerOuter' + myLastName);
// }

//Template literals


// for (let num = 0; num <=10; num++) {
//     let tableOf = 12;
//     // console.log(tableOf+ " * " +num + " = " + tableOf*num);
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`);
    
// }

// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(5));

// function sum() {
//     let a = 5;b=6;
//     let sum = a+b;
//     return `the sum of the two nuber is ${sum}`;
// }
// const sum = () => `the sum of the two nuber is ${(a=5)+(b=6)}`;
// console.log(sum());
var friend1 = 'Hassan';
var friend2 = 'Iqbal';
var friend3 = 'Sial';
var friend4 = 'Muhammad';
var friend5 = 'Sohail';


// var MyFriends = ['Hassan','Iqbal','Sial','Muhammad','Sohail',true,5];

// var myFriends = new Arrays;
// var myFriends = ['rames',22,male,'arjun',20,male,'vishal',true,52];

// var myFriends = ['ramesh','arjun','vishal'];
// console.log(myFriends[myFriends.length-1]);

//If we want to chek the length of elements of an array
// console.log(myFriends.length);


// var myFriends = ['ramesh','arjun','vishal'];

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
    
// }

//After ES6 we have for..on and for..of loop too
// var myFriends = ['ramesh','arjun','vishal'];

// for (let elements in myFriends) {
//     console.log(elements);
// }

// for (const elements of myFriends) {
//     console.log(elements);
// }

//Foreach loop
//calls a function for each eleemnt in an array.

// myFriends.forEach(function (element,index,array) {
//  console.log(element + "index :" + index + " " + array);

// });

// myFriends.forEach((element,index,array)=>{
//     console.log(element + "index :" + index + " " + array);
   
//    });


// var myFriends = ['ramesh','arjun','vishal','arjun'];
// console.log(myFriends.lastIndexOf("arjun"));


var myFriends = ['ramesh','arjun','vishal'];
console.log(myFriends.includes("hassan"));












