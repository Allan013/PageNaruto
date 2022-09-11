//Função que vai abrir o menu mobile
const btnMobile = document.querySelector('.btn-mobile img');
btnMobile.addEventListener('click',toggleMenu);

function toggleMenu(){
    let nav = document.querySelector('nav ul');
    nav.style.opacity = 0;
    nav.classList.toggle('active');
    setTimeout(()=>{
        nav.style.opacity = 1;
    },200);
}

//Funcão que vai abrir o ver mais
const btn = document.querySelector('.conteudo-button');
let info = document.querySelector('.conteudo-area-none');

btn.addEventListener('click',()=>{
    let info = document.querySelector('.conteudo-area-none');
    info.style.opacity = 0
    if(info.style.display == 'flex'){
        info.style.display = 'none';
    } else {
        info.style.display = 'flex';
    }
   setTimeout(()=>{
    info.style.opacity = 1;
   },200);
});


//scroll suave
const cor = document.querySelectorAll('a').forEach((change)=>{
    change.addEventListener('mouseover',color1);
    change.addEventListener('mouseout',color2);
})
function color1(){
    this.style.color = 'red';
}
function color2(){
    this.style.color = '';
}
const menu = document.querySelectorAll('a').forEach((item)=>{
    item.addEventListener('click',scrollClick);
});

function scrollClick(event){
    event.preventDefault();
    let element = event.target;
    let id = element.getAttribute('href');
    let direction = document.querySelector(id).offsetTop;

    window.scroll({
        top: direction,
        behavior: "smooth"
    });
}

//Evento de página

const target = document.querySelectorAll('[data-item]');
const animationClass = 'animate'

function animateScroll(){
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach((element)=>{
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}
window.addEventListener('scroll',()=>{
  animateScroll();
});
