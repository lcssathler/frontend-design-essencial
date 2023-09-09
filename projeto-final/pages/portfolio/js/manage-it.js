var galleryItems = document.querySelectorAll(".ls-post-gallery img");
var overlay = document.querySelector(".ls-overlay");
var galleryFrameImg = document.querySelector(".ls-gallery-frame-img");

AOS.init();
var rellax = new Rellax(".rellax");

for (var i = 0; i < galleryItems.length; i++) {
	new Waypoint.Inview({
		element: galleryItems[i],
		entered: function () {
			let fullImg = this.element.getAttribute("data-src");
			this.element.setAttribute("src", fullImg);
		},
	});
}

var openOverlay = () => {
	overlay.style.display = "block";
    galleryFrameImg.style.display = "block";
};

for (let i = 0; i < galleryItems.length; i++) {
	galleryItems[i].addEventListener("click", () => {
		console.log(galleryItems[i]);
		openOverlay();
	});
}
