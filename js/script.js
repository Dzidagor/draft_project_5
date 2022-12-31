"use strict";

const switchButton = document.querySelector(".navbar__switch-button"),
      navbar = document.querySelector(".navbar"),
      navbarLink = document.querySelectorAll(".navbar__link"),
      navbarLoginButton = document.querySelector(".navbar__login-button"),
      navbarMenuBtn = document.querySelector(".navbar__menu-btn"),
      navbarLinkBlock = document.querySelector(".navbar__link-block"),
      navbarContainer = document.querySelector(".navbar__container");

const switchTheme = (e) => {
  if (!switchButton.classList.contains('switch-on')){
    switchButton.classList.add('switch-on');
    navbar.classList.add('main__navbar_dark-theme');
    navbarLink.forEach(element => element.classList.add("navbar__link_dark-theme"));
    navbarLoginButton.classList.add("navbar__login-button_dark-theme");
    navbarMenuBtn.classList.add("navbar__menu-btn_dark-theme");
    navbarLinkBlock.classList.add("navbar__link-block_dark-theme");

  } else {
    switchButton.classList.remove('switch-on');
    navbar.classList.remove('main__navbar_dark-theme');
    navbarLink.forEach(element => element.classList.remove("navbar__link_dark-theme"));
    navbarLoginButton.classList.remove("navbar__login-button_dark-theme");
    navbarMenuBtn.classList.remove("navbar__menu-btn_dark-theme");
    navbarLinkBlock.classList.remove("navbar__link-block_dark-theme");
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