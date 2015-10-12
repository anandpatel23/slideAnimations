// smooth sliding

$( document ).ready(function() {
	$('#div2, #div3, #div4, #div5, #div6, #div7, #div8').hide();
	// transition left
	$('#div1').delay(1000).toggle('slide', {direction: 'left'}, 'slow');
        $('#div2').delay(1000).toggle('slide', {direction: 'right'}, 'slow');
    
    	// transition left
   	$('#div2').delay(1500).toggle('slide', {direction: 'left'}, 'slow');
    	$('#div3').delay(3100).toggle('slide', {direction: 'right'}, 'slow');

    	// transition up
    	$('#div3').delay(1700).toggle('slide', {direction: 'up'}, 'slow');
    	$('#div4').delay(5400).toggle('slide', {direction: 'down'}, 'slow');
});
