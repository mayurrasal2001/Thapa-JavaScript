
// let biodata = 
// {
//     myname : "Mayur Ankush Rasal",

//     myage : 35,

//     getData()
//     {
//         console.log(`my Name is ${biodata.myname} and my Age is ${biodata.myage}`);
//     }
// }

// biodata.getData(); 



////Code for Object inside Object
let biodata = 
{
    myName : 
        {
            realName : "Mayur Rasal",
            channelName : "mayur-tech"
        },

     myAge : 22,

     getData ()
     {
        console.log(`my Age is ${biodata.myAge} and Name is ${biodata.myName.realName}`);
     }
};

console.log(biodata.getData());
console.log(biodata.myName.channelName);