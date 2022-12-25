// ! ========================== Navbar Toggling ===========================
var toggleButtonNav = document.querySelector("header nav .toggle-menu");
var navBar = document.querySelector("header nav ul ");

toggleButtonNav.addEventListener("click", function () {
    navBar.classList.toggle("visible")
});
