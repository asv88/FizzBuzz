// JavaScript Document

$(document).ready(function () {
	$(".container").submit(function (e) {
		e.preventDefault();
		//prevents default re-load on submit button
	});
	
	$(".NTRfield").on("click", ".btn", function() {
		//in input field on click (.btn) this function runs
		var count = $(".typeNumber").val();
		//variable to capture value of user's input
		$(".typeNumber").val(" ");
		//resets the input field to blank after submitting a number
		$(".results").text(" ");
		//resets the results to nothing when submitting another number
		
		var num = Number(count);
		//changes the value of the user's input to a number using the Number() function
		for (a=1; a <= num; a++) {
			//a = the starting point for counting upwards
			// a can't go any higher than the number
			// a is incremented up to show all the numbers counting up to the user's input number
			if (num % 1 !== 0) {
				alert("Only whole numbers please!");
				console.log(num);
			}
			else if(num == "") {
			   alert("Please enter a number!");
			   console.log(num);
	   		}
			else if(num > 20 || num < 0) {
				alert("Only numbers between 0 and 100.");
			}
			else {
			evaluateNum(a);
			//evaluates the number
			$(".results").append(a + "<br>");
			//appends the results to the div to print results
			
			}	
		}	
				
	});
var evaluateNum = function (num) {	
//evaluates the number inputed by the user
		
		    for(j=0; num > 0 && num <100;)  {	
		    //j=0 will be the value of the remainder of the number divided by 3 or 5
			if (j == num % 3 && j == num % 5) {
			// if 0 is the result of the number divided by 5 and 3 set the number equal to the string "FizzBuzz"
			    num = "FizzBuzz";
				$(".results").append(num);
				break
		    }
		    else if (j == num % 5) {
			//if 0 is the result of the number (user input) divided by 5 set the number equal to the string "Fizz"
			    num = "Fizz";
				$(".results").append(num);
				break
		    }
			else if (j == num % 3) {
			//if 0 is the result of the number (user input) divided by 3 set the number equal to the string "Buzz"	
				num = "Buzz";
				$(".results").append(num);
				break
			}
		    else {
				//otherwise evaluate the number equal to itself (+ " " makes it a number)
				num = +"num";
				$(".results").append(num);
				break
				
		   }
		}
}
	
});