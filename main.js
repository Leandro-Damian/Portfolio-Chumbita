const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const menuOptions = document.querySelectorAll("#navbar > a");
const nombreCompleto = document.getElementById('nombreCompleto');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const backdrop = document.getElementById("backdrop");

/*abre y cierra el icono del menu*/
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/*se cierra el menu por cada opción que toque*/
for (let i = 0; i < menuOptions.length; i++) {
    const a = menuOptions[i]
    a.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const menuOptionsActive = document.querySelectorAll("#navbar > a.active");
        for (let j = 0; j < menuOptionsActive.length; j++) {
            menuOptionsActive[j].classList.remove('active');
        }
        a.classList.add('active');
    })
}

// Cerrar el menú si se hace clic fuera (en el backdrop)
backdrop.addEventListener("click", () => {
    navbar.classList.remove("active");
    backdrop.classList.remove("active");
  });
  
  const form = document.getElementById("form");
  const customAlert = document.getElementById("customAlert");
  
  form.addEventListener("submit", function () {
    // Limpiar los campos del formulario
    document.getElementById("nombreCompleto").value = "";
    document.getElementById("email").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
  
    // Mostrar el alert personalizado
    customAlert.style.display = "block";
  
    // Cerrar el alert después de 5 segundos
    setTimeout(function () {
      closeAlert();
  
      // Enviar el formulario manualmente después de mostrar el alert
      form.submit();
    }, 5000); // 5 segundos
  });
  
  // Función para cerrar el alert
  function closeAlert() {
    customAlert.style.display = "none";
  }