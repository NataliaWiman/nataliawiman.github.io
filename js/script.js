var searchButton = document.querySelector(".hotels-search__button");
var searchPopup = document.querySelector(".hotels-search__popup");
var searchForm = searchPopup.querySelector(".hotels-search__form");
var searchError = searchPopup.querySelector(".popup-error");

var searchFormArrival = searchPopup.querySelector("[name=arrival-date]");
var searchFormDeparture = searchPopup.querySelector("[name=departure-date]");
var searchFormAdults = searchPopup.querySelector("[name=adults]");
var searchFormChildren = searchPopup.querySelector("[name=children]");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("popup-hide");
  searchPopup.classList.toggle("popup-show");
  searchPopup.classList.remove("popup-error");
  searchFormArrival.focus();
});

searchForm.addEventListener("submit", function (evt) {
  if (!searchFormArrival.value || !searchFormDeparture.value || !searchFormAdults.value || !searchFormChildren.value) {
  evt.preventDefault();
  searchPopup.classList.remove("popup-error");
  searchPopup.offsetWidth = searchPopup.offsetWidth;
  searchPopup.classList.add("popup-error");
  }
});
