"use strict";
const ratingComponent = document.querySelector(".rating-component");
const thanksComponent = document.querySelector(".thanks-component");
const ratingComponentCounter = document.querySelector(
  ".rating-component__counter"
);
const thanksComponentRatingValue = document.querySelector(
  ".thanks-component__selection-value"
);
const submit = document.querySelector(".rating-component__btn-submit");
let rating = 0;

ratingComponentCounter.addEventListener("click", function (e) {
  const clicked = e.target.closest(".rating-component__number");
  if (!clicked) return;
  clicked.classList.add("rating-component__number--active");
  rating = Number(clicked.dataset.number);
  console.log(rating);
  return rating;
});

submit.addEventListener("click", function (e) {
  console.log(rating);
  ratingComponent.classList.add("rating-component--hidden");
  thanksComponent.classList.remove("thanks-component--hidden");

  thanksComponentRatingValue.textContent = rating;
});
