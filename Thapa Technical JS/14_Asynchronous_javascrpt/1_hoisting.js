

////this code work properly and below throws error as you cannot acess myName before initialisation this run because of hoisting
// console.log(myName);
// var myName;
// myName = "Mayur Rasal";

//hoisting means variable and function declaration are moved to the top and then execute it
//how it internally works->
//1.var myName;
//2.console.log(myName);
//3.myName = "Mayur Rasal";


//it shows erros as you cannot acess myName before initialisation because let is part of after ECMAScript 2015 
console.log(myName);
let myName;
myName = "Mayur Rasal";