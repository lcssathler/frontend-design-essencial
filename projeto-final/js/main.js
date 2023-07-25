var btnContact = document.querySelector('.ls-btn-contact');

window.addEventListener("load",  () => {
    var pagePreloader = document.querySelector(".ls-preloader-inner");
    setTimeout(() => {
        pagePreloader.classList.add("ls-fade-out");
    }, 5000)
    
})

btnContact.addEventListener("click", function() {
    var boxInfo = document.querySelector(".ls-contact-info");
    boxInfo.classList.toggle("ls-is-open");
    this.classList.toggle("ls-change-position-icon");
})