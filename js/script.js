// Created by Graeme Barbe
// Created on: May 21
// JS functions for index.html


// This function tells the user the product of their numbers
'use strict';
function submit() {
	//Declares variables
	let numb1 = parseInt(document.getElementById('userNumber1').value)
	let numb2 = parseInt(document.getElementById('userNumber2').value)
	let sum = 0

	//If statement to make sure max > min
	if (numb1 >= 0 && numb2 >= 0) {
		//For loop for counter
		for (let counter = 0; counter < numb1; counter++) {
			sum = sum + numb2
		}
		document.getElementById('numbers').innerHTML = "The product is " + sum
	} else {
		document.getElementById('numbers').innerHTML = "Please make sure your numbers are larger or equal to 0"
	}
}