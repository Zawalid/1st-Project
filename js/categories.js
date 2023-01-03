// ! ========================== Product Quantity Button ===========================
const quantityContainers = document.querySelectorAll(".quantity-container");

quantityContainers.forEach((container) => {
  const decrementButton = container.querySelector(".decrement");
  const incrementButton = container.querySelector(".increment");
  const quantityInput = container.querySelector(".quantity");
  const maxQuantity = parseInt(quantityInput.getAttribute("max"), 10);
  const minQuantity = parseInt(quantityInput.getAttribute("min"), 10);

  decrementButton.addEventListener("click", () => {
    let newQuantity = parseInt(quantityInput.value, 10) - 1;
    if (newQuantity < minQuantity) {
      newQuantity = minQuantity;
    }
    quantityInput.value = `${newQuantity}`;
  });

  incrementButton.addEventListener("click", () => {
    let newQuantity = parseInt(quantityInput.value, 10) + 1;
    if (newQuantity > maxQuantity) {
      newQuantity = maxQuantity;
    }
    quantityInput.value = `${newQuantity}`;
  });
});

// ! ========================== SideBar Toggling ===========================

var toggleButton = document.querySelector(".toggle-sidebar");
var sidebar = document.querySelector(".sidebar");
var catgs = document.querySelectorAll(".sidebar ul a")
toggleButton.addEventListener("click", function () {
  // Toggle the "visible" class on the sidebar
  sidebar.classList.toggle("visible");
});

var hideButton = document.querySelector(".hide-sidebar");

hideButton.addEventListener("click", function () {
  // Remove the "visible" class from the sidebar
  sidebar.classList.remove("visible");
});

for (let i = 0; i < catgs.length; i++) {
  catgs[i].addEventListener("click", function () {
    sidebar.classList.remove("visible");
  });
}