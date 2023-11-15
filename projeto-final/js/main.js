var btnContact = document.querySelector(".ls-btn-contact");
var contactToggle = document.querySelectorAll(".ls-contact-toggle");
var transparentOverlay = document.querySelector(".ls-transparent-overlay");
var toggleModal = document.querySelectorAll(".ls-toggle-modal");
var toggleMenu = document.querySelectorAll(".ls-toggle-menu-mobile");
var menuMobile = document.querySelector(".ls-menu-mobile");
var btnMenuMobileIcon = document.querySelector(".ls-btn-menu-mobile ion-icon");

//Preloader
window.addEventListener("load", () => {
	var pagePreloader = document.querySelector(".ls-preloader-inner");
	pagePreloader.classList.add("ls-fade-out");
	setTimeout(() => {
		pagePreloader.style.display = "none";
	}, 1000);
});

//Show box contact
contactToggle.forEach(c => {
	c.addEventListener("click", () => {
		var boxInfo = document.querySelector(".ls-contact-info");
		boxInfo.classList.toggle("ls-is-open");
		transparentOverlay.classList.toggle("ls-is-open");

		if (c.classList.contains("ls-btn-contact")) {
			c.classList.toggle("ls-change-position-icon");		
		}
	})
})

//Open and close menu mobile and overlay 
toggleMenu.forEach(t => {
	t.addEventListener("click", () => {
		var menuOverlay = document.querySelector(".ls-menu-mobile-overlay");
		menuMobile.classList.toggle("ls-menu-mobile-is-closed");
		menuMobile.classList.toggle("ls-menu-mobile-is-open");
		menuOverlay.classList.toggle("ls-is-open");

		var icon = btnMenuMobileIcon.getAttribute("name");
		if (icon == "menu") {
			btnMenuMobileIcon.setAttribute("name", "close");
		} else {
			btnMenuMobileIcon.setAttribute("name", "menu");
		}
	})
})

//Open and close modal and overlay
for (let i = 0; i < toggleModal.length; i++) {
	toggleModal[i].addEventListener("click", () => {
		var overlay = document.querySelector(".ls-overlay");
		var budgetModal = document.querySelector("#ls-budget-modal");

		overlay.classList.toggle("ls-is-open");
		budgetModal.classList.toggle("ls-is-open");
	});
}

//Animation on trigger topbar
var triggerTopbar = document.querySelector(".ls-trigger-topbar");
var topbar = document.querySelector(".ls-topbar");
var logo = document.querySelector(".ls-logo");
var waypoint = new Waypoint({
	element: triggerTopbar,
	handler: function () {
		topbar.classList.toggle("ls-topbar-bg");
		logo.classList.toggle("ls-logo-shorten");
		logo.classList.toggle("ls-logo-extended");
	},
	offset: "70px"
});