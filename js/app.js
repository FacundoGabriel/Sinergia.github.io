// open menu

let menu = document.getElementById('menu-icon');
let barraNav = document.querySelector('.barra-nav');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    barraNav.classList.toggle('open');
}

// solucion 

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    barraNav.classList.remove('open');
}

// ScrollReveal


const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: false
})

sr.reveal('.header-left', {delay:300});
sr.reveal('.header-rigth', {delay:800});


sr.reveal('.card-info', {delay:300});


sr.reveal('.hamburguesa-info', {delay:300});
sr.reveal('.container-img-hamburguesa', {delay:800});



sr.reveal('.order', {delay:300});



sr.reveal('.container-contact', {delay:300});