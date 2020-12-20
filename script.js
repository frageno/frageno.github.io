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
})