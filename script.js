
// // Guess what answers you would get if you ran this in the
// // Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// // check them by copying them and running it in the console yourself line by line 


// //Evaluate the below:
// 5 + "34"
// 5 - "4"
// 10 % 5
// 5 % 10
// "Java" + "Script"
// " " + " "
// " " + 0
// true + true
// true + false
// false + true
// false - true
// 3 - 4
// "Bob" - "bill"


// //Evaluate the below comparisons:
// 5 >= 1
// 0 === 1
// 4 <= 1
// 1 != 1
// "A" > "B"
// "B" < "C"
// "a" > "A"
// "b" < "A"
// true === false
// true != true


// // Make the string: "Hi There! It's "sunny" out" by using the + sign:
// const n = ' hi there it\'s   ' + 'Sunny';
// console.log(n);

/**
 * 
// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 


// add variable "firstName" and "lastName" // so that they equal your name

// create a variable that holds the answer // of "firstName" + " " + "lastName"

// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here?

// What is c equal to?
var c;



var fN = 'Deepak';
var lN = ' Kaushal';
var fullName = fN + lN;
console.log(fullName);

var a = 32;
var b = 21;
a = 2;
console.log(a + b);

*/

/***
* 
* 
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!


const fN = prompt('Enter the first number');
const sN = prompt('Enter the second number');

const sum = Number(fN) + Number(sN);
const sub = Number(fN) - Number(sN);
const mul = Number(fN) * Number(sN);
const divide = Number(fN) / Number(sN);
const mod = Number(fN) % Number(sN);
console.log(sum);
console.log(sub);
console.log(mul);
console.log(divide);
console.log(mod);

// alert(sum);
*/

// Conditional 

// var name = 'Deepak Kaushal';
// if(name === 'John'){
//   console.log('Hello John 😀');
// }
// else if ( name === 'Punk'){
//   console.log('Hey! Punk 😁');
// }
// else {
//   console.log('HEy Deepak!!!!😀');
// }

// or operator
// var name = 'Deepak Kaushal';
// if(name === 'Deepak Kaushal' || name === 'Golu');
// {
//   console.log('Hello ');
// }







/**
 * 
 * // Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

 

 var Age = prompt('Enter your age 🙂');

 var userAge = Number(Age); 
 if (userAge < 18){
   alert('Sorry, you are too young to drive this car. Powering off 😀');
 }
 else if ( userAge === 18){
   alert('Congratulations on your first year of driving. Enjoy the ride! 🙃');
   console.log(typeof(userAge) );
 }
 else if (userAge > 18){
   alert('Powering On. Enjoy the ride! 😉');
 }
 




// Functions

// Function declaration
// function nam (fN, lN){
//   console.log(nam);

// }
// nam('Deepak', 'Kaushal');

// Function expression
var nam = function(x){
  console.log(x);
}
nam('Deepak');
nam('Deepak 😀');


function mul (a,b){
  return a * b;
}
console.log(mul(4,5));

*/


/**
 * 
 * 
 * Challenge
 * 
 * 
 * // Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function every time?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"
 

 function checkDriverAge(){
   var age = prompt("What is your age?");

  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }

 }
 checkDriverAge();

 

 var checkDriverAge2 = function(){
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }

 }
 checkDriverAge2();
 
 



 var checkDriverAge = function(age){
  if (Number(age) < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride! 😀";
  }
 }
 console.log(checkDriverAge(21));

 


//  Data structure 
// Array 

var list = ['Tiger','Bird','cat','👀', 809,090,989,true,['😀','😂'],undefined, function name(){
  console.log("Deepak 😀");
}
,[
  'Deepak'
]
];

list.shift();
list.unshift('HEy');
list.push('😆');
list.pop();
list.concat(['bee','fly']); // create a new list
list.sort();

console.log(list);

*/

/**
 * 
 * 
 * // using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
 


var arr = ["Banana", "Apples", "Oranges", "Blueberries"];
arr.shift();
arr.sort();
arr.push('kiwi');
arr.shift();
arr.reverse();
console.log(arr);





// Objects

var user = {
  name: 'Deepak',
  age: 24,
  isMarried : false,
  mood: ['😀','😉' ,'🙂'],
  workout : function(){
    console.log('Everyday 😆');
  }
};

var list = [
  {
    username : 'Deepak',
    pwd: '1',
  },
  {
    username : 'kushal',
    pwd: '2',
  }
];
user.workout();
console.log(user.mood);
console.log(list[0]);

*/




/***
 * 
 * 
 * // Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

 
var fb = {
  username: 'Deepak',
  pwd: '1'
};

var db = [
  fb
];
console.log(db[0]);

var newsfeed = [
  {
    username : 'Deepak',
    timeline : 'Hey '
  },
  {
    username : 'kushal',
    timeline : 'hi'
  },
  {
    username : 'punk',
    timeline : 'hello'
  }
];



// Fb 

var db = [
  {
    username: "Deepak",
    pwd: 'secret'
  }
];

var newsFeed = [
  {
    username : ' Smith',
    timeline: ' Feeling bored 😄'
  },
  {
    username : ' Shabby',
    timeline: ' Feeling good 😄'
  },
];

var userNamePromp = prompt(`What's Your username ? `);
var pwdPromp = prompt('Enter your Password');



function signIn (user,pwd){
  if(user === db[0].username && pwd ===db[0].pwd){
    console.log(newsFeed);
  }
  else{
    alert('😁 Try again')
  }
}
signIn(userNamePromp, pwdPromp);





// loops

 var todo = [

  'workout 😛',
  'bath 😀',
  'breakfast',
  'study 😃',
  'sleep 😉'
 ];
 var todo2 = [

  'workout 😛',
  'bath 😀',
  'breakfast',
  'study 😃',
  'sleep 😉'
 ];
 for ( var i = 0; i < todo.length; i++){
   console.log(todo[i] + '💯', i);
 }
 
//  todo.forEach(function(tod, i){

// console.log(tod + '💯' , i);
//  });

function logTodo(tod, i){
  console.log(tod, i);
}
todo.forEach(logTodo);
todo2.forEach(logTodo);
//  while
// var coun = 0;
// while(coun < 10){
//   console.log(coun + '💯');
//   coun ++;
// }

// // Do while 
// var cont = 5;
// do {
//   console.log(cont);
//   cont--;
// }
// while(cont > 0);


*/



// Fb 

var db = [
  {
    username: "Deepak",
    pwd: 'secret'
  },
  {
    username: "Deep",
    pwd: 'sec12'
  },
  {
    username: "Deepu",
    pwd: 'sabji'
  },
  {
    username: "dragon",
    pwd: 'secret'
  }
];

var newsFeed = [
  {
    username : ' Smith',
    timeline: ' Feeling bored 😄'
  },
  {
    username : ' Shabby',
    timeline: ' Feeling good 😄'
  },
];




function isUserValid(user, pwd){
for ( var i = 0; i < db.length; i++){
  if(db[i].username === user && db[i].pwd === pwd){
    return true;
  }
}
return false;
}
function signIn (user,pwd){
    if(isUserValid(user, pwd)){
      console.log(newsFeed);
    }
    else{
      alert('Try Again 😁');
    }
  }
  // if(user === db[0].username && pwd ===db[0].pwd){
  //   console.log(newsFeed);
  // }
  // else{
  //   alert('😁 Try again')
  // }

var userNamePromp = prompt(`What's Your username ? `);
var pwdPromp = prompt('Enter your Password');
signIn(userNamePromp, pwdPromp);
