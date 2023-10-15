
    //created by Endri Nastiar


const filterButtons = document.querySelectorAll(".section__10_filter-button button");
const filterableCards = document.querySelectorAll(".section__10_filterable-card .section__10_card");

const filterCards = e => {
    document.querySelector(".section__10_active").classList.remove("section__10_active");
    e.target.classList.add("section__10_active");


    filterableCards.forEach(card => {

        card.classList.add("section__10_hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "section__10_all"){
            card.classList.remove("section__10_hide");
        }

    })
};



filterButtons.forEach(button => button.addEventListener("click", filterCards));




