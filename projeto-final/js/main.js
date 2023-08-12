var btnContact = document.querySelector(".ls-btn-contact");
var toggleModal = document.querySelectorAll('.ls-toggle-modal');

//Preloader
window.addEventListener("load", () => {
	var pagePreloader = document.querySelector(".ls-preloader-inner");
	pagePreloader.classList.add("ls-fade-out");
	setTimeout(() => {
		pagePreloader.style.display = "none";
	}, 2000);
});

//Show box contact
btnContact.addEventListener("click", function () {
	var boxInfo = document.querySelector(".ls-contact-info");
	boxInfo.classList.toggle("ls-is-open");
	this.classList.toggle("ls-change-position-icon");
});

//Open and close modal and overlay
for(i = 0; i < toggleModal.length; i++) {
	toggleModal[i].addEventListener('click', () => {
		var overlay = document.querySelector('.ls-overlay')
		var budgetModal = document.querySelector('#ls-budget-modal');

		overlay.classList.toggle("ls-is-open");
		budgetModal.classList.toggle("ls-is-open");
	})
}

//Animation on scroll
var myScrollDown = document.querySelector('.ls-scroll-down');
var waypoint = new Waypoint(
	{
		element: myScrollDown,
		handler: function() {
			myScrollDown.classList.toggle('ls-fade-out');
  		},
		offset: '80%'
	}
);

// PORTFOLIO SLIDER

var sliderContainer = document.querySelector(".ls-slider-container");
var sliderList = document.querySelector(".ls-slider-list");
var sliderItem = document.querySelectorAll(".ls-slider-item");

var containerWidth = sliderContainer.parentElement.offsetWidth;
var sliderListWidth = containerWidth * sliderItem.length;
console.log(sliderListWidth);

sliderContainer.style.width = containerWidth + "px";

for(let i = 0; i < sliderItem.length; i++) {
	sliderItem[i].style.width = containerWidth + "px";
}

sliderList.style.width = sliderListWidth + "px";

