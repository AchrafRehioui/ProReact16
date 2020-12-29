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