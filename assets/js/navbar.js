// created by Harymahayana07
document
  .querySelector("#nav__modal_button-menu")
  .addEventListener("click", toggleClass);
document
  .querySelector(".nav__modal_button-back")
  .addEventListener("click", toggleClassBack);
document
  .querySelector("#nav__modal_button-search")
  .addEventListener("click", searchClass);
document
  .querySelector(".nav__modal_button-search-back")
  .addEventListener("click", searchClassBack);

function toggleClass() {
  var navModal = document.querySelector(".nav__modal__hamburger");
  navModal.style.display =
    navModal.style.display === "block" ? "none" : "block";
}
function toggleClassBack() {
  var navModal = document.querySelector(".nav__modal__hamburger");
  navModal.style.display = navModal.style.display === "none" ? "block" : "none";
}
function searchClass() {
  var searchModal = document.querySelector(".nav__modal__search");
  searchModal.style.display =
    searchModal.style.display === "block" ? "none" : "block";
}
function searchClassBack() {
  var searchModal = document.querySelector(".nav__modal__search");
  searchModal.style.display =
    searchModal.style.display === "none" ? "block" : "none";
}