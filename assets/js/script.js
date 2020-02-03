$(document).ready(function() {
    $('.slider').slick({
        vertical: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        verticalSwiping: true,
        dots: true,
    });

    $('.slider').on('DOMMouseScroll mousewheel whee', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));

});

jQuery(function($) {
    function fix_size() {
        var images = $('.section__second img');
        images.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.section__second');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('100%');
                    return;
                }
                img.height('100%');
                img.width('100%');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();
});


$(document).ready(function() {
    $('.section__third').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true
    });


});