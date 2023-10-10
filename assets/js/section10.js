const filterButtons = document.querySelectorAll(".section__10_filter-button button");
const filterableCards = document.querySelectorAll(".section__10_filterable-card .section__10_card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");


    filterableCards.forEach(card => {

        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "section__10_all"){
            card.classList.remove("hide");
        }

    })
};



filterButtons.forEach(button => button.addEventListener("click", filterCards));




