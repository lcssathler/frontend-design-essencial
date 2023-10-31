var postGallery = document.querySelector(".ls-post-gallery");
var galleryImages = document.querySelectorAll(".ls-thumb-img");
var overlay = document.querySelector(".ls-overlay");
var galleryFrameContainer;
var galleryFrameInner = document.querySelector(".ls-gallery-frame-inner");
var frameImg = document.querySelector(".ls-gallery-frame-img");
var toggleGallery = document.querySelectorAll(".ls-toggle-gallery");
var currentGalleryImage = null;
var prevBtn = document.querySelector(".ls-item-prev");
var nextBtn = document.querySelector(".ls-item-next");
var currentCounter = document.querySelector(".ls-current-image");
var totalCounter = document.querySelector(".ls-total-image");
var skeletonLoading = document.querySelector(".ls-skeleton-loading");

totalCounter.innerHTML = galleryImages.length;

//Manage it - excluding blank space under gallery
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = postGalleryHeight - 270 + "px";

//Parallel
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

//Counter formatter
var counterFormatter = (n) => {
  n++;
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
};

//Open overlay
var openOverlay = () => {
  overlay.classList.add("ls-is-open");
  galleryFrameInner.classList.add("ls-is-open");
};

//Close overlay
var closeOverlay = () => {
  overlay.classList.remove("ls-is-open");
  galleryFrameInner.classList.remove("ls-is-open");
};

//Set gallery image
var setImage = (item) => {
  let galleryItemSrc = item.getAttribute("src");
  frameImg.setAttribute("src", galleryItemSrc);
};

//Close skeleton
var closeSkeleton = (galleryImage) => {
  var myImage = new Image();
  myImage.src = galleryImage.getAttribute("src");
  myImage.addEventListener("load", () => {
    skeletonLoading.classList.add("ls-fade-out");
    setTimeout(() => {
      skeletonLoading.style.display = "none";
    }, 1000);
  });
};

for (let i = 0; i < galleryImages.length; i++) {
  let item = galleryImages[i];
  item.addEventListener("click", () => {
    openOverlay();
    skeletonLoading.style.display = "flex";

    currentGalleryImage = item;
    setImage(currentGalleryImage);
    currentCounter.innerHTML = counterFormatter(i);

    closeSkeleton(currentGalleryImage);
  });
}

prevBtn.addEventListener("click", () => {
  var index = parseInt(currentGalleryImage.getAttribute("data-index"));
  if (index == 0) {
    currentGalleryImage = galleryImages[0];
    currentCounter.innerHTML = counterFormatter(index);
    return;
  }

  skeletonLoading.style.display = "flex";
  currentGalleryImage = galleryImages[index - 1];
  currentCounter.innerHTML = counterFormatter(index - 1);
  setImage(currentGalleryImage);
  closeSkeleton(currentGalleryImage);
});

nextBtn.addEventListener("click", () => {
  var index = parseInt(currentGalleryImage.getAttribute("data-index"));
  var lastIndex = galleryImages.length - 1;
  if (index == lastIndex) {
    currentGalleryImage = galleryImages[11];
    currentCounter.innerHTML = counterFormatter(index);
    return;
  }

  skeletonLoading.style.display = "flex";
  currentGalleryImage = galleryImages[index + 1];
  currentCounter.innerHTML = counterFormatter(index + 1);
  setImage(currentGalleryImage);
  closeSkeleton(currentGalleryImage);
});

for (let item of toggleGallery) {
  item.addEventListener("click", () => {
    closeOverlay();
  });
}