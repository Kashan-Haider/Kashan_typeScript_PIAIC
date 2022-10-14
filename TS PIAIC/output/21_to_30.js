var obj = {
    mountain: "k2",
    country: "Pakistan",
    ocean: "pacific ocean"
};
//            Exercise # 23
var car = 'subaru';
if (car === "subaru") {
    console.log(true);
}
if (car === "honda") {
    console.log(false);
}
if (car === "audi") {
    console.log(false);
}
if (car === "mercedese") {
    console.log(false);
}
var bike = "suzuki";
if (bike === "suzuki") {
    console.log(true);
}
if (bike === "honda") {
    console.log(false);
}
if (bike === "yamaha") {
    console.log(false);
}
var title = "track1";
if (title === "track1") {
    console.log(true);
}
if (title === "track2") {
    console.log(false);
}
if (title === "track1") {
    console.log(false);
}
//            Exercise # 24
var name2 = "KASHAN";
console.log(name2 == "kashan" ? "true" : "false");
console.log(name2 === "kashan" ? "true" : "false");
console.log(name2 == "KASHAN" ? "true" : "false");
console.log(3 > 7 ? "true" : "false");
var arr2 = ["Kashan", 'Ali', 'Hassan'];
console.log(arr2.includes("Kashan") ? "Found" : "Not Found");
console.log(arr2.includes("Ali") ? "Found" : "Not Found");
console.log(arr2.includes("Owais") ? "Found" : "Not Found");
//            Exercise # 25
var alien_colour = "green";
if (alien_colour == "green") {
    console.log("Player Earned 5 Points");
}
//            Exercise # 26
console.log("\t 1st Version \t");
if (alien_colour == "green") {
    console.log("Player Earned 5 Points");
}
else {
    console.log("Player Earned 10 Points");
}
console.log("\t 2nd Version \t");
alien_colour = "yellow";
if (alien_colour == "green") {
    console.log("Player Earned 5 Points");
}
else {
    console.log("Player Earned 10 Points");
}
//            Exercise # 27
console.log("\t 1st Version \t");
if (alien_colour == "green") {
    console.log("Player Earned 5 Points");
}
else if (alien_colour == "yellow") {
    console.log("Player Earned 10 Points");
}
else if (alien_colour == "red") {
    console.log("Player Earned 15 Points");
}
console.log("\t 2nd Version \t");
alien_colour = "yellow";
if (alien_colour == "green") {
    console.log("Player Earned 5 Points");
}
else if (alien_colour == "yellow") {
    console.log("Player Earned 10 Points");
}
else if (alien_colour == "red") {
    console.log("Player Earned 15 Points");
}
console.log("\t 3rd Version \t");
alien_colour = "red";
if (alien_colour == "green") {
    console.log("Player Earned 5 Points");
}
else if (alien_colour == "yellow") {
    console.log("Player Earned 10 Points");
}
else if (alien_colour == "red") {
    console.log("Player Earned 15 Points");
}
//            Exercise # 28
var age = 18;
if (age < 2) {
    console.log("The person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is a adult");
}
else if (age > 65) {
    console.log("The person is a old");
}
//            Exercise # 29
var favorite_fruits = ["banana", "mango", "apple"];
if (favorite_fruits.includes("oranges")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like banana!");
}
if (favorite_fruits.includes("pineapple")) {
    console.log("You really like pineapple!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
//            Exercise # 30
var arr3 = ["kashan", "abuzar", "admin", "sagheer", 'owais'];
for (var i = 0; i < 5; i++) {
    if (arr3[i] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + arr3[i] + " , thank you for logging in again");
    }
}
