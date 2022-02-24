//prettier-ignore
document.addEventListener('DOMContentLoaded', function(event) {

	// Menu function

	window.addEventListener('click', (event) => {
		console.log('clicked');
	
		const hamburger = document.getElementById('hamburger');
		const sideMenu = document.querySelector('.side-menu__list');
	
		if (event.target != hamburger && event.target != sideMenu) {
			console.log('side menu off');
			sideMenu.style.display = 'none';
		} else {
			console.log('side menu off');
			sideMenu.style.display = 'block';
		}
	
		console.log(event.target);
	});


	// Scroll functions

	window.addEventListener('scroll', () => {
		const reveals = document.querySelectorAll('.reveal');

		for (let i = 0; i < reveals.length; i++) {
			let windowheight = window.innerHeight;
			let revealtop = reveals[i].getBoundingClientRect().top;
			let revealpoint = 150;

			if (revealtop < windowheight - revealpoint) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	});


	// Typewriter Effect


	// array with texts to type in typewriter
	let text = '';
	var dataText = [ 'Riihimäki.', 'Full Service.', 'Student & Graphic Designer', 'Looking for Internship' ];

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {

		// check if text isn't finished yet
		if (i <= text.length) {

			// add next character to h1
			document.querySelector('.code-text').innerHTML =
				text.substring(0, ++i) + '<span aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function() {
				typeWriter(text, ++i, fnCallback);
			}, 100);
			
		} else if (typeof fnCallback == 'function') {

			// text finished, call callback if there is a callback function
			// call callback after timeout
			setTimeout(fnCallback, 700);
		}
	}

	
	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {

		// check if array element is undefined
		if (typeof dataText[i] == 'undefined') {
			// then start the Text animation again
			setTimeout(function() {
				StartTextAnimation(0);
			}, 2000);

		} else if (i < dataText[i].length) {

			// check if dataText[i] exists
			// text exists! start typewriter animation
			typeWriter(dataText[i], 0, function() {

				// after callback (and whole text has been animated), start next text
				StartTextAnimation(++i);
			});
		}
	}

	// start the text animation
	if (document.querySelector('.code-text')) StartTextAnimation(0);
});
