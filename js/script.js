"use strict";

const switchButton = document.querySelector(".navbar__switch-button"),
      navbar = document.querySelector(".navbar"),
      navbarLink = document.querySelectorAll(".navbar__link"),
      navbarLoginButton = document.querySelector(".navbar__login-button");

const switchTheme = (e) => {
  if (!switchButton.classList.contains('switch-on')){
    switchButton.classList.add('switch-on');
    navbar.classList.add('main__navbar_dark-theme');
    navbarLink.forEach(element => element.classList.add("navbar__link_dark-theme"));
    navbarLoginButton.classList.add("navbar__login-button_dark-theme");

  } else {
    switchButton.classList.remove('switch-on');
    navbar.classList.remove('main__navbar_dark-theme');
    navbarLink.forEach(element => element.classList.remove("navbar__link_dark-theme"));
    navbarLoginButton.classList.remove("navbar__login-button_dark-theme");
  }
  console.log(switchButton);
};


switchButton.addEventListener("click", switchTheme);
