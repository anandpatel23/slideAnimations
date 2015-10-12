// requires jQuery 1.9.1 & jQuery UI 1.9.2
$(document).ready(function(){
	$('#div2, #div3, #div4, #div5, #div6, #div7, #div8').hide();
	$('div1').delay(1000).toggle('slide', {direction: 'left'}, 'slow');
	$('div2').delay(1000).toggle('slide', {direction: 'right'}, 'slow');
	$('div2').delay(1400).toggle('slide', {direction: 'left'}, 'slow');
	$('div3').delay(3000).toggle('slide', {direction: 'right'}, 'slow');
});
