
//...............................Syncronous Javascript..........................

// const fun2 = () =>
// {
//     console.log("Function 2 is called");
// }

// const fun1 = () =>
// {
//     console.log("Function 1 is called")

//     fun2();

//     console.log("Again function 1 is called")
// }

// fun1();

////..........................Asynchronous Javascript....................

const fun2 = () =>
{ setTimeout (()=>
    {
        console.log("Function 2 is called")
    }, 2000);
}

const fun1 = () =>
{
    console.log("Function 1 is called")

    fun2();

    console.log("Again function 1 is called")
}

fun1();