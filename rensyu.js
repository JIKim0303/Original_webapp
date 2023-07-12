//以下のコードだと、画像が縦方向にスライドになった。
// const pics_src = ["img/BTS.jpg", "img/ゴリラ.jpg", "img/電車.jpg"];
// let num = -1;
// const mypic = document.getElementById('mypic');

// function slideshow_timer() {
//     if(num === 2) {
//         num = 0;
//     }
//     else {
//         num ++;
//     }
//     mypic.src = pics_src[num];
// }
// setInterval(slideshow_timer, 1000);

$('slider').slick ({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: true;
    pervArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
})

$('slider').on('touchmove', function(event,slick,currentSlide,nextSlide){
    $('.slider').slick('slickPlay');
});
