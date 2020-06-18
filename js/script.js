/*global $ */
/*alert */
/*console */

$(function () {
    
    'use strict';
    
    // adjust header height
  
    });

$('.ullist li').click(function() {
$(this).addClass('li1').siblings().removeClass('li1')});


var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })


  var mySwiper = new Swiper ('.swiper-container2', {
    // Optional parameters
    
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })