// ! ========================== Navbar Toggling ===========================
var toggleButtonNav = document.querySelector("header nav .toggle-menu");
var navBar = document.querySelector("header nav ul ");

toggleButtonNav.addEventListener("click", function () {
  navBar.classList.toggle("visible");
});
// ! ========================== Form Toggling ===========================
// ? ==== Sign In ====
var signinBtns = document.querySelectorAll("#signinBtn");
var signin = document.getElementById("form-page-signin");
for (var i = 0; i < signinBtns.length; i++) {
  var btn = signinBtns[i];
  btn.addEventListener("click", function () {
    signin.classList.add("open");
  });
}
var cls = document.getElementById("clsignin");
cls.onclick = function () {
  signin.classList.remove("open");
};
// ? ==== Sign UP ====
var signupBtns = document.querySelectorAll("#signupBtn");
var signup = document.getElementById("form-page-signup");
for (var i = 0; i < signupBtns.length; i++) {
  var btn = signupBtns[i];
  btn.addEventListener("click", function () {
    signup.classList.add("open");
  });
}
var cls = document.getElementById("clsignup");
cls.onclick = function () {
  signup.classList.remove("open");
};
var swapsin = document.getElementById("swapsin")
swapsin.onclick = function () {
  signin.classList.remove("open")
  signup.classList.add("open")
}
var swapsup = document.getElementById("swapsup")
swapsup.onclick = function () {
  signup.classList.remove("open")
  signin.classList.add("open")
}







