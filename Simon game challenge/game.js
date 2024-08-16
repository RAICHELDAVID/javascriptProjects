$(document).ready(function () {
	var gamePattern = [];
	const buttonColors = ["red", "blue", "green", "yellow"];
	var userClikedPattern = [];
	var level = 0;

	$(document).on('keypress', () => {
		nextSequence();

	})

	function checkAnswer(currentLevel) {
		if (gamePattern[currentLevel] == userClikedPattern[currentLevel]) {
			if (gamePattern.length == userClikedPattern.length) {
				setTimeout(() => {
					nextSequence()
				}, 1000)
			}
		} else {
			playSound("wrong");
			$('h1').text('Game Over, Press Any Key to Restart');
			$('body').addClass('game-over');
			setTimeout(() => {
				$('body').removeClass('game-over');
			}, 200)
			level = 0;
			gamePattern = [];
		}
	}

	function nextSequence() {
		userClikedPattern = [];
		const randomNumber = Math.floor(Math.random() * 4);
		const randomChosenColor = buttonColors[randomNumber];
		level++;
		$('h1').text('Level ' + level);
		gamePattern.push(randomChosenColor);
		console.log(gamePattern);
		$("#" + randomChosenColor)
			.fadeIn(100)
			.fadeOut(100)
			.fadeIn(100);
		playSound(randomChosenColor);
	}
	$('.btn').click(function () {
		var userChosenColor = $(this).attr("id");
		playSound(userChosenColor);
		animatePress(userChosenColor);

		userClikedPattern.push(userChosenColor);
		console.log(userClikedPattern);
		var lastIndex = userClikedPattern.length - 1;
		checkAnswer(lastIndex);

	})

	function playSound(colorName) {
		var url = "sounds/" + colorName + ".mp3";
		const audio = new Audio(url);
		audio.play();
	}

	function animatePress(currentColor) {
		$("#" + currentColor).addClass('pressed');
		setTimeout(() => {
			$("#" + currentColor).removeClass('pressed');
		}, 100)
	}

});