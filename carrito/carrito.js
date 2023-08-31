document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const productContainer = button.closest(".item");
      const productName = productContainer.querySelector(".name").textContent;
      const productDescription = productContainer.querySelector(".des").textContent;
      const productPrice = productContainer.querySelector(".precio").textContent;
      
      const redirectURL = `carrito.html?name=${encodeURIComponent(productName)}&description=${encodeURIComponent(productDescription)}&price=${encodeURIComponent(productPrice)}`;
      window.location.href = redirectURL;
    });
  });  
});
