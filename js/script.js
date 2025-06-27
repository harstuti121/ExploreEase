var formBtn = document.querySelector('#login-btn');
var loginForm = document.querySelector('.login-form-container');
var signformBtn = document.querySelector('#signin-btn');
var signloginForm = document.querySelector('.signin-form-container');
var formClose = document.querySelector('#form-close');
var formClosee = document.querySelector('#form-closee');
var menu = document.querySelector('#menu-bar');
var navbar = document.querySelector('.navbar');
var videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = function(){
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
  signloginForm.classList.remove('active');
}

formBtn.addEventListener('click', function(){
    loginForm.classList.add('active');
});

formClose.addEventListener('click', function(){
    loginForm.classList.remove('active');
});

signformBtn.addEventListener('click', function(){
  signloginForm.classList.add('active');
});


formClosee.addEventListener('click', function(){
  signloginForm.classList.remove('active');
});

function myFunction() {
  alert("Are you sure want to submit your credentials?");
}

videoBtn.forEach(e =>{
    e.addEventListener('click', function(){
        document.querySelector('.controls .active').classList.remove('active');
        e.classList.add('active');
        var src = e.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});