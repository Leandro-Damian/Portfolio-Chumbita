const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const menuOptions = document.querySelectorAll("#navbar > a");
const nombreCompleto = document.getElementById('nombreCompleto');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const botonContacto = document.getElementById('botonContacto');
const formulario = document.getElementById('formulario');
const SERVICE_ID = 'service_jnx0x2o';
const TEMPLATE_ID = 'template_6d46tsg';
const USER_ID = 'EkWZaY8-3-rh1EJaY';

emailjs.init(USER_ID);

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

/**
 * function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
 * 
 */