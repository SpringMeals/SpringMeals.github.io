document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Obtener el precio del producto desde el atributo "data-precio"
      const precio = parseFloat(button.getAttribute("data-precio"));
      
      // Puedes personalizar el mensaje de la ventana emergente aquí
      const mensaje = `¡El producto se ha añadido a la orden!`;

      // Mostrar la ventana emergente
      alert(mensaje);
    });
  });
});
