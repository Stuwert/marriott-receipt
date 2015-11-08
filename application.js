$(document).ready(function(){

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