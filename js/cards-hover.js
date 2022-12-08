const cardsEntry = document.querySelectorAll(".cards__box");

cardsEntry.forEach((card)=>{
    card.addEventListener("mouseenter", ()=>{
        card.firstElementChild.classList.add("title-hover");
    });

    card.addEventListener("mouseleave", ()=>{
        card.firstElementChild.classList.remove("title-hover");
    });
});