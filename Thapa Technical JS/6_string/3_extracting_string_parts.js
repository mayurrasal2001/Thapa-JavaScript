/* Three methods of extracting the string
1. slice(start, end);
2. substring(start,end) 
3. substr
*/


// const fruit = "Apple, Banana, kiwi, Mango";
// var Data = fruit.slice(0,4);
// var Data1 = fruit.slice(0);
// var Data2 = fruit.slice(7,-2);  //-2 will exclude the last two characters and here start from 7th index
// console.log(Data);
// console.log(Data1);
// console.log(Data2);
// console.log(fruit);   //original array cannot change it remains same



//........................................Challenge Time..............................

////Display only 280 characters like twitter
// var challenge = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam in recusandae rem quos odit sint corporis vero quas, autem, beatae sunt aperiam ea cumque? Magni inventore magnam praesentium numquamLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus asperiores suscipit et facere non dolor optio eaque cum veniam, odio animi necessitatibus laudantium voluptate! Praesentium iste rerum mollitia eaque illo.";
// var words = challenge.slice(0, 279);
// console.log(words);
// console.log(challenge.length);



////subtring()

//// same as slice but here it do not accept the negative index
const fruit = "Apple, Banana, kiwi, Mango";
var Data = fruit.substring(4);                                //it cannot accept the negative parameters
console.log(Data);


// var fruit = "Apple, Banana, kiwi, Mango";
// var Data = fruit.substr(0,15);                 //Same as aplice
// console.log(Data);