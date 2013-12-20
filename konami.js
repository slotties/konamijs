var konami = function(callback) {
	var targetSequence = [ 37, 39, 37, 39, 38, 38, 40, 40, 66, 65 ],
		currentSequenceIndex = 0,
		inputHandler = function(evnt) {
			var expectedKeyCode = targetSequence[currentSequenceIndex];
			if (expectedKeyCode === evnt.keyCode) {
				if (currentSequenceIndex === targetSequence.length - 1) {
					callback();
					currentSequenceIndex = 0;
				} else {
					currentSequenceIndex++;
				}
			} else {
				currentSequenceIndex = 0;
			}
		};
	
	if (window.addEventListener) {
		window.addEventListener('keydown', inputHandler, false);
	} else if (document.attachEvent) {
		document.attachEvent('onkeydown', inputHandler);
	}
};
