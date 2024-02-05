const calculateTemp=() =>{
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('tempDiff');
    const valueTemp=tempDiff.options[tempSelected.selectedIndex].value;
    let result;
    let resultK;
    let resultF;
    const kelToCel=(kelvin)=>{
        let celsius=kelvin-273.15;
        return celsius;
    }
    const celToFah=(celsius)=>{
        let fahrenheit=((celsius*9/5)+32);
        return fahrenheit;
    }
    const fahToCel=(fahrenheit)=>{
        let celsius=Math.round((fahrenheit-32)*5/9);
        return celsius;
    }
    if(valueTemp=='cel')
    {
        result=celToFah(numberTemp);
        document.getElementById('result1').innerHTML= `= ${result} Fahrenheit`;
        resultK=parseFloat(numberTemp)+273.15;
        document.getElementById('result2').innerHTML= `= ${resultK} Kelvin`;

    }
    else if(valueTemp=='kel')
    {
        result=kelToCel(numberTemp);
        document.getElementById('result1').innerHTML= `= ${result} Celsius`;
        resultF=celToFah(result);
        document.getElementById('result2').innerHTML= `= ${result} Fahrenheit`;

    }
    else{
        result=fahToCel(numberTemp);
        document.getElementById('result1').innerHTML= `= ${result} Celsius`;
        resultK=parseFloat(result)+273.15;
        document.getElementById('result2').innerHTML= `= ${resultK} Kelvin`;

    }

}