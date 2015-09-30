//window.onload = function() , didn't work for me if i used the onclick="myFunction()" in the html file


// BASIC 
function calculate_BASIC() 
    {
    var value1 = parseFloat(document.getElementById("basic-num-1").value);  // find ID of input text box and make it to a number (.value & parseFloat)
    var value2 = parseFloat(document.getElementById("basic-num-2").value);   
    var operation_sign = document.getElementById("basic-operation").value;  // find ID of operation and get the value "+ - / *""
    var answer_value = answer_BASIC(value1, value2, operation_sign);              // answer function = answer
    document.getElementById('basic-answer-alert').innerHTML = answer_value; // answer in function replaces innerHTML
    }

function answer_BASIC(value1, value2, operation_sign) // function to do the calculation, if else statement, I need Value1|operation sign|Value2 
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

// TRIP returns NaN
function calculate_TRIP() 
    {
    var distance = parseFloat(document.getElementById("trip-distance").value);  
    var mpg = parseFloat(document.getElementById("trip-mpg").value);   
    var cost = parseFloat(document.getElementById("trip-cost").value);  
    var speed = parseFloat(document.getElementById("trip-speed").value);  
    var answer_value = answer_TRIP();              
    document.getElementById('trip-answer-alert').innerHTML = answer_value; 
    }

function answer_TRIP(distance, mpg, cost, speed)
    {
        if (speed < 60){
            return distance / mpg * cost;
        } else {
            return distance / (mpg - (speed - 60) * 2) * cost
        } 
    }
/*
The trip cost calculator should let you calculate the cost of a trip, taking into account that:
when the speed is less than 60, the formula is distance / mpg * cost
when the speed is more than 60, the formula is `distance / (mpg - (speed - 60) * 2) * cost
*/


//BMI

/*
The BMI calculator should compute a body mass index, with the formula ( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
The mortage calculator formula should compute the monthly cost of a loan, with the formula loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1)
*/


//Mortgage

/*
The mortage calculator formula should compute the monthly cost of a loan, with the formula loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1)
*/