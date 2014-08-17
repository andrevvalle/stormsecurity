$(document).ready( function(){
	var nav = $('#nav-toggle');
	
	nav.click( function(e){
	e.preventDefault();
		var base = $(this);
		
		base.toggleClass('active');
		$('#nav').slideToggle();
	});

});
// AJAX CONTENT
function init() {

	var primeiraurl = $('a.ajax:first-child').attr('href');
	
	// var urlnext = $('.ulajax li a.active').closest('li').next().find('a').attr('href');
	// var urlprev = $('.ulajax li a.active').closest('li').prev().find('a').attr('href');

	changePage(primeiraurl);

	$(document).on('click', 'a.ajax', function(e){ 

	$('.ulajax li a.active').removeClass('active');
	$(this).addClass('active');

	e.preventDefault();
	var url = $(this).attr('href');
	$('#appContent').fadeOut();
	changePage(url);

	});
}
function changePage(urlPage){

    loading('open');

    setTimeout(function(){
      $.ajax({
        type: 'GET',
        url: urlPage,
        context: $('#appContent'),
        success: function(data){

          this.html(data).fadeIn();
          loading('close');

        },
        error: function(xhr, type){
          console.log('erro no ajax');
        }
      })
    }, 500);
}
function loading(acao){
    if (acao == 'open') {
        $('#loading').fadeIn('fast'); 
    }else{
        $('#loading').fadeOut('fast');
    };
}