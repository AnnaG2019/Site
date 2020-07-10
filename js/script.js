$(document).ready(function() {
    $('.slider').slick({      //Подключение горизонтального слайдера
    	slidesToShow: 5,
    	slidesToScroll: 1,
    	speed: 500,
    	waitForAnimate: false,
    	vertical: true,
    	verticalSwiping: true,
    	touchThreshold: 10
    });

     $('.slide').slick({     //Подключение вертикального слайдера
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	speed: 500,
    	waitForAnimate: false
    });

});
