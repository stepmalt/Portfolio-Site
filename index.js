var isOpen = false;

function openMobileNav() {
    mobilenav.classList.remove("closed", "open");
    if (isOpen) {
        mobilenav.classList.add("closed");
        isOpen = false;
    } else {
        mobilenav.classList.add("open");
        isOpen = true;
    }
} 