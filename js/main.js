$(document).ready( function(){
	var nav = $('#nav-toggle');
	
	nav.click( function(e){
	e.preventDefault();
		var base = $(this);
		
		base.toggleClass('active');
		$('#nav').slideToggle();
	});
});