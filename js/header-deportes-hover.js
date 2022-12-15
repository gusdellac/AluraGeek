const headerDeportesTitle = document.querySelector("#header-deportes-item");

const headerDeportesItemsBox =  document.querySelector(".header__deportes-items");


headerDeportesTitle.addEventListener("mouseover", () =>{
    headerDeportesItemsBox.classList.add("active-box");
});

headerDeportesItemsBox.addEventListener("mouseleave", ()=>{
    headerDeportesItemsBox.classList.remove("active-box");
});


window.addEventListener("scroll", () => {
    if (window.scrollY) {
        headerDeportesItemsBox.classList.add("active-scroll");
    } else {
        headerDeportesItemsBox.classList.remove("active-scroll");
    }
});