// //push
// var Data = ["mayur","sakib","swajit","Omkar","Tushar"];
// const count  = Data.push("Rajesh");
// console.log(Data);
// console.log(count);


// var Data = ["mayur","sakib","swajit","Omkar","Tushar"];
// var count = Data.push("Aniket","Omkar","Swapnil");
// console.log(Data);
// console.log(count);



// //UNSHIFT(Insert at Beginning)

// var Data = ["mayur","sakib","swajit","Omkar","Tushar"];
// var count = Data.unshift("Swapnil");
// console.log(Data);
// console.log(count);


// //pop
// var Data = ["mayur","sakib","swajit","Omkar","Tushar"];
// console.log(Data);
// console.log(Data.pop());
// console.log(Data);


// //shift(Delete at Beginning)
// var Data = ["mayur","sakib","swajit","Omkar","Tushar"];
// console.log(Data);
// console.log(Data.shift());
// console.log(Data);


/*..........................................Challenge Time.......................*/

//Add Dec  at the end of an Array
// var months = ['feb','April','May','Nov','jan'];
// var newMonth = months.splice(months.length,0,"Dec");
// console.log(months);
// console.log(newMonth);    //Does not return anything because splice metod is mainly used for the deleting purpose


//update April to april
// const months = ['feb','April','May','Nov','jan'];
// const newMonth = months.slice(1,1,'april');
// console.log(months);
// console.log(newMonth);


////when we dont know the index where we update
// var months = ['feb','April','May','Nov','jan'];

// var indexmonth = months.indexOf('oct');

// if(indexmonth != -1)
// {
//     const updateMonth = months.splice(indexmonth,1,"July");
//     console.log(months);
// }
// else
// {
//     console.log("No Data are found");
// }


////Delete May from the Array
var months = ['feb','April','May','Nov','jan'];

var indexmonth = months.indexOf('May');

if(indexmonth != -1)
{
    const updateMonth = months.splice(indexmonth,2);      //here two numbers will delete May and next to May and at at the next to two we can write the modification value
    console.log(months);
}
else
{
    console.log("No Data are found");
}






