document.addEventListener("DOMContentLoaded", function () {
    const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
    const btnRegistrarse = document.getElementById("btn__registrarse");
    const formularioLogin = document.querySelector(".formulario__login");
    const formularioRegister = document.querySelector(".formulario__register");

    // Variables para almacenar el nombre de usuario
    let nombreUsuario = "";

    // Función para mostrar la ventana de bienvenida
    function mostrarVentanaBienvenida() {
        alert(`Bienvenido, ${nombreUsuario}!`);
        // Redirigir al usuario al index después de aceptar el mensaje
        window.location.href = "index.html";
    }

    // Función para mostrar el mensaje de "Bueno verte"
    function mostrarMensajeBuenoVerte() {
        alert(`Bueno verte de nuevo, ${nombreUsuario}!`);
        // Redirigir al usuario al index después de aceptar el mensaje
        window.location.href = "index.html";
    }

    btnIniciarSesion.addEventListener("click", function () {
        formularioLogin.style.display = "block";
        formularioRegister.style.display = "none";
    });

    btnRegistrarse.addEventListener("click", function () {
        formularioLogin.style.display = "none";
        formularioRegister.style.display = "block";
    });

    // Agregar evento para el formulario de registro
    formularioRegister.addEventListener("submit", function (event) {
        event.preventDefault();
        // Obtener el nombre de usuario del formulario
        const inputUsuario = formularioRegister.querySelector('input[type="text"]');
        nombreUsuario = inputUsuario.value;
        // Mostrar la ventana de bienvenida al registrarse y redirigir al index
        mostrarVentanaBienvenida();
        // Restablecer el formulario
        formularioRegister.reset();
    });

    // Agregar evento para el formulario de inicio de sesión
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();
        // Obtener el nombre de usuario del formulario
        const inputUsuario = formularioLogin.querySelector('input[type="text"]');
        nombreUsuario = inputUsuario.value;
        // Mostrar el mensaje de "Bueno verte" al iniciar sesión y redirigir al index
        mostrarMensajeBuenoVerte();
        // Restablecer el formulario
        formularioLogin.reset();
    });
});
