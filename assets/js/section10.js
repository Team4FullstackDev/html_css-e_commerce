const filterButtons = document.querySelectorAll(
  ".section__10_filter-button button"
);
const filterableCards = document.querySelectorAll(
  ".section__10_filterable-card .section__10_card"
);
const cardsToShow = 18;

let visibleCards = [];
let currentFilter = "section__10_all";

const loadMoreButton = document.querySelector(".section__10_btnn-load");
loadMoreButton.style.display = "none";

const filterCards = (e) => {
  document
    .querySelector(".section__10_active")
    .classList.remove("section__10_active");
  e.target.classList.add("section__10_active");
  currentFilter = e.target.dataset.name;
  visibleCards.length = 0;
  loadMoreButton.innerText = "Klik Untuk Melihat Item Baru Lainya";

  filterableCards.forEach((card, index) => {
    const cardCategory = card.dataset.name;

    card.classList.add("section__10_hide");

    if (cardCategory === currentFilter || currentFilter === "section__10_all") {
      if (visibleCards.length < cardsToShow) {
        card.classList.remove("section__10_hide");
        visibleCards.push(index);
      }
    }
  });

  handleLoadMoreButton();
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

loadMoreButton.addEventListener("click", loadMoreCards);

function handleLoadMoreButton() {
  if (visibleCards.length < filterableCards.length) {
    loadMoreButton.style.display = "block";
  }
}

function loadMoreCards() {
  const nextVisibleCards = visibleCards.length + cardsToShow;
  let anyMoreCards = false;

  for (let i = visibleCards.length; i < nextVisibleCards; i++) {
    if (
      i < filterableCards.length &&
      (currentFilter === "section__10_all" ||
        filterableCards[i].dataset.name === currentFilter)
    ) {
      filterableCards[i].classList.remove("section__10_hide");
      visibleCards.push(i);
      anyMoreCards = true;
    }
  }

  handleLoadMoreButton();

  if (!anyMoreCards) {
    loadMoreButton.innerText = "Tidak ada item lainnya";
  }
}

filterButtons[0].click();
