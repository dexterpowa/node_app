// Bs3 tooltip functions, config
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip({
		title: "Show code",
		delay: { "show": 250, "hide": 250 },
		placement: "right"
	});

	// set ids, then toggle elements
	$(".my-pre").each(function(i) {
		$(this).css('display', 'none');
		$(this).attr('id', 'pre-id-' + i);
		console.log($(this).attr("id"));
	});
	$(".fa-cogs").each(function(i) {
		$(this).attr('id', 'cog-id-' + i);
		console.log($(this).attr("id"));

		$("#cog-id-" + i).on("click",function() {
			$("#pre-id-" + i).fadeToggle(600);
		});
	});

});


