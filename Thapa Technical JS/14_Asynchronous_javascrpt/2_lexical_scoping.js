
let a = "Hello Friends ";

const data = () =>
{
    let b= "My Name is Mayur Rasal ";

    const data1 = () =>
    {
        let c = "I am from Pargaon";

        console.log(a+b+c);
    }
    data1();

    // console.log(a+b+c);   //it will not execute because we try to access the c from outside data1 function
}

data()
