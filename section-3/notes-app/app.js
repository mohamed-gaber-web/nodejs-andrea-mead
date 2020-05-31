const calc = require('./utils'); // import clac from this file
const getNotes = require('./notes');
// // const LI = require(LI);
// const fs = require('fs');

// fs.writeFileSync('notes.txt', "hello notes-app!"); // add file and write text
// fs.appendFileSync('notes.txt', " hello mohamed"); // append to exist file
const calcNumber = calc(10, 20);
const msg = getNotes();
let log = console.log;

log(calcNumber);
log(msg);




//
//-- chalk
// 1. chalk is library used to edit on message show in cmd 
// 2. used color and font bold and bgcolor
// 3. npm install chalk@version
//

//
//-- validator
// 1. chalk is library used to validate input 
// 2. used validate email strng and url
// 3. npm install validator@version
//

//
//-- nodemon
// 1. nodemon is library used to run code without used node file.js 
// 2. npm install validator@version -g
// 3. nodemon file.js
//