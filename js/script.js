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
  const active = document.querySelector(".rating-component__number--active");
  if (!clicked) return;
  if (active) {
    active.classList.remove("rating-component__number--active");
  }
  clicked.classList.add("rating-component__number--active");
  rating = Number(clicked.dataset.number);
  return rating;
});

submit.addEventListener("click", function (e) {
  console.log(rating);
  ratingComponent.classList.add("rating-component--hidden");
  thanksComponent.classList.remove("thanks-component--hidden");

  thanksComponentRatingValue.textContent = rating;
});
