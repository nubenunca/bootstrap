const header = document.querySelector(".section-header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const sectionRegistrar = document.getElementById("section-form-registrar");

//se inyectó el Navbard desde

header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#home-page">PetLove</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/pages/home.html" id="home-page">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href='/pages/formulario.html' id="registrar">Registrar</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Modificar</a>
            </li>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                consultar
                </a>
            </ul>
        </div>
        </div>
    </nav>`;

footer.innerHTML = `
    <footer class="bg-body-tertiary text-center text-lg-start position-absolute bottom-0" style ="width:100%"  >
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2020 Copyright:
    <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
    </footer>
`;

// const btnRegistrar = document.getElementById("registrar");

// function seccionRegistrar() {
//   const containerMain = document.querySelector(".container");
//   containerMain.classList.toggle("d-none");

//   const sectionRegistrar = document.querySelector(".formulario");
//   sectionRegistrar.classList.toggle("d-none");
//   // if(banderaform==true){

//   // }
// }

// btnRegistrar.addEventListener("click", seccionRegistrar);

// const btnHome = document.querySelector("#home-page");
// btnHome.addEventListener("click", home);

// //funcion para mostrar la home después de darle clik al botón de home
// let banderaHome;
// let banderaForm = false;

// function home() {
//   const containerMain = document.querySelector(".container");
//   containerMain.classList.toggle("d-none");

//   //el toggle va al elemento extraído y verifica si la clase ingresa está o no está.

//   sectionRegistrar.classList.toggle("d-none");
// }
