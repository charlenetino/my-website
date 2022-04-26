const swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },

    pagination: {
      el: ".swiper-pagination1",
    },
});

const swiper2 = new Swiper('.weekswiper', {
  
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1.5,
  spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },

    pagination: {
      el: ".swiper-pagination2",
    },

});
