$('#div2').hide();
$(document).ready(function(){
	$('#div1').delay(1000).toggle('slide', {direction: 'right'}, 'slow');
	$('#div2').delay(1000).toggle('slide', {direction: 'left'}, 'slow');
});

$('#div4').hide();
$(document).ready(function(){
	$('#div3').delay(2000).toggle('slide', {direction: 'up'}, 'slow');
	$('#div4').delay(2000).toggle('slide', {direction: 'down'}, 'slow');
});

$('#div6').hide();
$(document).ready(function(){
	$('#div5').delay(3000).toggle('slide', {direction: 'left'}, 'slow');
	$('#div6').delay(3000).toggle('slide', {direction: 'right'}, 'slow');
});

$('#div8').hide();
$(document).ready(function(){
	$('#div7').delay(4000).toggle('slide', {direction: 'down'}, 'slow');
	$('#div8').delay(4000).toggle('slide', {direction: 'up'}, 'slow');
});
