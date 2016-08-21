var link = document.querySelector(".feedback");
var popup = document.querySelector(".modal-content-feedback");
var popupClose = document.querySelector(".modal-content-feedback__close");
var nameUser = popup.querySelector("[name=login]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-feedback-show");
	nameUser.focus();
});

popupClose.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-feedback-show");
});

window.addEventListener("keydown" ,function(event) {
	if (event.keyCode === 27) {
		popup.classList.remove("modal-content-feedback-show");
	}
});

