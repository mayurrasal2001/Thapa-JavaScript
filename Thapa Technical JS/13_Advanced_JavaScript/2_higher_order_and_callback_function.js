

//here add,subs,multi,div are the callBack funtions
  
const add =(a,b) =>
{
    return a + b;
}

const subs = (a,b) =>
{
    return a - b;
}

const multi = (a,b) =>
{
    return a * b;
}

const div = (a,b) =>
{
    return a / b;
}

const calculator = ( num1, num2, operator) =>           //here calculator is higher order funtion
{
    return operator(num1, num2);
}

console.log(calculator(5, 2, div));