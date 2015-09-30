window.onload = function(){

//set values from document, no need to keep typing again and again
function getFloat(id){
    return parseFloat(document.getElementById(id).value);   // make it to a number (.value & parseFloat)
}

function getValue(id){
    return document.getElementById(id).value;
}

function getID(id){
    return document.getElementById(id);
}

function setHTML(id, html){
    document.getElementById(id).innerHTML = html;           // calculation result||answer of function to replace innerHTML
}

// BASIC 
getID('basic-calc').addEventListener("click", function()    // action to happen when button is clicked
{   
    var value1 = getFloat("basic-num-1");                                   
    var value2 = getFloat("basic-num-2");   
    var operation_sign = getValue("basic-operation");       // find ID of operation and get the value "+ - / *""           
    setHTML('basic-answer-alert', answer_BASIC(value1, value2, operation_sign));    
                                                                                          
    
    function answer_BASIC(value1, value2, operation_sign)   // function to do the calculation, if else statement, I need Value1|operation sign|Value2 
    { 
        if (operation_sign == '+') {
            return value1 + value2;
        } else if (operation_sign == '-') {
            return value1 - value2;
        } else if (operation_sign == '/') {
            return value1 / value2;
        } else if (operation_sign == '*') {
            return value1 * value2;
        }
    }
})


// TRIP fixed NaN
getID('trip-calc').addEventListener("click", function()
{ 
    var distance = getFloat("trip-distance");  
    var mpg = getFloat("trip-mpg");   
    var cost = getFloat("trip-cost");  
    var speed = getFloat("trip-speed");               
    setHTML('trip-answer-alert', answer_TRIP(distance, mpg, cost, speed).toFixed(2)); //set to 2 decimal places   

    function answer_TRIP(distance, mpg, cost, speed)    //fuction to do calculation
    {
        if (speed < 60){
            return distance / mpg * cost;
        } else {
            return distance / (mpg - (speed - 60) * 2) * cost;  
        } 
    }
})



//BMI
getID('bmi-calc').addEventListener("click", function()
{ 
    var mass = getFloat('bmi-mass');
    var height = getFloat('bmi-height');
    setHTML('bmi-answer-alert', answer_BMI(mass, height).toFixed(2));

    function answer_BMI(mass, height){
        return (mass / (height * height)) * 703;
    }
    
})
    setHTML('bmi-mass-unit', 'lb');             //change html text to Pounds(lb)
    setHTML('bmi-height-unit', 'inches');       //change html text to Inches


//Mortgage
getID('mortgage-calc').addEventListener("click", function()
{
    var loan = getFloat('mortgage-loan');
    var apr = getFloat('mortgage-apr');
    var term = getFloat('mortgage-term');
    setHTML('mortgage-answer-alert', answer_MORTG(loan, apr, term).toFixed(2));


    function answer_MORTG(loan, apr, term){
        return loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1)
    }
})


} //end of window.onload




