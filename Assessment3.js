//Assessment NodeAPI and ES6 - 01-May-2024
const fs = require("fs");

//1. Create a setup for Express Web Server
const express = require("express");
const app = express();

//2. Configure a route name - Student
app.all("/student", (req, res) => {
  res.send("Student route hit!");
});

//3. Create a express app and configure in server.js to delegate routes with - "Student"
// Check server.js file in this repo
const studentApp = express();
const studentRouter = require("./server");

app.use("/student", studentApp);
studentApp.use(studentRouter);

//4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string
app.get("/getStudentDetails", async (req, res) => {
  const { name, age, address, session } = req.query;

  const studentInfo = {
    name,
    age,
    address,
    session,
  };

  let writerStream = fs.createWriteStream("studentInfo.json", "utf8");
  writerStream.write(JSON.stringify(studentInfo));
  writerStream.end();

  res.send("Info saved!");
});

//5. Save this information received in #4  to a file named studentIfo using fs module async way
// completed above

app.listen(3000);
//6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
// map
// let myMap = new Map();
// myMap.set("Number of students", 20)
// myMap.set("Session", "MERN")
// myMap.set("Mode of instruction", "Online")
// myMap.set("Number of instructors", 1)

// console.log(myMap.get("Number of students"));

// console.log(myMap);

// myMap.clear()

// console.log(myMap);

// set
// let mySet = new Set(["Suyash", "Raj", "Ashish", "Dinesh", "Santosh"])

// mySet.add("Suyash") // Doesn't get added because its duplicate

// console.log(mySet.entries())

// console.log(mySet.has("Ashish")) // returns true

//7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
// let customPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Resolve after 2 seconds
//     resolve({
//       message: "Promise resolved successfully!",
//       features: [
//         "Arrow functions",
//         "Template literals",
//         "Destructuring assignment",
//         "Spread syntax",
//         "Promise chaining",
//       ],
//     });
//   }, 2000);

//   setTimeout(() => {
//     // Reject after 3 seconds
//     reject(new Error("Promise rejected!"));
//   }, 3000);
// });

// customPromise.then((result) => {
//     console.log(result.message);
//     console.log('ES6 features included:');
//     result.features.forEach((feature) => console.log(`- ${feature}`));
// })
// .catch((error) => {
//     console.error(error.message);
// });

//8. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
// function multiply(...numbers) {
//     let result = numbers.reduce((prevVal, currVal) => prevVal * currVal);
//     return result;
// }
// console.log(multiply(2,3, 4));

//9. Use the question #7 to build promises using async and await - with multithread
// async function asyncPromise() {
//     try {
//         const result = await customPromise;
//         console.log(result.message);
//         console.log("ES6 features included:");
//         result.features.forEach((feature) => console.log(`- ${feature}`));
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// asyncPromise();

//10. Create an example of generator function of your choice
// function* evenNumbers(n) {
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0) {
//             yield i
//         }
//     }
// }

// const n = 10
// const evenNumGen = evenNumbers(n)

// console.log(evenNumGen.next().value) // prints 0
// console.log(evenNumGen.next().value) // print 2
