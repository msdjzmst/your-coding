// var swiper = new Swiper('.swiper-container', {
//   loop: true,
//   slidesPerView: 3.5 ,
//   // spaceBetween: 33,
//   centeredSlides : true,
//   pagination: {
//     // el: '.swiper-pagination',
//     clickable: true,
//   },
//   // autoplay: {
// 	// 	delay: 5000,
// 	// 	stopOnLastSlide: false,
// 	// 	disableOnInteraction: false,
// 	// 	reverseDirection: true
// 	// },
// });


var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    speed: 300,
    spaceBetween: 56,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        200: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
