

const counters = document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');    //b using + we can convert string into int
        // console.log(targetCount);

        const startingCount  = Number(counter.innerHTML);

        const incr = targetCount / 100;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerHTML = targetCount;
        }
    }

    updateCounter();
})


// for converting ony datatype into another(typecasting)

// 1. var n = +str;               Unary Plus operator
//2. var n = Number(str);         The Number contructor

  