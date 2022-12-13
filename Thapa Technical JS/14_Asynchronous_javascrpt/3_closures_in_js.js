let a =10;

const data = (a)=>
{
    let b = 20;

    const innerFunc =() =>
    {
        var sum = a + b;
        console.log(`the sum of the two number is ${sum}`);
    }

    return innerFunc;
}

var checkClosure = data(10);    //here we can acess the innerfunction by storing into refrence
console.log(checkClosure);
checkClosure();