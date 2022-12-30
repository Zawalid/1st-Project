// ! ========================== Navbar Toggling ===========================
var toggleButtonNav = document.querySelector("header nav .toggle-menu");
var navBar = document.querySelector("header nav ul ");

toggleButtonNav.addEventListener("click", function () {
  navBar.classList.toggle("visible");
});
// ! ========================== Form Toggling ===========================

var btns = document.querySelectorAll("#myBtn");

// Get the modal
var modal = document.getElementById("form-page");
// When the user clicks on the button, open the modal
for (var i = 0; i < btns.length; i++) {
  // Get the current button
  var btn = btns[i];

  // Add a click event listener to the button
  btn.addEventListener("click", function () {
    // Toggle the display of the form
    modal.classList.add("open")
  });
}
var cls = document.getElementsByClassName("close")[0];

cls.onclick = function () {
    modal.classList.remove("open")
};
