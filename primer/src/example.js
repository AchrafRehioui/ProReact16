
import oddOnly, { sumValues } from "./sum";
import { multiply, subtract } from "./operations";
import { asyncAdd } from './OperationAsync';



console.log('Hello');
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");


const myFunc = function () {
    console.log("This statement is inside the function");
};
console.log("This statement is outside the function");
myFunc();



function myFunc1(name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
}
myFunc1("Adam", "sunny");


function myFunc2(name, weather = "raining") {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
}
myFunc2("Adam");


function myFunc3(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
}
myFunc3("Adam", "sunny", "one", "two", "three", "four");

function myFunc4(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}
console.log(myFunc4(function () {
    return "Adam";
}));

const myFunc5 = (nameFunction) => ("Hello " + nameFunction() + ".");
const printName = (nameFunction, printFunction) =>
    printFunction(myFunc5(nameFunction));
printName(function () { return "Adam" }, console.log);

// Using Variables and types 


// let
function messageFunction(name, weather) {
    let message = "Hello, Adam";
    if (weather === "sunny") {
        let message = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}
messageFunction("Adam", "raining");

// var
function messageFunction1(name1, weather1) {

    var message1 = "Hello, Adam";
    if (weather1 === "sunny") {
        var message1 = "It is a nice day";
        console.log(message1);
    } else {
        var message1 = "It is " + weather1 + " today";
        console.log(message1);
    }
    console.log(message1);
}

messageFunction1("Adam", "raining");

//using variable closure 

function myFunc6(name) {
    let myLocalVar = "sunny";
    let innerFunction6 = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    }
    return innerFunction6();
}
console.log(myFunc6("Adam"));

// Capturing Parameter Names from Objects 

const myData = {
    name: "Bob",
    location: {
        city: "Paris",
        country: "France"
    },
    employment: {
        title: "Manager",
        dept: "Sales"
    }
}
function printDetails({ name, location: { city }, employment: { title } }) {
    console.log(`Name: ${name}, City: ${city}, Role: ${title}`);
}
printDetails(myData);

//using the Javascript Module

let values = [10, 20, 30, 40, 50];
let total = sumValues(values);
let odds = oddOnly(values);
console.log(`Total: ${total}, Odd Total: ${odds}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);

let total2 = asyncAdd(values);
console.log(`Main Total: ${total2}`);