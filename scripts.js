$(document).ready(function(){
	// Animating progress bar
	var keys = [100, 50, 30, 20];
	var progressBars = {
					100: '#bar-windows, #bar-pl',
					 50: '#bar-html, #bar-git',
					 30: '#bar-css, #bar-rails',
					 20: '#bar-en, #bar-bootstrap, #bar-javascript, #bar-jq, #bar-linux'};

	for (var i = 0; i <= 3; i++) {
		$(progressBars[keys[i]]).stop().animate({
			width: keys[i].toString() + '%'
		});
	}
});