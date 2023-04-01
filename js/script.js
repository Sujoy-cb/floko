// event slider//
$('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

  // counter//
  $(function(){
    loopcounter('myCountdown');
  });

  // epaker slider//
$('.speaker-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  centerMode: true,
  centerPadding: '0px',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span><i class="fa-solid fa-angle-left prev"></i></span>',
  nextArrow: '<span><i class="fa-solid fa-angle-right next"></i></span>',
});
