var mobile_navbar = document.getElementById("nav-container-sm")

function open_mobile_navbar() {
    if (mobile_navbar.classList.contains("active") == false) {
        mobile_navbar.classList.add("active");
    }
}

function close_mobile_navbar() {
    if (mobile_navbar.classList.contains("active") == true) {
        mobile_navbar.classList.remove("active");
    }
}