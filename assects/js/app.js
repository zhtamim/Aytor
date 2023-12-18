$(function(){
    // search section start
        
    $('.search_show_btn').on('click', ()=>{
        $('#search').addClass('show');
    });
    $('.search_hide_btn').on('click', ()=>{
        $('#search').removeClass('show');
    });
    // card section start
    $('.card_show_btn').on('click', ()=>{
        $('#card').addClass('show');
    });
    $('.card_hide_btn').on('click', ()=>{
        $('#card').removeClass('show');
    });
    // pop up section
    $('.pop_up_hide_btn').on('click',()=>{
        $('#pop_up').addClass('hide');
    })
   // banner section
    $('.banner_slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.banner_slider_dots_container'),
        dotsClass:'banner_slider_dots',
        autoplay:true,
        autoplaySpeed:2000, 
        fade: true,
        speed:1000,
      });
//   new arrival product section
      $('.new_arrival_product_slider').slick({
        slidesToShow:4,
        prevArrow:'<i class="fa-solid fa-chevron-left new_arrival_product_arrows"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right new_arrival_product_arrows"></i>',
        autoplay:true,
        autoplaySpeed:2000, 

    });
    // deals count down activation
 $('#count_down').countdown('2024/12/14',function(event){
    var $this = $(this).html(event.strftime(''
    + '<li><h4>%D</h4><small>Days</small></li> '
    + '<li><h3>:</h3></li>'
    + '<li><h4>%H</h4><small>Hour</small></li> '
    + '<li><h3>:</h3></li>'
    + ' <li><h4>%M</h4><small>Minute</small></li>'
    + '<li><h3>:</h3></li>'
    + '<li><h4>%S</h4><small>Sec</small></li>'));
 })  
 $('.latest_news_slider').slick({
    slidesToShow:4,
    arrows: false,
    autoplay: true,
    speed:1000,
    dots: true,
    appendDots: $(".latest_slider_dots"),
    dotsClass: "latest_news_slider_dots"
}); 
})

// new arrival product section bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// special offer section
new VenoBox({
    spinner:'grid',
});
