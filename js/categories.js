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

toggleButton.addEventListener("click", function () {
  // Toggle the "visible" class on the sidebar
  sidebar.classList.toggle("visible");
});

var hideButton = document.querySelector(".hide-sidebar");

hideButton.addEventListener("click", function () {
  // Remove the "visible" class from the sidebar
  sidebar.classList.remove("visible");
});
// ! ========================== SideBar Toggling ===========================

// Initialize the sliders
const sliders = document.querySelectorAll(".product-slider");

for (let i = 0; i < sliders.length; i++) {
  createSlider(sliders[i]);

  function createSlider(slider) {
    // Select the arrow buttons and product items for this slider
    const leftArrow = slider.querySelectorAll(".arrow.left");
    const rightArrow = slider.querySelectorAll(".arrow.right");
    const items = slider.querySelectorAll(".product-slider .slide");

    // Initialize variables to track the current item and item width
    let currentItem = 0;
    const itemWidth = items[0].offsetWidth;

    // Add event listeners to the arrow buttons
    leftArrow.addEventListener("click", function () {
      currentItem = Math.max(currentItem - 1, 0);
      slider.scrollTo({
        left: currentItem * itemWidth,
        behavior: "smooth",
      });
    });

    rightArrow.addEventListener("click", function () {
      currentItem = Math.min(currentItem + 1, items.length - 1);
      slider.scrollTo({
        left: currentItem * itemWidth,
        behavior: "smooth",
      });
    });
  }
}
