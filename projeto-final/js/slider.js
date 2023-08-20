// PORTFOLIO SLIDER

var sliderContainer = document.querySelector(".ls-slider-container");
var sliderList = document.querySelector(".ls-slider-list");
var sliderItem = document.querySelectorAll(".ls-slider-item");
var currentSlide = document.querySelector(".ls-current-slide");
var totalSlide = document.querySelector(".ls-total-slide");
var prevItem = document.querySelector(".ls-item-prev");
var nextItem = document.querySelector(".ls-item-next");
var indexList = sliderItem.length - 1;
var pos = 0;
var itemNavigator = document.querySelectorAll(".ls-item-navigator a");
var counterNavigator = document.querySelector(".ls-navigator-counter span");

var containerWidth = sliderContainer.parentElement.offsetWidth;
var sliderListWidth = containerWidth * sliderItem.length;

var index = pos / containerWidth;

sliderContainer.style.width = containerWidth + "px";

for (let i = 0; i < sliderItem.length; i++) {
	sliderItem[i].style.width = containerWidth + "px";
}

sliderList.style.width = sliderListWidth + "px";

//HANDLERS

//Atual index of the slider list
var findAtualIndex = () => {
    return -1 * (pos / containerWidth);
}

//Next slider animation
var nextSlideAnimation = () => {
	if (pos <= containerWidth * indexList * -1) {
		return;
	}

	pos -= containerWidth;

	anime({
		targets: sliderList,
		translateX: pos,
		easing: 'cubicBezier(0,1.01,.32,1)'
	});
};

//Previous slider animation
var prevSlideAnimation = () => {
	if (pos >= 0) {
		return;
	}
	pos += containerWidth;

	anime({
		targets: sliderList,
		translateX: pos,
		easing: 'cubicBezier(0,1.01,.32,1)'
	});
};

//Slide box animation
var slideBoxAnimation = currentSlide => {
	var currentSlideBox = currentSlide.querySelector(".ls-portfolio-item-box");
	currentSlideBox.classList.add("ls-scale-right");
}

//Grow item bar navigator
var growItemNavigator = currentItemNavigator => {
	anime({
			targets: currentItemNavigator,
			width: 90,
			easing: 'cubicBezier(0,1.01,.32,1)'
		});
};

// Shrink item bar navigator
var shrinkItemNavigator = itemNavigatorToRemove => {
	anime({
		targets: itemNavigatorToRemove,
		width: 20,
		easing: 'cubicBezier(0,1.01,.32,1)'
	});
};

//Set active nav
var rechangeCurrentItemNavigator = () => {
    var itemNavigatorToRemove = document.querySelector(".ls-item-active");
	shrinkItemNavigator(itemNavigatorToRemove);
	itemNavigatorToRemove.classList.remove("ls-item-active");

	var currentItemNavigator = itemNavigator[findAtualIndex()];
    currentItemNavigator.classList.add("ls-item-active");
	growItemNavigator(currentItemNavigator);
}

//Set active slide
var rechangeCurrentSlide = () => {
    var slideToRemove = document.querySelector(".ls-slide-active");
	var slideAnimationToRemove = document.querySelector(".ls-scale-right");
	
	slideToRemove.classList.remove("ls-slide-active");
	slideAnimationToRemove.classList.remove("ls-scale-right");

	var currentSlide = sliderItem[findAtualIndex()];
    currentSlide.classList.add("ls-slide-active");
	slideBoxAnimation(currentSlide);
}

//Counter formatter to two digits
var counterFormatter = (n) => {
	if (n < 10) {
		return "0" + n;
	} else {
		return n;
	}
};

var addCount = () => {
	let atualSlidePosition = findAtualIndex() + 1;
	return counterFormatter(atualSlidePosition);
};

var subtractCount = () => {
	let atualSlidePosition = findAtualIndex() + 1;
	return counterFormatter(atualSlidePosition);
};

var rechangeCounterNavigator = () => {
	let atualIndex = findAtualIndex() + 1;
	counterNavigator.innerHTML = counterFormatter(atualIndex);
}

//ACTIONS

totalSlide.innerHTML = counterFormatter(sliderItem.length);

rechangeCounterNavigator();

anime({
	targets: ".ls-item-active",
	width: 90
});

nextItem.addEventListener("click", () => {
	nextSlideAnimation();
	currentSlide.innerHTML = addCount();
    rechangeCurrentItemNavigator();
	rechangeCounterNavigator();
	rechangeCurrentSlide();
});

prevItem.addEventListener("click", () => {
	prevSlideAnimation();
	currentSlide.innerHTML = subtractCount();
    rechangeCurrentItemNavigator();
	rechangeCounterNavigator();
	rechangeCurrentSlide();
});
