//            Exercise # 41
var magicians = ["jon", "jack", "david"];
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        var newArr = [magicians[i]];
        console.log("Original Array");
        console.log(magicians);
        console.log("Changed Array");
        console.log(newArr[i]);
    }
}
show_magicians(magicians);
//            Exercise # 42
for (var a = 0; a < magicians.length; a++) {
    console.log(magicians.map(function (i) { return "Grea" + i; }));
}
//            Exercise # 43
magicians = ["jon", "jack", "david"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        var newArr = ["Great ".concat(magicians[i])];
    }
    show_magicians(magicians);
}
//            Exercise # 44
var incredients1 = [
    " tomato ketchup", " salad ", " vegetables"
];
var incredients2 = [
    " egg", " meat ", " chilli sauce"
];
var incredients3 = [
    " chicken", " spices ", " cheese"
];
function items(incredients) {
    console.log("The person wants a sandwitch with incredients " + incredients);
}
items(incredients1);
items(incredients2);
items(incredients3);
//            Exercise # 45
var manufacturer = "Honda";
var model = "Civic";
var number = 123;
var colour = "White";
function info(manufacturer, model, number, colour) {
    var obj = {
        Manufacturer: manufacturer,
        ModelName: model,
        Number: number,
        Colour: colour
    };
    console.log(obj);
}
info(manufacturer, model, number, colour);
