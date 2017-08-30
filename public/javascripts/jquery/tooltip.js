// Bs3 tooltip functions, config
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip({
		title: "Show code",
		delay: { "show": 300, "hide": 250 },
		placement: "right"
	});
});