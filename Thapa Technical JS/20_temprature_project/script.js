
const calculateTemp = () =>{
    const numTemp = document.getElementById("temp").value;
    // console.log(numTemp);

    const tempSelected = document.getElementById("temp_diff");

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;      //By using the selectedIndex we can find the index of that choosing value and by using the .value we can find the actual value i.e cel or fahreheit
                                                                                 //here valueTemp can store the cel or degee
    const celToFah = (cel) =>{
        let fahrenheit =  Math.round((cel *  9/5) + 32); 
        return fahrenheit;
    }
    
    const fehToCel = (fehr) =>{
        let celsius =  Math.round((fehr -32 ) * 5/9); 
        return celsius;
    }

    let result;
    if(valueTemp == 'cel'){
        result = celToFah(numTemp) ;
        document.getElementById("resultContainer").innerHTML= `= ${result}Fahrenheit`;
    }else{
        result = fehToCel(numTemp);
        document.getElementById("resultContainer").innerHTML= `= ${result}Celsius`;
    }
} 