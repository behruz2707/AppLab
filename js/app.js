new WOW().init();

const companySlider = new Swiper('.company-slider',{
    simulateTouch:false,
    slidesPerView:5,
    autoplay:true,
    spaceBetween: 10,
    breakpoints:{
        575:{
            slidesPerView: 2 ,
        },
        767:{
            slidesPerView: 3 ,
        },
        991:{
            slidesPerView: 4 ,
        },
    }
});
const feedbackSlider = new Swiper('.feedback-slider', {
    slidesPerView:1,
    navigation:{
        prevEl: '.feedback-nav .feedback-prev',
        nextEl: '.feedback-nav .feedback-next'
    }
});