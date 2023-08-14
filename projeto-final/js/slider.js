// PORTFOLIO SLIDER

var sliderContainer = document.querySelector(".ls-slider-container");
var sliderList = document.querySelector(".ls-slider-list");
var sliderItem = document.querySelectorAll(".ls-slider-item");

var containerWidth = sliderContainer.parentElement.offsetWidth;
var sliderListWidth = containerWidth * sliderItem.length;

sliderContainer.style.width = containerWidth + "px";

for (let i = 0; i < sliderItem.length; i++) {
	sliderItem[i].style.width = containerWidth + "px";
}

sliderList.style.width = sliderListWidth + "px";

//Slider onClick animation

var prevItem = document.querySelector(".ls-item-prev");
var nextItem = document.querySelector(".ls-item-next");
var indexList = sliderItem.length - 1;
var pos = 0;

//HANDLERS

//Next slider animation
var nextSliderAnimation = () => {
	if (pos <= containerWidth * indexList * -1) {
		return;
	}

	pos -= containerWidth;

	anime({
		targets: sliderList,
		translateX: pos,
	});
};

//Previous slider animation
var prevSliderAnimation = () => {
	if (pos >= 0) {
		return;
	}
	pos += containerWidth;

	anime({
		targets: sliderList,
		translateX: pos,
	});
};

nextItem.addEventListener("click", () => {
    nextSliderAnimation();
});

prevItem.addEventListener("click", () => {
    prevSliderAnimation();
});
