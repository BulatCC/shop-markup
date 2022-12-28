import Swiper from '../../../node_modules/swiper/swiper-bundle';

const slider = () => {
    const productSliderPagination = new Swiper('.product-slider_pagination', {
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1366: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    new Swiper('.product-slider', {
        navigation: {
            nextEl: '.product-slider_button--next',
            prevEl: '.product-slider_button--prev',
        },
        thumbs: {
            swiper: productSliderPagination,
        },
        breakpoints: {
            768: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                },
            },
            1366: {
                navigation: {
                    nextEl: '.product-slider_button--next',
                    prevEl: '.product-slider_button--prev',
                },
            },
        },
    });
};

export { slider };
