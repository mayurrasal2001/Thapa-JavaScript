
////returns the character at the given position
// let Data = "Helloworld";
// console.log(Data.charAt(9));


////it will returns the UNICODE charcter at specified string
// let str = "HELLOWORLD";
// console.log(str.charCodeAt(5));



// //................................................Challenge time...........................
// //find the charcode at lastindex in the string

// let Data = "My Name is Mayur Ankush Rasal";
// console.log(Data.length);
// var lchar = Data.length - 1;
// console.log(Data.charCodeAt(lchar));

// //1
// let myName = "Mayur Ankush Rasal";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());


// //2. concat() mthod

// var fName = "Mayur";
// var lName = "Rasal";

// console.log(fName.concat(lName));
// console.log(fName + lName);
// console.log(fName.concat(" ",lName));


////3. trim()

// var str = "                     Mayur Rasal                  ";
// console.log(str);
// console.log(str.trim(str));


////4. split()          converting the string into the array

var txt = "a,b,c,d,e,f";
console.log(txt.split(","));

var txt1 = "a, b,c,d, e,f";
console.log(txt1.split(" "));

var txt2 = "a,b,c, | d,e,f";
console.log(txt2.split("|"));


