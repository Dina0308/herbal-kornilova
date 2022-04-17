document.addEventListener("DOMContentLoaded", function(event) {
    
    //menu
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          menuClose = document.querySelector('.menu__close'),
          menuItem = document.querySelectorAll('.menu__link');

          hamburger.addEventListener('click', () => {
            menu.classList.add('menu__active');
        });
        menuClose.addEventListener('click', () => {
            menu.classList.remove('menu__active');
        });
        menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('menu__active');
    });
});


//scroll
$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  });
  return false;
});

    //slider rew
    var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        // spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
        //   autoHeight: true,
          breakpoints: {
            300: {
                slidesPerView: 1,
            },
            525: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            }
          }
      });

      //slider group
     
      var slider = tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        controls: false,
        nav: false,
        
      });
      document.querySelector('.next-button').onclick = function () {
        slider.goTo('next');
        document.querySelector('.next-button').classList.add('hide');
        document.querySelector('.prev-button').classList.remove('hide');

      };
      document.querySelector('.prev-button').onclick = function () {
        slider.goTo('prev');
        document.querySelector('.prev-button').classList.add('hide');
        document.querySelector('.next-button').classList.remove('hide');
        
      };

      //modal 
      
      $('#consult, #question').on('click', function(){
        $('.overlay, .modal').fadeIn();
       });
       $('.modal__close, .overlay').on('click', function(){
         $('.overlay, .modal, .thanks').fadeOut();
       });

    // mailer

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('.modal').fadeOut();
      $('.overlay, .thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});



  });