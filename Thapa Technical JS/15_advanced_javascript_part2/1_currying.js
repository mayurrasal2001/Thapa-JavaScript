

const sum = (num1) =>
{
    return function(num2){
        return function(num3)
        {
            console.log(num1 + num2 + num3);
        }
    }
}

sum (5)(3)(8);


// //how to write it in one Line
// const sum = (num1) => (num2) => (num3) =>console.log(num1 + num2 + num3);
// sum (5)(3)(8);