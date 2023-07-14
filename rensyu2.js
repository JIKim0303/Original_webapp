// const sliderimg1 = document.getElementById('sliderimg1');
// const sliderimg2 = document.getElementById('sliderimg2');
// const sliderimg3 = document.getElementById('sliderimg3');

// window.onload = function slideimg() {
//     setInterval(() => {
//     sliderimg1.classList.add('activeleft');
//     sliderimg1.classList.remove('activeleft');
//     sliderimg1.classList.add('activeright');
//     sliderimg1.classList.remove('activeright');
//     sliderimg1.classList.add('activemiddle');
//     sliderimg1.classList.remove('activemiddle');
//     }, 1000)
// }

// var photos = document.getElementById('photos');
// var photosli = document.getElemengById('photosli');
// var li_count = photosli.length;

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    });

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});