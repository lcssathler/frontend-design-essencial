var galleryImages = document.querySelectorAll(".ls-thumb-img");
var overlay = document.querySelector(".ls-overlay");
var galleryFrameContainer
var galleryFrameInner = document.querySelector(".ls-gallery-frame-inner");
var frameImg = document.querySelector(".ls-gallery-frame-img");

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

var openOverlay = (galleryItem) => {
	overlay.classList.add("ls-is-open")
    galleryFrameInner.classList.add("ls-is-open");

	let galleryItemSrc = galleryItem.getAttribute("src");
	frameImg.setAttribute("src", galleryItemSrc);
};

for (const item of galleryImages) {
	item.addEventListener("click", () => {
		openOverlay(item);
	});
}
