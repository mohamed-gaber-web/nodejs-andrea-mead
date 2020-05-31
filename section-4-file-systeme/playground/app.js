const fs = require('fs');

const user = {
    name: "mohamed",
    age: 30,
    planet: "earth"
}

const strData = JSON.stringify(user); // when create file and put data json convert from object to string
const createFilejson = fs.writeFileSync('1-json.json', strData);
const readFilejson = fs.readFileSync('1-json.json');
// console.log(readFilejson); // show data buffer
const convertDataBuffer = readFilejson.toString();
const users = JSON.parse(readFilejson);

// change value
user.name = "mostafa";
user.age = 50;
const userStringChange = JSON.stringify(user);
fs.writeFileSync('1-json.json', userStringChange);

// change again
user.planet = "earth-2";

const userStringChange2 = JSON.stringify(user);
fs.writeFileSync('1-json.json', userStringChange2);

// const userStringfy = JSON.stringify(user);
// const userJson = JSON.parse(userStringfy);
// console.log(userJson); 
// console.log(typeof(userJson));













// 
// 1. how to storage data in json ?
// 2. JSON.stringfy() - JSON.parse()
// 3. JSON.stringfy() convert from object to string
// 4. JSON.parse() convert from string to object
//