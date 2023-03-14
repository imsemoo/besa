$(document).ready(function () {
    "use strict";

    //Toggle the open class on click of .toggle
    $(".navbar-mobile .toggle, .sidenav .close").on("click", function () {
        $(".sidenav").toggleClass("open");
    });
    //Remove the open class if click outside of .toggle and .close
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".navbar-mobile .toggle, .sidenav .close").length)
            $(".sidenav").removeClass("open");
    });



    /* 
        This code is used to add an animation to elements that have the class "have-animations". 
        It does this by first selecting all elements with the class, then for each element it checks 
        if it is within 150px of the bottom of the window. If it is, the element gets the class "animated" added to it, 
        otherwise it gets the class "animated" removed from it. Finally, it adds an event listener to the window that triggers 
        the reveal function whenever the window is scrolled.
    */
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
    var sliderPhotoGalley = $(".photoGalley-slider");

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
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"]
    });

    customeSlider.owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        items: 1,
    });
    sliderPhotoGalley.owlCarousel({
        loop: true,
        margin: 34,
        dots: false,
        nav: true,
        navText: [" <img src='./img/icon/arrow-circle-left-o.svg'> ", "<img src='./img/icon/arrow-circle-right-o.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
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
    };

    /*
        This code is used to animate a counter that counts up to a specific number. 
        The code uses jQuery's animate function to incrementally increase the value of the counter each time the function is called. 
        The duration and easing of the animation can be customized as well. 
        The end result is an animated counter that can be used to show a number counting up to a specific value.
    */
    function animationCounter() {
        $(".number-count").each(function () {
            $(this).prop("Counter", 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    // Triger  Slider accordion
    $(function () {
        accordion.init({
            id: "accordion"
        });
    });

    // Jumping to sections of the same page 
    // Get value of the href property from clicked element
    var hash = this.hash;

    // Animate the scrolling effect to scroll the view to the section
    $("html, body").animate({
        scrollTop: $(hash).offset().top
    }, 1000, function () {
        // Change the URL hash when the scrolling effect is completed  
        window.location.hash = hash;
    });


    // ---------------------------------------------------


    // When the user clicks on #scrollToTop element
    $("#scrollToTop").on("click", function () {
        // Scroll smoothly to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 3000) {
            $("#scrollToTop").fadeIn();
        } else {
            $("#scrollToTop").fadeOut();
        }
    }).trigger("scroll");

    // ---------------------------------------------------

    // targeting the custome-timeline class using jquery
    $(".custome-timeline").Timeline({
        // setting the class of each timeline item
        itemClass: "timeline-item",
        // positioning the timeline dots at the top
        dotsPosition: "top",
        // setting the autoplay speed - lower number means faster
        autoplaySpeed: 20,
    });

    // ---------------------------------------------------

    // Select all timeline dots
    var $cols = $(".timeline-horizontal .timeline-dots li");

    // Get number of columns to determine width
    var numberOfCols = $cols.length;

    // Set the width of each dot equal to 100 divided by the number of columns
    $cols.css("width", 100 / numberOfCols + "%");

    // On next click, if the slide-next element exists, trigger the click event on it
    $('.nav-timeline .next').click(function (e) {
        e.preventDefault();
        if ($('.slide-next').length) {
            $('.slide-next').trigger('click');
        }
    });

    // On prev click, if the slide-prev element exists, trigger the click event on it
    var $slidePrev = $('.slide-prev');
    $('.nav-timeline').on('click', '.prev', function (e) {
        e.preventDefault();
        if ($slidePrev.length) {
            $slidePrev.trigger('click');
        }
    });




});

const rangeContainer = document.querySelector('.range-container');
rangeContainer.addEventListener('input', ev => {
  const rangeInput = ev.target;
  const valueSpan = rangeContainer.querySelector(`#${rangeInput.id}-value` );
  const sliderWidth = rangeInput.clientWidth;
  const sliderPosition = rangeInput.value;
  const sliderMaxValue = rangeInput.max;
  const sliderPositionPercentage = (sliderPosition/sliderMaxValue)*100;
  rangeInput.style.backgroundImage = `linear-gradient(to right, #33CA94 ${sliderPositionPercentage*sliderWidth/100}px, #f5f5f5 ${sliderPositionPercentage*sliderWidth/100}px)`;
  rangeInput.id === "age" ? valueSpan.textContent = sliderPosition + " year" : valueSpan.textContent = "$" + sliderPosition;
});
rangeContainer.querySelectorAll('input[type="range"]').forEach(rangeInput => rangeInput.value = 0);

// Set event listener on rangeContainer element
rangeContainer.addEventListener('input', ev => {
// Declare variables
  const rangeInput = ev.target;
  const valueSpan = rangeContainer.querySelector(`#${rangeInput.id}-value` );
  const sliderWidth = rangeInput.clientWidth;
  const sliderPosition = rangeInput.value;
  const sliderMaxValue = rangeInput.max;
  const sliderPositionPercentage = (sliderPosition/sliderMaxValue)*100;
// Set rangeInput style
  rangeInput.style.backgroundImage = `linear-gradient(to right, #33CA94 ${sliderPositionPercentage*sliderWidth/100}px, #f5f5f5 ${sliderPositionPercentage*sliderWidth/100}px)`;
// Set textContent depending on rangeInput.id
  rangeInput.id === "age" ? valueSpan.textContent = sliderPosition + " year" : valueSpan.textContent = "$" + sliderPosition;
});
// Set all rangeInput values to 0
rangeContainer.querySelectorAll('input[type="range"]').forEach(rangeInput => rangeInput.value = 0);