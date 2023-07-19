// const home = (name:string) => {
//    return "Hello " +name ;
// }
// console.log(home("Ahmad"));

import { log } from "console";

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Get user input from prompt and convert it to a number
// "use strict"
// const ps = require("prompt-sync");
// const prompt = ps();

// let age = Number(prompt("Enter your Age"));

// // Check if the entered age is a valid number
// if (isNaN(age)) {
//    console.log("Please enter a valid number for age.");
// } else {
//    // Use the correct comparisons in the if...else if statement
//    if (age >= 18) {
//       console.log("You are old enough to drive.");
//    } else {
//       console.log("You are too young to drive.");
//    }
// }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older(me or you).Use prompt(“Enter your age:”) to get the age as input.



const ps = require("prompt-sync");
const prompt = ps();


// let my_Age = prompt("Enter my age");
// let your_Age = prompt("Enter Your age");

// if(my_Age==your_Age){
//    console.log("We are Age Fellow");
// }
// else if (my_Age > your_Age) {
//    console.log("I am older");
// }
// else if (my_Age < your_Age) {
//    console.log("You are older");
// }


// let choice;
// do{
// let num1=prompt("Enter number ");

// if(num1%2 ==0){
//    console.log(num1," is even number ")
// }
// else if (num1 % 2 !=0) {
//    console.log(num1, " is odd number")
// }

// choice = prompt("enter choice y/n");
// }
// while (choice == 'y');


  
// let choice;

// do{
// let scores=prompt("enter score");

// if(scores >=80 && scores <=100){
//    console.log("A grade");
// }
// else if (scores >= 70 && scores <=60){
//    console.log("B grade");
// }
// else if (scores >= 60 && scores <= 70) {
//    console.log("C grade");
// }
// else if (scores >= 50 && scores <= 60) {
//    console.log("D grade");
// }
// else if (scores < 50) {
//    console.log("F grade");
// }
//    choice = prompt("enter choice y/n");
// }
// while(choice == 'y');



// let choice;
// do{
// let month=prompt("Enter month of year");
 
// if (month == 'September' || month == 'October' || month == 'Nevember'){
//    console.log("Season is Autum");
// }
// if (month == 'December' || month == 'January' || month == 'February') {
//    console.log("Season is Winter");
// }
// if (month == 'March' || month == 'April' || month == 'May') {
//    console.log("Season is Summer");
// }
// if (month == 'June' || month == 'July' || month == 'August') {
//    console.log("Season is Spring");
// }
//    choice = prompt("enter choice y/n");
// }
// while(choice == 'y');




//Array functions

// const numbers = [3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// console.log(numbers.unshift());


// Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]



//concatinate
// let arr= [1,2,3,4,5];
// let arr1 = [6, 7, 8, 9, 10];
// let arr2=arr.concat(arr1)
// console.log(arr2);



//Array
// let arr =Array(10).fill('Ahmad');
// console.log(arr)
//will print 10 times Ahmad



//indexof

// let arr = [6, 7, 8, 9, 10];
// console.log(arr.indexOf(20));
// console.log(arr.includes(20));
// console.log(arr.slice(1,4));
// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items



//Array exercises

// let Arr = Array();
// console.log(Arr)
// let Arr1= ['A','B','C','D','E','F'];
// console.log(Arr1)
// console.log(Arr1.length)
// console.log(Arr1[0],Arr1[2],Arr1[5])
// let Arr2=[1,2,3,"a","b",false]
// console.log(Arr2.length);
// console.log(Arr1.map(element=>{
//    return element.toLowerCase();
// }));
// ✅ convert all array elements to lowercase
// const arr = ['BOBBY', 'HADZ', 'COM'];

// const lower = arr.map(element => {
//    return element.toLowerCase();
// });

// console.log(lower); // 👉️ [ 'bobby', 'hadz', 'com' ]


// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// // console.log(words)
// // console.log(words.length)
// const arr= text.replace(/[^\w\s]/g, '');
// const words = text.split(",");
// console.log(words)
// console.log(words.length)




// let text =
//    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// // Step 1: Remove all punctuations using regular expressions
// const sanitizedText = text.replace(/[^\w\s]/g, ''); // \w matches word characters, \s matches white spaces

// // Step 2: Convert the sanitizedText to an array of words
// const words = sanitizedText.split(/\s+/); // \s+ matches one or more white spaces

// console.log('Words Array:', words);
// console.log('Number of Words:', words.length);







// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.shift();
// shoppingCart.unshift("Meat");
// shoppingCart.pop();
// shoppingCart.push("Sugar");
// shoppingCart.splice(2,1,"Green-tea")
// console.log(shoppingCart)



// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.If it does not exist add to the countries list.

// const countries = ['Albania','Bolivia','Canada','Denmark',
//    ,'Finland','Germany','Hungary','Ireland','Japan','Kenya'
// ]

// console.log(countries.includes("Ethiopia"));





// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// const fullStack= frontEnd.concat(backEnd);
// console.log(fullStack)




// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of(min - average) and(max - average), use abs() method 1.Slice the first ten countries from the countries array


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//  ages.sort()
// let max_age=ages[0];
// let min_age=ages[0];
// for(let i=0;i<ages.length;i++){
//    if(ages[i]<min_age){
//       min_age = ages[i];
//    }
//    else if(ages[i] > max_age){
//       max_age = ages[i];
//    }
// }

// console.log(max_age)
// console.log(min_age)

// let range=max_age-min_age;
// console.log(range)








// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArr = []
// for (let i = 0; i < countries.length; i++) {
//    newArr.push(countries[i].toLocaleUpperCase())
// }
// console.log(newArr)



// const countries = [1,2,3,4,5,6,7,8]
// let sum=0;
// for (let i = 0; i < countries.length; i++) {
//     sum = sum + countries[i]
// }
// console.log(sum)

// let num=0;
// while(num<=5){
//    console.log(num)
//    num++;

// }


// for(let i=1;i<7;i++){

//    let row='';
//    for(let j=1;j<=i;j++){
//       row += "#"
//    }
//    console.log(row)
// }


// let num;
// for(let i=0;i<10;i++){
//     console.log(i +"*" +i +"=" +i*i)
// }


// for (let i = 0; i < 10; i++) {
//    console.log(i + "*" + (i*i) + "=" + i * (i*i))
//    if(i%2==0){
//       console.log("Even");
//    }
// }

// let sumEven = 0;
// let sumOdd = 0;

// for (let i = 0; i <= 100; i++) {
//    if (i % 2 === 0) {
//       sumEven += i; // Add even number to sumEven
//    } else {
//       sumOdd += i; // Add odd number to sumOdd
//    }
// }

// console.log('Sum of all even numbers:', sumEven);
// console.log('Sum of all odd numbers:', sumOdd);



// const name = (first_name="Ahmad ", last_name="Abu-bakr")=>{
    
   
//    last_name=first_name+last_name;
//    return last_name
     
// }
// console.log(name());




// Declare a function addNumbers and it takes two two parameters and it returns sum.


// function addNumbers(num1:number,num2:number){
//    let sum = num1+num2;
//    return sum;
// }
// console.log(addNumbers(6,4))


// An area of a rectangle is calculated as follows: area = length x width.Write a function which calculates areaOfRectangle.


// let areaOfRectangle = (length:number,width:number)=>{
//          let area = length * width;
//          return area
// }
// console.log(areaOfRectangle(12.3,3.5));



// Math.max returns its largest argument.Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.


//     function findMax(n:number,n1:number,n2:number){
//       if(n>n1 && n>n2){
//          return n
//       }
//        if (n1 > n && n > n2) {
//           return n1
//        }
//        if (n2 > n1 && n2 > n) {
//           return n2
//        }
//     }
// console.log(findMax(2,4,5))




// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.


// function cal(a:number,b:number,c:number,x:number){
//    let calculation = a * x^2 + b * x + c;
//    return calculation
// }
// console.log(cal(2,2,2,2));






// const person = {
//    firstName: 'Asabeneh',
//    age: 250,
//    country: 'Finland',
//    city: 'Helsinki',
//    skills: ['HTML', 'CSS', 'JS'],
//    title: 'teacher',
//    address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//    },
// }
// const keys = Object.keys(person)
// console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
// const address = Object.keys(person.address)
// console.log(address) //['street', 'pobox', 'city']



// const person = 
// {
//    name:"Ahmad",
//    age:23,
//    address:{
//      city: "islamabad",
//      street: 3,
//    },
//    fun : function(){
//        console.log(this.age);
//    },
//    Arr: ['isb','sgd','rwp']
// }

// // console.log(person.fun());
// const values = Object.entries(person)
// console.log(values)
// // console.log(person.address)




////objects/////

// let dog = {
//    name: 'Buddy',
//    legs: 4,
//    color: 'brown',
//    age: 3,

//    // Bark method
//    bark: function () {
//       return 'woof woof';
//    }
// };



// let users = {
//    Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//    },
//    Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//    },
//    Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//    },
//    Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//    },
//    John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//    },
//    Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//    },
//    Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//    }
// };
// let mostSkills = 0;
// let personWithMostSkills = '';

// for (const person in users) {
//    const userSkills = users[person].skills;
//    const numberOfSkills = userSkills.length;

//    if (numberOfSkills > mostSkills) {
//       mostSkills = numberOfSkills;
//       personWithMostSkills = person;
//    }
// }

// console.log(`Person with the most skills is: ${personWithMostSkills}`);





// Higher order function returning an other function
// const higherOrder = (n:number) => {
//    const doSomething = (m :number)=> {
//       const doWhatEver = (t:number) => {
//          return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//    }
//    return doSomething
// }
// console.log(higherOrder(2)(3)(10))





// const numbers = [1, 2, 3, 4, 5]
// const sumArray = (arr) => {
//    let sum = 0
//    const callback = function (element:number) {
//       sum += element
//    }
//    arr.forEach(callback)
//    return sum

// }
// console.log(sumArray(numbers))





///setintervel////
// function sayHello() {
//    console.log('Hello')
// }
// setInterval(sayHello, 500) // it prints hello in every second, 1000ms is 1s
// console.log(sayHello())




//settimeout////
// function sayHello() {
//    console.log('Hello')
// }
// setTimeout(sayHello, 5000)  //after 5ms just print for 1 time


//foreach keyword  
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element, index, arr) =>{ console.log(index, element, arr)}
// )


// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num)
// console.log(sum)

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))















































































 

















































