setTimeout(()=>{
    console.log("Work 1 is Done");
    setTimeout(()=>{
        console.log("Work 2 is Done");
        setTimeout(()=>{
            console.log("Work 3 is Done");
            setTimeout(()=>{
                console.log("work 4 is Done");
                setTimeout(()=>{
                    console.log("Work 5 is Done");
                })
            },1000)
        },1000)
    },1000)
},1000)