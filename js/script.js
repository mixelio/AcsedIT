"use strict";

$(document).ready(function () {
  const mediaQuery = window.matchMedia("(max-width: 550px)");
  if (mediaQuery.matches) {
    $(".testimonials__slider").slick({
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
    });
  }

  const mediaQueryMin = window.matchMedia("(max-width: 1009px)");
  if (mediaQueryMin.matches) {
    $(".testimonials__slider").slick({
      arrows: true,
      slidesToShow: 2,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
    });
  }

  $(".testimonials__slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
  });
});

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
