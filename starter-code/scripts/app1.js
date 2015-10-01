window.onload = function()
{

var value1, value2, operation;

function setValues(){
	value1 = parseFloat(document.getElementById('basic-num-1').value);
	value2 = parseFloat(document.getElementById('basic-num-2').value);
	operation = document.getElementById('basic-operation').value;
	}

	//to calculate operation and give out answer. if + then do this...
	function calculate()
	{
		setValues();
		var answer = null;
		switch(operation)
		{
			case '+':
				answer = value1 + value2;
			break;
			case '-':
				answer = value1 - value2;
			break;
			case '*':
				answer = value1 * value2;
			break;
			case '/':
				answer = value1 / value2;
			break;
		}
		//replaces html content to answer in green box
		document.getElementById('basic-answer-alert').innerHTML = answer;
	}
		//calculate button, place outside, when click do function 'calculate' + - * /
		document.getElementById('basic-calc').addEventListener("click", calculate);

}//end window.onload
 
