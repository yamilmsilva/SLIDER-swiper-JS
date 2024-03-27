const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    autoplay: {
        delay:1000,
        // delay:10000,slower
        pauseOnMouseEnter: true,
        },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });