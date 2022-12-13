// const arr = [2,4,5,8,9,7];

// var newArr = arr.map((currEle,index,arr)=>
// {
//     return currEle > 5;
// });

// console.log(arr);
// console.log(newArr);

//...........................................Map Method.........................
// const arr = [2,4,58,7,4,36,14];
// var newarr = arr.map((currEle,index,arr)=>
// {
//     return `The index of ${currEle} is ${index} and it belongs to array ${arr}`;
// });
// console.log(arr);
// console.log(newarr);


//same as to upper code but in ONE LINE
const arr = [2,4,58,7,4,36,14];
var newarr = arr.map((currEle,index,arr)=>`The index of ${currEle} is ${index} and it belongs to array ${arr}`);
console.log(arr);
console.log(newarr);


//.............................................Challenge Time.................
////1.find the Square root of the array

// //Unable to find the sqaure root
// let arr = [24,64,49,81,16,9];

// let arr2 = arr.map((currElem)=>
// {
//     Math.sqrt(currElem);
//     Math.sqrt
// });
// console.log(arr2);


////2.multiply each element by 2 and find the number greater than 10

// const arr = [2,4,58,7,4,36,14];

// const updataarr = arr.map((currElem)=>
// {
//     return 2 * currElem;
// }).filter((currElem)=>
// {
//     return currElem > 20;
// })
// console.log(updataarr);

////Same as upper function but ONE LINE
// const arr = [2,4,58,7,4,36,14];
// const updataarr = arr.map((currElem)=> 2 * currElem).filter((currElem)=>currElem > 20);
// console.log(updataarr);

//...................BY USING MAP->FILTER->REDUCE.....................
// const arr = [2,4,58,7,4,36,14];
// const updataarr = arr.map((currElem)=> 2 * currElem).filter((currElem)=>currElem > 20).reduce((accum,currElem)=> accum = accum + currElem);      //these reduce is apply on the filter elements[116,72,28]
// console.log(updataarr);


//....................................Reduce Method......................
//Reduce method mainly used for the printing the output into the single output value (average,sum,product)

// //reduce method take total four Parameters
// let arr = [4,5,6];
// let prod = arr.reduce((accum,currElem,index,arr)=>                 //here index and arr of two parameters are Does not have any use now
// {
//     return accum = accum * currElem;                 //here at first time accum=4 and currElem=5
// });
// console.log(prod);


// let arr = [4,5,6];
// let sum = arr.reduce((accum,currElem,index,arr)=>                 
// {
//     return accum = accum + currElem;
// });
// console.log(sum);


// //Array Flatten means concat the nested array into the single array
// var arr = [ [
//                 'Zone1','Zone2',
//                 'Zone4','Zone4',
//                 'Zone5','Zone6',
//                 'Zone7','Zone8'
//             ] 
//           ];
//           let faltarr = arr.reduce((accum,currElem)=>
//           {
//             return accum.concat(currElem);
//           });
//           console.log(faltarr);

