$(document).ready(function(){
	// Animating progress bar
	var keys = [100, 80, 50, 30, 20];
	var progressBars = {
					100: '#bar-windows, #bar-pl',
					 80: '#bar-html',
					 50: '#bar-git, #bar-css',
					 30: '#bar-en, #bar-rails, #bar-linux',
					 20: '#bar-bootstrap, #bar-javascript, #bar-jq, #bar-adobe, #bar-sql'};

	for (var i = 0; i <= 4; i++) {
		$(progressBars[keys[i]]).stop().animate({
			width: keys[i].toString() + '%'
		});
	}
});