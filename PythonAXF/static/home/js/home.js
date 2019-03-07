$(function () {
    // $('.home').width(innerWidth)

   var topSwiper = new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        // autoplayDisableOnInteraction: false

    });

   var mustbuySwiper = new Swiper('#mustbuySwiper', {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
   });
})


