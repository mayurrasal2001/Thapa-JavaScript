//#####
var myName = 'Mayur Ankush Rasal';
console.log(myName);
console.log(typeof(myName));

var myAge = 25;
console.log(typeof(myAge));

var iamMayur = true;
console.log(typeof(iamMayur));

//###
//bug
var iAmUseless = null;
console.log(typeof(iAmUseless));

//undefined
var iAmUseless1;
console.log(iAmUseless1);



//###
var myName1 = "Mayur Rasal";
console.log(isNaN(myName));

var myNumber = 9022176796;
console.log(isNaN(myNumber));

if(isNaN(myName1))
{
    console.log("Please enter the valid number");
}
if(isNaN(myNumber))
{
    console.log("Please enter the valid number");
}