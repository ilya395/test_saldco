/*  */
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
	showSlides(slideIndex += 1);
}
function previousSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("layer-slider__background");
	var dots = document.getElementsByClassName("control-dots__item");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active", "");
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}
/*  */
function valid(form) {
	var fail = false;
	var name = form.name.value;
	var eMail = form.email.value;
	var subject = form.subject.value;
	var message = form.message.value;

	patternName	= /^[а-яёА-ЯЁ\s]+$/;
	patternMail	= /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;
	patternSpam	= /[^\<\>\[\]%\&'`]+$/;

	if (patternName.test(name) == false) {
		fail = "Введите другое имя!";
	} else if (patternMail.test(eMail) == false) {
		fail = "Введите другой адрес!";
	} else if (patternName.test(subject) == false) {
		fail = "Введите другое название сообщения!";
	} else if (patternSpam.test(message) == false) {
		fail = "Введите другое сообщениe!";
	}

	if (fail) {
		alert(fail);
	}
}
