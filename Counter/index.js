var count = 0;
var button = document.querySelectorAll('button');
button.forEach(function (button) {
	button.addEventListener('click', (e) => {
		const className = e.currentTarget.classList;
		if (className.contains('increment-counter')) {
			count++;
		} else if (className.contains('decrement-counter')) {
			count--
		} else {
			count = 0;
		}
		if (count > 0) {
			$('p').css('color', 'green');
		} else if (count < 0) {
			$('p').css('color', 'red');
		} else {
			$('p').css('color', 'black');
		}
		$('p').text(count);

	})
})