var galleryImages = document.querySelectorAll(".ls-thumb-img");
var overlay = document.querySelector(".ls-overlay");
var galleryFrameContainer
var galleryFrameInner = document.querySelector(".ls-gallery-frame-inner");
var frameImg = document.querySelector(".ls-gallery-frame-img");
var toggleGallery = document.querySelectorAll(".ls-toggle-gallery");
var currentGalleryImage = null;
var prevBtn = document.querySelector(".ls-item-prev");
var nextBtn = document.querySelector(".ls-item-next");

var currentImage = document.querySelector(".ls-current-image");
var totalImage = document.querySelector(".ls-total-image");

AOS.init();
var rellax = new Rellax(".rellax");

for (const element of galleryImages) {
	new Waypoint.Inview({
		element: element,
		entered: function () {
			let fullImg = this.element.getAttribute("data-src");
			this.element.setAttribute("src", fullImg);
		},
	});
}


//HANDLERS

var openOverlay = () => {
	overlay.classList.add("ls-is-open")
    galleryFrameInner.classList.add("ls-is-open");
};

var closeOverlay = () => {
	overlay.classList.remove("ls-is-open");
    galleryFrameInner.classList.remove("ls-is-open");
}

var setImage = item => {
	let galleryItemSrc = item.getAttribute("src");
	frameImg.setAttribute("src", galleryItemSrc);
}

var counterFormatter = (n) => {
	n++;
	if (n < 10) {
		return "0" + n;
	} else {
		return n;
	}
};

for (let i = 0; i < galleryImages.length; i++) {
	let item = galleryImages[i];
	item.addEventListener("click", () => {
		openOverlay();
		currentGalleryImage = item;
		setImage(currentGalleryImage);
		currentImage.innerHTML = counterFormatter(i);
	});
}

prevBtn.addEventListener("click", () => {
	var index = parseInt(currentGalleryImage.getAttribute("data-index"));
	if (index >= 1) {
		currentGalleryImage = galleryImages[index - 1];	
		currentImage.innerHTML = counterFormatter(index - 1);
	} else {
		currentGalleryImage = galleryImages[0];
		currentImage.innerHTML = counterFormatter(index);
	}
	setImage(currentGalleryImage);
})

nextBtn.addEventListener("click", () => {
	var index = parseInt(currentGalleryImage.getAttribute("data-index"));
	if (index < 11) {
		currentGalleryImage = galleryImages[index + 1];	
		currentImage.innerHTML = counterFormatter(index + 1);
	} else {
		currentGalleryImage = galleryImages[11];
		currentImage.innerHTML = counterFormatter(index);
	}
	setImage(currentGalleryImage);
})
 
for (let item of toggleGallery) {
	item.addEventListener("click", () => {
		closeOverlay();
	});
}