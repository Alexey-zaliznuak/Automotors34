const burger = document.getElementById('burger__button');
const header = document.getElementById('header');

const productheader = Array.from(document.getElementsByName('productheader'))

buttons = Array.from(document.getElementById('nav__header').children)
buttons.splice(3,1)


burger.style.backgroundImage = "url(./static/imges/burger.png)"

function disable(){
    let a = 0;
    if(header.style.top === '0px'){
        header.style.top = '-100vh';
        burger.style.backgroundImage = "url(./static/imges/burger.png)"
    }else{
        header.style.top = "0px";
        burger.style.backgroundImage = "url(./static/imges/arrow.png)"
    }
}
function disableH(){
    let a = 0;
    if(header.style.top === '100vh'){
        header.style.top = "0px";
        burger.style.backgroundImage = "url(./static/imges/arrow.png)"
    }else{
        header.style.top = '0px';
        burger.style.backgroundImage = "url(./static/imges/burger.png)"
    }
}



burger.addEventListener('click', disable)
header.addEventListener('click', disableH)