// Blockink - synch

// console.log("mohmaed");
// console.log("ahmed");
// const total = 2 + 5;
// console.log(total)

// var fs = require('fs');
 
// var contents = fs.readFileSync('users.txt','utf8'); 
 
// console.log(contents); // firstly
 
// console.log("Hello Node\n"); // secondly
 
// var contents = fs.readFileSync('block.txt','utf8');
 
// console.log(contents); // thirdly
 
// console.log("Hello again!"); // fourthly

// non-blocking or async

var fs = require('fs');
 
var contents = fs.readFile('./users.txt','utf8', function(err,contents){
   console.log(contents); // forthy
});
console.log("Hello Node\n"); // firstly 
 
 
var contents = fs.readFile('./hosts.txt','utf8', function(err,contents){
   console.log(contents); // thirdly
});
console.log("Hello again!"); // secondly