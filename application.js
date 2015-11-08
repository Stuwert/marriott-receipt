$(document).ready(function(){


	$('.total_amount').on('click', function (){

		if($(this).find('.notification').text() == "Payment Received!"){

			$(this).css('background-color', '#ED474A');
			$(this).find('.notification').text('Payment Remaining: $60');
			$('.total p').css('color', "white");

		}else{
			$(this).css('background-color', '#4C9F70');
			$(this).find('.notification').text('Payment Received!');
			$('.total p').css('color', "#363635");
		}

	});


	var details = $(".hidden").detach();

	$(".zoom").on('click', function(){

		if (details){

			$(".zoom").after(details);
			details = null;

		}else{

			details = $(".hidden").detach();

		}


	});

});