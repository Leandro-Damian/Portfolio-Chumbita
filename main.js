const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const menuOptions = document.querySelectorAll("#navbar > a");
const nombreCompleto = document.getElementById('nombreCompleto');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');


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
