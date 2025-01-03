var isOpen = false;

function closeMobileView() {
    if (isOpen) {
        openMobileNav()
    }
}

function openMobileNav() {
    mobilenav.classList.remove("closed", "open");
    if (isOpen) {
        mobilenav.classList.add("closed");
        hamburger.src = "assets/graphics/hamburger.svg"
        isOpen = false;
    } else {
        mobilenav.classList.add("open");
        hamburger.src = "assets/graphics/x.svg"
        isOpen = true;
    }
} 