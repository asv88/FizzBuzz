// JavaScript Document

$(document).ready(function () {
	$(".container").submit(function (e) {
		e.preventDefault();
	});
	
	$(".NTRfield").on("click", ".btn", function () {
		var count = $(".typeNumber").val();
	    for(j=0; count < 100;) {	
		    if (j == count % 5 && j == count % 3) {
			    $("<p>FizzBuzz</p>").appendTo(".results");
				break
		    }
		    else if (j == count % 5) {
			    $("<p>Buzz</p>").appendTo(".results");	
				break
		    }
			else if (j == count % 3) {
				$("<p>Fizz</p>").appendTo(".results");	
				break
			}
		    else {
				$("<p>"+count+"</p>").appendTo(".results");
				break
		   }
	   }
	})
	
	
});