// SCROLL TO THE TOP

const scrollToTop = document.querySelector("#scrollToTop");
scrollToTop.addEventListener('click', function (){
  $('html, body').animate({scrollTop: 0 }, "fast");
});

// ANIMATE TEXT ON SCROLL 

$(window).scroll(()=>{
    let position = $(this).scrollTop();
    

    if(position >=250){
        $('#about').addClass('left');
        
    }
    else {
        $('#about').removeClass('left');

    }
    if(position >= 900){
        $('#tech').addClass('right');
    }
    else {
        $('#tech').removeClass('right');

    }
    if(position >= 1880){
        $('#works').addClass('left');
    }
    else {
        $('#works').removeClass('left');

    }
    if(position >= 2700){
        $('#contact').addClass('right');
    }
    else {
        $('#contact').removeClass('right');

    }
})

// CHECKING VALID FORM

const mail = document.getElementById('mail');
const input = document.querySelector('.mail-group');
const btn = document.querySelector('.contact__btn');


btn.addEventListener('click', (e)=>{
    if(mail.value.trim() === ''){
        
        input.classList.add('contact__error');
    }
    else {
        input.classList.add('contact__green');
        const info = document.querySelector('.contact__info');
        info.classList.add('contact__show');
        const times = document.querySelector('.contact__times');
        times.addEventListener('click', ()=>{
            info.classList.remove('contact__show');
            mail.value = '';
            input.classList.remove('contact__green');
            input.classList.remove('contact__error');


        })

    }
    
})