// SCROLL TO THE TOP

const scrollToTop = document.querySelector("#scrollToTop");
scrollToTop.addEventListener('click', function (){
  $('html, body').animate({scrollTop: 0 }, "fast");
});

// ANIMATE TEXT ON SCROLL 

$(window).scroll(()=>{
    let position = $(this).scrollTop();
    console.log(position);

    if(position >=250){
        $('#about').addClass('left');
    }
    else {
        $('#about').removeClass('left');

    }
    if(position >= 850){
        $('#tech').addClass('left');
    }
    else {
        $('#tech').removeClass('left');

    }
})