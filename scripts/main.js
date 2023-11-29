const slider = $('.reviews__slider');

slider.slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

    ]
});