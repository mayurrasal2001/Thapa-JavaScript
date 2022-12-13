
let Biodata = 
{
    myData : 
    {
        myName :"Mayur Ankush Rasal",
        channelName : "mayur-tech"
    },

    myAge : 22,
    Department : "Compter Engineering",

    getData()
    {
        console.log(`my name is ${this.myData.myName} and my channel Name is ${this.myData.channelName} and my Age is ${this.myAge}`);
    }
}

Biodata.getData();