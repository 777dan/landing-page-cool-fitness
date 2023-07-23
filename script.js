$(function () {
    $(window).scroll(function () {
        $(".mov_slideInRight").each(function () {
            // для кожного блоку с класом mov_slideInRight
            var pos = $(this).offset().top; // зчитуємо його координату по осі Y у вікні браузера
            if (pos < $(window).scrollTop() + 1000) {
                //якщо до верху сторінки залишається 600px,
                $(this).addClass("animate__animated animate__slideInRight"); // додаємо до блоку клас з анімацією slideInRight
            }
        });
        $(".mov_slideInLeft").each(function () {
            // для кожного блоку с класом mov_slideInRight
            var pos = $(this).offset().top; // зчитуємо його координату по осі Y у вікні браузера
            if (pos < $(window).scrollTop() + 1000) {
                //якщо до верху сторінки залишається 600px,
                $(this).addClass("animate__animated animate__slideInLeft"); // додаємо до блоку клас з анімацією slideInRight
            }
        });

    });

    $('.cta-buttons').on("click", function () {
        $(this).addClass("animate__animated animate__rubberBand");
    });
    $('.cta-buttons').on("animationend", function () {
        $(this).removeClass("animate__animated animate__rubberBand");
    });

    $(".phone").mask("38 (999) - 999 - 9999", {
        autoclear: false
    });

});