const header = document.getElementById("header");
const manin = document.getElementById("main");
const footer = document.getElementById("footer");

//se inyectó el Navbard desde

header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">PetLove</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" id="registrar">Registrar</a>
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

manin.innerHTML = `
<div class="container col-xxl-8 px-4 py-5 img-fluid rounded flex-center whid="450">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src="https://img.freepik.com/psd-gratis/hermoso-gato-retrato-aislado_23-2150186061.jpg?t=st=1714739079~exp=1714742679~hmac=9187c89335748201922f630e65a36b1df237d91fd4f8710505fda18c61a23fe3&w=900" class="d-block mx-lg-auto img-fluid" rounder-0 alt="Bootstrap Themes" width="700" height="500" loading="lazy">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div>
            </div>
        </div>
    </div>`;

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

const btnRegistrar = document.getElementById("registrar");

function seccionRegistrar() {
  const containerMain = document.querySelector(".container");
  containerMain.classList.add("d-none");
}

btnRegistrar.addEventListener("click", seccionRegistrar);
