$(document).ready(function () {
  "use strict";

  // open sidenave in mobile
  $(".navbar-mobile .toggle").on("click", function () {
    $(".sidenav").toggleClass("open");
  });
  // colse sidenave in mobile
  $(".sidenav .colse").on("click", function () {
    $(".sidenav").toggleClass("open");
  });

  //
  // Add click event listener to each question
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", toggleAnswer);
  });

  // Function to toggle the display of the answer
  function toggleAnswer() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "none" ? "block" : "none";
  }
  function reveal() {
    var reveals = document.querySelectorAll(".have-animations");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animated");
      } else {
        reveals[i].classList.remove("animated");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  // opstions owl slider
  var mainSlider = $(".main-slider");
  var sliderTestimonials = $(".slider-testimonials");
  var customeSlider = $(".custome-slider");
  var ukslider = $(".ukslider");

  mainSlider.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
  });

  sliderTestimonials.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    autoPlaySpeed: 3000,
    autoPlayTimeout: 3000,
    autoplayHoverPause: true,
    slideSpeed: 3000,
    smartSpeed: 3000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
  });

  customeSlider.owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    items: 1,
  });

  ukslider.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
  });

  // jQuery animated number counter from zero to value
  var counterAbout = $(".about-us");
  var counterBanner = $(".main-banner");
  var winHeight = $(window).height();
  if (counterAbout.length) {
    var firEvent = false,
      objectPosTop = $(".about-us").offset().top;
    //when element shows at bottom
    var elementViewInBottom = objectPosTop - winHeight;
    $(window).on("scroll", function () {
      var currentPosition = $(document).scrollTop();
      //when element position starting in viewport
      if (currentPosition > elementViewInBottom && firEvent === false) {
        firEvent = true;
        animationCounter();
      }
    });
  } else if (counterBanner.length) {
    var firEvent = false,
      objectPosTop = $(".main-banner").offset().top;
    //when element shows at bottom
    var elementViewInBottom = objectPosTop - winHeight;
    $(window).on("scroll", function () {
      var currentPosition = $(document).scrollTop();
      //when element position starting in viewport
      if (currentPosition > elementViewInBottom && firEvent === false) {
        firEvent = true;
        animationCounter();
      }
    });
  }

  //counter function will animate by using external js also add seprator "."
  function animationCounter() {
    $(".number-count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }

  // Triger  Slider accordion
  $(function () {
    accordion.init({
      id: "accordion",
    });
  });

  // Jumping to sections of the same page
  $(".arrow-bottomGoSection a").on("click", function (event) {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000,
      function () {
        window.location.hash = hash;
      }
    );
  });

  // button scroll to top
  $("#scrollToTop").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  $(window)
    .scroll(function () {
      // scrollToTop is not a function - changed to scrollTop
      if ($(this).scrollTop() > 3000) {
        $("#scrollToTop").fadeIn();
      } else {
        $("#scrollToTop").fadeOut();
      }
    })
    .trigger("scroll");

  // Triger  timeline slider
  $(".custome-timeline").Timeline({
    itemClass: "timeline-item",
    dotsPosition: "top",
    autoplaySpeed: 20,
  });
  var $cols = $(".timeline-horizontal .timeline-dots li");
  var numberOfCols = $cols.length;
  $cols.css("width", 100 / numberOfCols + "%");

  // On next click, if the slide-next element exists, trigger the click event on it
  $(".nav-timeline .next").click(function (e) {
    e.preventDefault();
    if ($(".slide-next").length) {
      $(".slide-next").trigger("click");
    }
  });

  // Attach a click event listener to elements with the class "nav-timeline" and "prev"
  $(".nav-timeline .prev").click(function (e) {
    // Prevent the default behavior of the click event (i.e. following a link, submitting a form, etc.)
    e.preventDefault();

    // Check if there is an element on the page with the class "slide-prev"
    if ($(".slide-prev").length) {
      // If such an element exists, trigger a click event on it
      $(".slide-prev").trigger("click");
    }
  });
});

// Get the search input element
const searchInput = document.querySelector(".search");

// Get the search list element
const searchList = document.querySelector(".search-list");

// Add event listeners to the search input for clicks, focus, and blur events
searchInput.addEventListener("click", toggleSearchList);
searchInput.addEventListener("focus", toggleSearchList);
searchInput.addEventListener("blur", toggleSearchList);

// Add a click event listener to the document object
document.addEventListener("click", function (event) {
  // Check if the click event did not originate from the search input or search list
  if (
    !searchInput.contains(event.target) &&
    !searchList.contains(event.target)
  ) {
    // Hide the search list by removing the 'show' class
    searchList.classList.remove("show");
  }
});

// Function to toggle the 'show' class on the search list
function toggleSearchList() {
  searchList.classList.add("show");
}

const rangeContainer = document.querySelector(".range-container");
rangeContainer.addEventListener("input", (ev) => {
  const rangeInput = ev.target;
  const valueSpan = rangeContainer.querySelector(`#${rangeInput.id}-value`);
  const sliderWidth = rangeInput.clientWidth;
  const sliderPosition = rangeInput.value;
  const sliderMaxValue = rangeInput.max;
  const sliderPositionPercentage = (sliderPosition / sliderMaxValue) * 100;
  rangeInput.style.backgroundImage = `linear-gradient(to right, #33CA94 ${
    (sliderPositionPercentage * sliderWidth) / 100
  }px, #B4BEC8 ${(sliderPositionPercentage * sliderWidth) / 100}px)`;
  rangeInput.id === "age"
    ? (valueSpan.textContent = sliderPosition + " year")
    : (valueSpan.textContent = "$" + sliderPosition);
});
rangeContainer
  .querySelectorAll('input[type="range"]')
  .forEach((rangeInput) => (rangeInput.value = 0));

// Set event listener on rangeContainer element
rangeContainer.addEventListener("input", (ev) => {
  // Declare variables
  const rangeInput = ev.target;
  const valueSpan = rangeContainer.querySelector(`#${rangeInput.id}-value`);
  const sliderWidth = rangeInput.clientWidth;
  const sliderPosition = rangeInput.value;
  const sliderMaxValue = rangeInput.max;
  const sliderPositionPercentage = (sliderPosition / sliderMaxValue) * 100;
  // Set rangeInput style
  rangeInput.style.backgroundImage = `linear-gradient(to right, #33CA94 ${
    (sliderPositionPercentage * sliderWidth) / 100
  }px, #f5f5f5 ${(sliderPositionPercentage * sliderWidth) / 100}px)`;
  // Set textContent depending on rangeInput.id
  rangeInput.id === "age"
    ? (valueSpan.textContent = sliderPosition + " year")
    : (valueSpan.textContent = "$" + sliderPosition);
});
// Set all rangeInput values to 0
rangeContainer
  .querySelectorAll('input[type="range"]')
  .forEach((rangeInput) => (rangeInput.value = 0));
