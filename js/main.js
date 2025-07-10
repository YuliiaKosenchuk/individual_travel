"use strict";

const menuBurgerBtn = document.querySelector(".menu_burger-btn");
const menu = document.querySelector(".menu");
const bodyLock = document.querySelector(".body");

menuBurgerBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  bodyLock.classList.toggle("lock");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },
});

const items = document.querySelectorAll(".tours__item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((element) => element.classList.remove("tours__item--active"));
    item.classList.add("tours__item--active");
  });
});
