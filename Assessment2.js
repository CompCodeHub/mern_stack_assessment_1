// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// 1. a Get heroes who are not evils
let good_heroes = heroes.filter(hero => !hero.isEvil);
// console.log(good_heroes);

// 1. b Print Unique family names
let unique_family = new Set(heroes.map(hero => hero.family));
// console.log(unique_family);

// 1. c Print Hero Names from given objects, and append sir in each of them before printing
let hero_names = heroes.map(hero => hero.name + " sir");
// console.log(hero_names);

// 1. d Do we have any hero in Marvel Family who is not evil
let non_evil_marvel_hero = heroes.some(hero => hero.family == "Marvel" && !hero.isEvil);
// console.log(non_evil_marvel_hero);


//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
function multiply(...numbers) {
    let result = numbers.reduce((prevVal, currVal) => prevVal * currVal);
    return result;
}
console.log(multiply(2,3, 4));

//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

const {userDetails:{last, contact = 9119119110}} = person
// console.log(last);
// console.log(contact);

//4. Give me an example of const data manipulation
const data = {
    name: "John",
    age: 30,
    city: "New York"
}
data.name = "Jane";
data.age = 25;
data.city = "Los Angeles";
//console.log(data);


//5. What is the difference between for-of and for-in show with examples
// for-of loop iterates over the values of an iterable object
// example
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  //console.log(color);
}
// for-in loop iterates over the enumerable properties of an object
// example
const user = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (const key in user) {
  //console.log(key);
}

//6. Give me an example of bind and write its usage, comparison with arrow function
// bind is used to provide a context for a function
// example
const person1 = {
    name: 'John',
    age: 30,
    greet: function() {
      //console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person2 = {
    name: 'Jane',
    age: 25
}

person1.greet.bind(person2)();

// An arrow function is a shorter way to write a function expression. It is a shorthand way to define a function.
// example
const add = (a, b) => a + b;
//console.log(add(2, 3)); // returns 5

//7. Create an example showing usage of event loop in concurrent execution cycle
//console.log("Start");
setTimeout(() => {
  //console.log("Timeout"); // prints after End due to event loop even if timeout is 0 secs
}, 0);
//console.log("End");


//8. create an example showing usage of short hand and default param
// example
// function multiply(a, b = 1) {
//   return a * b;
// }
// Here the function multiply multiplies two numbers. If the second argument is not provided, it defaults to 1.
// console.log(multiply(5)); // returns 5
// console.log(multiply(5, 3)); // returns 15

//9. Create two objects with some properties and merge them using Object method and ES6 way
const mercedes = {
    model: 'GLC',
    year: 2022,
    color: 'black'
};

const audi = {
    model: 'Q7',
    year: 2021,
    color: 'white'
};
// Using object assign method
Object.assign(mercedes, audi);

// Using ES6 spread operator
const mercedes_audi = {...mercedes, ...audi};
//console.log(mercedes_audi);

//10. Give me an example of call and apply each with it's usage
function greet(message) {
  //console.log(`${message} ${this.name}`);
}
const person3 = { name: 'John' };
greet.call(person3, 'Hello');
greet.apply(person3, ['Greetings']);
