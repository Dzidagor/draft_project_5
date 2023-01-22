"use strict";

// Слайдер
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const switchButton = document.querySelector(".navbar__switch-button"),
      navbar = document.querySelector(".navbar"),
      navbarLink = document.querySelectorAll(".navbar__link"),
      navbarLoginButton = document.querySelector(".navbar__login-button"),
      navbarMenuBtn = document.querySelector(".navbar__menu-btn"),
      navbarLinkBlock = document.querySelector(".navbar__link-block"),
      navbarContainer = document.querySelector(".navbar__container"),
      partnerLogos = document.querySelector(".partner-logos"),
      introducing = document.querySelector(".introducing"),
      introducingTitle = document.querySelector(".introducing__title"),
      introducingText = document.querySelector(".introducing__text"),
      introducingSwiperScrollbar = document.querySelector(".introducing__swiper-scrollbar"),
      introducingButton = document.querySelector(".introducing__button"),
      introducing2 = document.querySelector(".introducing-2"),
      introducing2Title = document.querySelector(".introducing-2__title"),
      platesBlockIconBlock = document.querySelectorAll(".plates-block__icon-block"),
      platesBlockTitle = document.querySelectorAll(".plates-block__title"),
      platesBlockSubtitle = document.querySelectorAll(".plates-block__subtitle"),
      introducing3 = document.querySelector(".introducing-3"),
      introducing4 = document.querySelector(".introducing-4"),
      introducing4Button = document.querySelector(".introducing-4__button");


const switchTheme = (e) => {
  if (!switchButton.classList.contains('switch-on')){
    switchButton.classList.add('switch-on');
    navbar.classList.add('main__navbar_dark-theme');
    navbarLink.forEach(element => element.classList.add("navbar__link_dark-theme"));
    navbarLoginButton.classList.add("navbar__login-button_dark-theme");
    navbarMenuBtn.classList.add("navbar__menu-btn_dark-theme");
    navbarLinkBlock.classList.add("navbar__link-block_dark-theme"),
    partnerLogos.classList.add("partner-logos_dark-theme"),
    introducing.classList.add("introducing_dark-theme"),
    introducingTitle.classList.add("introducing__title_dark-theme"),
    introducingText.classList.add("introducing__text_dark-theme"),
    introducingSwiperScrollbar.classList.add("introducing__swiper-scrollbar_dark-theme"),
    introducingButton.classList.add("introducing__button_dark-theme"),
    introducing2.classList.add("introducing-2_dark-theme"),
    introducing2Title.classList.add("introducing-2__title_dark-theme"),
    platesBlockIconBlock.forEach(element => element.classList.add("plates-block__icon-block_dark-theme")),
    platesBlockTitle.forEach(element => element.classList.add("plates-block__title_dark-theme")),
    platesBlockSubtitle.forEach(element => element.classList.add("plates-block__subtitle_dark-theme")),
    introducing3.classList.add("introducing-3_dark-theme"),
    introducing4.classList.add("introducing-4_dark-theme"),
    introducing4Button.classList.add("introducing-4__button_dark-theme");

  } else {
    switchButton.classList.remove('switch-on');
    navbar.classList.remove('main__navbar_dark-theme');
    navbarLink.forEach(element => element.classList.remove("navbar__link_dark-theme"));
    navbarLoginButton.classList.remove("navbar__login-button_dark-theme");
    navbarMenuBtn.classList.remove("navbar__menu-btn_dark-theme");
    navbarLinkBlock.classList.remove("navbar__link-block_dark-theme"),
    partnerLogos.classList.remove("partner-logos_dark-theme"),
    introducing.classList.remove("introducing_dark-theme"),
    introducingTitle.classList.remove("introducing__title_dark-theme"),
    introducingText.classList.remove("introducing__text_dark-theme"),
    introducingSwiperScrollbar.classList.remove("introducing__swiper-scrollbar_dark-theme"),
    introducingButton.classList.remove("introducing__button_dark-theme"),
    introducing2.classList.remove("introducing-2_dark-theme"),
    introducing2Title.classList.remove("introducing-2__title_dark-theme"),
    platesBlockIconBlock.forEach(element => element.classList.remove("plates-block__icon-block_dark-theme")),
    platesBlockTitle.forEach(element => element.classList.remove("plates-block__title_dark-theme")),
    platesBlockSubtitle.forEach(element => element.classList.remove("plates-block__subtitle_dark-theme")),
    introducing3.classList.remove("introducing-3_dark-theme"),
    introducing4.classList.remove("introducing-4_dark-theme"),
    introducing4Button.classList.remove("introducing-4__button_dark-theme");
  }
};

const openMenu = (e) => {
  if (!navbarLinkBlock.classList.contains('opened')) {
    navbarLinkBlock.classList.add('opened');
  } else {
    navbarLinkBlock.classList.remove('opened');
  }
};

switchButton.addEventListener("click", switchTheme);
navbarMenuBtn.addEventListener("click", openMenu);
// console.log(window.getComputedStyle(navbarContainer).getPropertyValue('margin-left'));
