var btnContact = document.querySelector('.ls-btn-contact');

btnContact.addEventListener("click", function() {
    var boxInfo = document.querySelector(".ls-contact-info");
    boxInfo.classList.toggle("ls-is-open");
    this.classList.toggle("ls-change-position-icon");
})