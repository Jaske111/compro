// проверка на сафари
const isSafari = navigator.userAgent.indexOf("Safari") > -1;
// проверка на айфон и айпад
const isIphoneOrIpad = navigator.userAgent.match(/iPhone|iPad|iPod/i);
// проверка на хром
const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

const bigCircle = document.querySelectorAll('.big-circle');
const mediumCircle = document.querySelectorAll('.medium-circle');
const smallCircle = document.querySelectorAll('.small-circle');

if (isSafari || isIphoneOrIpad) {
    bigCircle.forEach(el => el.setAttribute('r', '25')); // круги на 1 px меньше
mediumCircle.forEach(el => el.setAttribute('r', '19')); // круги на 1 px меньше
smallCircle.forEach(el => el.setAttribute('r', '15')); // круги на 1 px меньше
}

if (isChrome){
    bigCircle.forEach(el => el.setAttribute('r', '22.5')); // круги на 1 px меньше
mediumCircle.forEach(el => el.setAttribute('r', '19')); // круги на 1 px меньше
smallCircle.forEach(el => el.setAttribute('r', '17')); // круги на 1 px меньше
}