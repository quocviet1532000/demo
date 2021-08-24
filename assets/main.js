//Js menu
let menuToggle = document.querySelector('.toggle');
let nav = document.querySelector('.header__nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active2');
    nav.classList.toggle('active1');

}

//JS for img onclick
function imgSlider(value){
     document.querySelector('.rose').src = value;
}

//Js change bg
function changeBg(color) {
    const bg = document.querySelector('.header__bg');
    bg.style.backgroundColor = color;
}

//JS for small slider
let slider = document.querySelectorAll('.slider li')

for(let i = 0; i< slider.length; i++) {
    slider[i].onclick = function() {
        var x = 0;
        while(x < slider.length) {
            slider[x++].className = 'check';
        }
        slider[i].className = 'check active'
    }
}

//JS form sign
const login1 = document.querySelector('.header__form-sign-in')
const login2 = document.querySelector('.header__form-sign-up')

const formLogin = document.querySelector('.container')
const formLogin1 = document.querySelector('.container1')


login1.onclick = function() {
    formLogin.classList.toggle('open')
    formLogin1.classList.remove('open')

}
login2.onclick = function() {
    formLogin1.classList.toggle('open')
    formLogin.classList.remove('open')

}

//Js form sign mobile 
const headerBg = document.querySelector('.header__bg')
const content = document.querySelector('.container__content')

headerBg.onclick = function() {
    formLogin.classList.add('open')
}
