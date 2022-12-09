const servicesEntry = document.querySelectorAll(".services-card");

servicesEntry.forEach((service)=>{
    service.addEventListener("mouseenter", ()=>{
        let svg = service.firstElementChild.children;
        cambiarClaseIcon(svg);
        service.lastElementChild.classList.add("services-card-hover");
    });

    service.addEventListener("mouseleave", ()=>{
        let svg = service.firstElementChild.children;
        volverClaseIcon(svg);
        service.lastElementChild.classList.remove("services-card-hover");
        
    });
});

function cambiarClaseIcon(svg){
    for (let i = 0; i < svg.length; i++) {
        svg[i].classList.value = "services-card__icon-hover";
    } 
}

function volverClaseIcon(svg){
    for (let i = 0; i < svg.length; i++) {
        svg[i].classList.value = "services-card__icon";
    } 
}

