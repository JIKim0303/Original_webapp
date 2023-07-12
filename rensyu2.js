const sliderimg1 = document.getElementById('sliderimg1');
const sliderimg2 = document.getElementById('sliderimg2');
const sliderimg3 = document.getElementById('sliderimg3');

setTimeout(() => {
    sliderimg1.classList.add('activeleft');
    // sliderimg1.classList.remove('activeleft');
    sliderimg1.classList.add('activeright');
    // sliderimg1.classList.remove('activeright');
    sliderimg1.classList.add('activemiddle');
    // sliderimg1.classList.remove('activemiddle');
    }, 3000);
