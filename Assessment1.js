//March - MERNStack Session - Assessment Number 1
//Q1. Create a file with name basics and show all the features that you know about javascript
// Ans. 1) DataTypes: String, number, boolean, object, undefined, null
// 2) Operators: &&, and, ||, or, ! - not, =, ==, ===, ?
// 3) Control statments: for controlling flow of code: if statements, ternary expressions
// 4) functions: Help define a block of code that can be reusable
// 5) Callback: A function that is passed to another function as a parameter through a function pointer.
// 6) Hoisting: Different behaviors of hoisting for variables and functions. Variables have a value of undefined if logged before initializing them. Function declarations
// are hoisted at the top and therefore a function executes perfectly even if it is called before declaration in a file.
// 7) closures: A function that returns a function. The inner function has access to properties of outer function and can be used for encapsulation of data.

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
// Ans. 1) Number 2) Number 3) boolean 4) object 5) number 6) undefined 7)boolean 8) String 9) null 10) object 11) Number

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
// Ans. 
function showUserInfo(firstname, lastname, age){
  console.log(firstname, lastname, age)
}

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
// Ans.
function doAddition(num1, num2, num3){
  return num1 + num2 + num3
}
// add(2,3,4) returns 9 because of simple addition
// add(2) returns NaN because we try to add first number with 2nd and 3rd undefined params
// add(2.3, 3) returns NaN because of same reason as above
// add("first", 2, "three") returns "first2three" because of string interpolation


//Q5. Give me an example of your choice on closure, hoisting, constructor function, each.
// Ans. 
// 1) closure
function outer() {
  var name = "Suyash"
  
  function inner() {
    console.log(name); // Accessing outer name variable
  }
  
  return inner; // Returning inner function
}

// 2) hoisting
console.log(name) // undefined
var name = "Suyash"

console.log(multiply(2, 3)) // returns 6

function multiply(num1, num2){
  return num1 * num2
}

// 3) constructor function
function Person(name, age){
  this.name = name;
  this.age = age;
}

var person1 = new Person("Suyash", 24);
console.log(person1) // returns {name: "Suyash", age" 24}

//Optional Question - what will the following code output? why?

// var arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// Ans. It would return:
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// The reason is because the loop will already be executed by the time setTimeout function runs which would cause it to have i as 4 and arr[i] as undefined
