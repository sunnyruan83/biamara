$('#hideshow').toggle(function() {
	$('#hideshow').text('Read less');
	$('#message').show();
}, function(){
	$('#hideshow').text('Read more');
	$('#message').hide();
});