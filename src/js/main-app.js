import "../scss/main.scss";

/*
window.$('.icon-facebook').click((e) => {
  e.preventDefault();
  const uri = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${uri}`);
});


window.$('.icon-twitter').click((e) => {
  e.preventDefault();
  const uri = window.location.href;
  const status = encodeURIComponent(`${window.tweetText} ${uri}`);
  window.open(`https://twitter.com/intent/tweet?text=${status}`);
});
*/

// smooth scrolling to anchor without changing url
$('.anchor-link').click(function () {
  let divId = $(this).attr('dest');
  $('html, body').animate({
    scrollTop: $(divId).offset().top - 70
  }, 1000);
});

// prevent widows
// let widowElements = [].slice.call(document.getElementsByClassName('no-widows'));
let elements = document.querySelectorAll('.no-widows');
Array.prototype.forEach.call(elements, function (el, i) {
  let wordArray = el.textContent.trim().split(' ');
  if (wordArray.length > 1) {
    wordArray[wordArray.length - 2] += '&nbsp;' + wordArray[wordArray.length - 1];
    wordArray.pop();
    el.innerHTML = wordArray.join(' ');
  }
});

// article card carousel
$(document).ready(function () {
  $('.article-card-carousel').slick({
    infinite: true,
    slidesToShow: 5,

    centerMode: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
    speed: 1500,
    responsive: [{
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      }
    ],
  });
});

/*
console.log(widowElements.length);
widowElements.map(function () {
  var wordArray = $(this).text().split(' ');
  if (wordArray.length > 1) {
    wordArray[wordArray.length - 2] += '&nbsp;' + wordArray[wordArray.length - 1];
    wordArray.pop();
    $(this).html(wordArray.join(' '));
  }
});
*/