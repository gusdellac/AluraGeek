const barraBusqueda = document.querySelector(".header__barra-busqueda");

const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", ()=>{
    barraBusqueda.classList.add("active-barra-busqueda");
});

barraBusqueda.addEventListener("mouseleave", ()=>{
    barraBusqueda.classList.remove("active-barra-busqueda");
});