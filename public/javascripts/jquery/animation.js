// Bs3 tooltip functions, config
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip({
		title: "Show code",
		delay: { "show": 250, "hide": 250 },
		placement: "right"
	});

	// set ids, then toggle elements
	console.log('CODE BLOCKS:');
	$(".my-pre").each(function(i) {
		$(this).css('display', 'none');
		$(this).attr('id', 'pre-id-' + i);
		console.log($(this).attr("id"));
	});
	console.log('COGS:');
	$(".fa-cogs").each(function(i) {
		$(this).attr('id', 'cog-id-' + i);
		console.log($(this).attr("id"));

		$("#cog-id-" + i).on("click",function() {
			$("#pre-id-" + i).fadeToggle(600);
		});
	});

	// set ids on result pharagraphs and buttons
	console.log('RESULTS:');
	$(".result").each(function(i) {
		$(this).attr('id', 'result-id-' + i);
		console.log($(this).attr("id"));
	});
	console.log('BUTTONS:');
	$(".btn-primary").each(function(i) {
		$(this).attr('id', 'primary-id-' + i);
		console.log($(this).attr("id"));
	});
	$("#primary-id-8").on("click", function() {
		$("#result-id-0").fadeToggle(600);
	});

});
