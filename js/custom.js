$(function () {

  var $header = $('.header .inner');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 970) {
      $header.addClass('sticky');
    } else {
      $header.removeClass('sticky');
    }
  });


  $('.main_visual .main_slide ').on('init afterChange', function () {
    const current = $('.main_visual .main_slide .slick-current');
    current
    .addClass('on')
    .siblings()
    .removeClass('on');

  });//글자 애니메이션//

  $('.main_visual .main_slide').slick({

    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: true,
    dots: true,
    fade: true,
    pauseOnHover: false
  });


  $('#bgndVideo').YTPlayer({
    videoURL: 'http://youtu.be/BsekcY04xvQ',
    containment: '.main_movie',
    autoPlay: true,

  });





  $('.product_silde').slick({

    slidesToShow: 4,
    pauseOnHover: false,
    arrows: false

  });

  $('.inner .arrows .prev').on('click', function () {
    $('.inner .product_silde').slick('slickPrev')
  });
  $('.inner .arrows .next').on('click', function () {
    $('.inner .product_silde').slick('slickNext')
  });


  $('.link').on('change', function () {
    const lnk = $(this).val();
    console.log(lnk);
    if (lnk) window.open(lnk)
  });

  $('.to_top button').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000)
  });

  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    console.log(sct);
    if (sct > 200) {
      $('.to_top').addClass('on');
    } else {
      $('.to_top').removeClass('on');
    }
  });




})


