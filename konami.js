var konami = function(callback) {
	var targetSequence = '37393739383840406665',
		currentSequence = '',
		inputHandler = function(evnt) {
			currentSequence += evnt.keyCode.toString();
			console.log(currentSequence);
			if (targetSequence.indexOf(currentSequence) == 0) {
				if (currentSequence.length === targetSequence.length) {
					callback();
					currentSequence = '';
				}
			} else {
				currentSequence = '';
			}
		};
	
	if (window.addEventListener) {
		window.addEventListener('keydown', inputHandler, false);
	} else if (document.attachEvent) {
		document.attachEvent('onkeydown', inputHandler);
	}
};