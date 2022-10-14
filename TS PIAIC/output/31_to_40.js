//            Exercise # 31
var arr3 = ["kashan", "abuzar", "admin", "sagheer", 'owais'];
for (var a = 0; a < 5; a++) {
    if (arr3[a] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + arr3[a] + " , thank you for logging in again");
    }
}
console.log("\t \t If list is empty ");
arr3 = [];
for (var j = 0; j < arr3.length; j++) {
    arr3[j] = arr3[j].trim();
}
if (arr3.length == 0) {
    console.log("We need to find some users!");
}
//            Exercise # 32
var users = ["admin", "kashan", "abuzar", "sagheer", 'owais'];
var new_users = ["admin", "ali", "faiz", "kashan"];
for (var a = 0; a < users.length; a++) {
    for (var j = 0; j < new_users.length; j++) {
        if (new_users[j] == users[a]) {
            console.log(new_users[j] + " is already a user, You will have to enter a new user name !");
            break;
        }
    }
}
//            Exercise # 33
var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var a = 0; a < arr4.length; a++) {
    if (arr4[a] == 1) {
        console.log(arr4[a] + "st");
    }
    else if (arr4[a] == 2) {
        console.log(arr4[a] + "nd");
    }
    else if (arr4[a] == 3) {
        console.log(arr4[a] + "rd");
    }
    else {
        console.log(arr4[a] + "th");
    }
}
//            Exercise # 34
var pizzas = ['pepperoni', 'chiili', 'chicken'];
for (var a = 0; a < pizzas.length; a++) {
    console.log(pizzas[a]);
}
//Modified
for (var a = 0; a < pizzas.length; a++) {
    console.log("I Like ".concat(pizzas[a], " pizza"));
}
//            Exercise # 35
var animals = ["dog", "wolf", "lion"];
for (var a = 0; a < animals.length; a++) {
    console.log(animals[a]);
}
console.log("Dog is very Loyal");
console.log("Wolf attcks in groups");
console.log("Lion is the king");
console.log("These all animals eat meat");
//            Exercise # 36
var size = 'large';
var text = 'Kashan';
function make_shirt(size, text) {
    console.log("The size of the shirt is " + size + " and the text on it will be " + text);
}
make_shirt(size, text);
//            Exercise # 37
var default_size = 'large';
var default_size2 = 'medium';
var mysize = "small";
var mytext = " I am a programmer";
var default_text = 'I Love JavaScript';
make_shirt(default_size, default_text);
make_shirt(default_size2, default_text);
make_shirt(mysize, mytext);
//            Exercise # 38
var city1 = "Lahore";
var country1 = "Pakistan";
var city2 = "Karachi";
var country2 = "Pakistan";
var city3 = "Mumbai";
var country3 = "India";
function citiesFunction(city, country) {
    console.log(city + " is in " + country);
}
citiesFunction(city1, country1);
citiesFunction(city2, country2);
citiesFunction(city3, country3);
//            Exercise # 39
function citiesFunction1(city, country) {
    console.log(city + " , " + country);
}
citiesFunction1(city1, country1);
citiesFunction1(city2, country2);
citiesFunction1(city3, country3);
//            Exercise # 40
var name1 = "Abuzar";
var track1 = "abc";
var name2 = "Sagheer";
var track2 = "jkl";
var name3 = "Kashan";
var track3 = "xyz";
var a = 0;
function make_album(name, title) {
    var album_obj = {
        artistName: name,
        albumTitle: title
    };
    console.log(album_obj);
    a++;
}
make_album(name1, track1);
make_album(name2, track2);
make_album(name3, track3);
console.log("Number of Tracks : " + a);
