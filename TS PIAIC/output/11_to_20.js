//            Exercise # 11
var friends = ['ali', 'hussnain', 'abbas'];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
//            Exercise # 12
var friends = ['ali', 'hussnain', 'abbas'];
console.log("Hii ".concat(friends[0], " , how are you ?"));
console.log("Hii ".concat(friends[1], " , how are you ?"));
console.log("Hii ".concat(friends[2], " , how are you ?"));
//            Exercise # 13
var transportations = ['Honda Motorcycle', 'Rolls Royce', 'Mercedese'];
console.log("I would like to have a ".concat(transportations[0]));
console.log("I would like to have a ".concat(transportations[1]));
console.log("I would like to have a ".concat(transportations[2]));
//            Exercise # 14
var guests = ['ali', 'hussnain', 'abbas'];
console.log("Hii ".concat(guests[0], " , you are invited for dinner !"));
console.log("Hii ".concat(guests[1], " , you are invited for dinner !"));
console.log("Hii ".concat(guests[2], " , you are invited for dinner !"));
//            Exercise # 15
var guests = ['ali', 'hussnain', 'abbas'];
console.log("".concat(guests[0], " can't come for dinner !"));
guests[0] = "akbar";
console.log("".concat(guests[0], " , will be our new guest !"));
console.log("Hii ".concat(guests[0], " , you are invited for dinner !"));
console.log("Hii ".concat(guests[1], " , you are invited for dinner !"));
console.log("Hii ".concat(guests[2], " , you are invited for dinner !"));
//            Exercise # 16
console.log("There will be a big dinner !");
guests.unshift("Muhammad");
var index = (guests.length / 2);
guests.splice(index, 0, "qasim");
console.log(guests);
//            Exercise # 17
console.log("I can invite only two people for dinner");
var i;
console.log(guests);
for (i = 0; guests.length > +2; i++) {
    guests.pop();
    console.log(guests);
}
//            Exercise # 18
var cities = ["Iran", "Iraq", "UAE", "China"];
console.log(cities, "<==Original Array");
console.log("Alphabetic Order :");
console.log(cities.slice().sort());
console.log("Reverse Alphabetic Order :");
console.log(cities.slice().sort().reverse());
console.log("Reverse Order :");
console.log(cities.slice().reverse());
console.log(cities, "<==Original Array");
console.log("Alphabetic Order :");
console.log(cities.sort());
console.log(cities, "<== Original Array has changed");
console.log("Reverse Order :");
console.log(cities.reverse());
console.log(cities, "<== Original Array has changed");
//            Exercise # 19
console.log(guests);
console.log("I'm inviting ".concat(guests.length, " peapole on dinner"));
//            Exercise # 20
var arr = ["k2", "Pakistan", "pacific ocean"];
console.log(arr);
