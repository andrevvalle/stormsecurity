$(document).ready( function(){
	var nav = $('#nav-toggle');
	
	nav.click( function(){
		var base = $(this);
		base.toggleClass('active');
		$('#nav').slideToggle();
	});
});
