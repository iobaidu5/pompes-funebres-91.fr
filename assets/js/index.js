$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });
  
  const nav = document.querySelector(".Navbar");
  const form = document.querySelector(".to-fixed");
  window.addEventListener("scroll", fixNav);
  // window.addEventListener("scroll", fixForm);
  
  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("navbar-active");
     nav.removeAttribute('clip-path');
    } else {
      nav.classList.remove("navbar-active");
    }
  }

  // function fixForm() {
  //   console.log("11", Math.round(window.scrollY))
  //   console.log("12", form.offsetHeight + 200)
  //   if (window.scrollY > form.offsetHeight + 100) {
  //     form.classList.add("form-fixed");
  //   } else if (Math.round(window.scrollY) == form.offsetHeight - 100){
  //     form.classList.remove("form-fixed");
  //   } else {
  //     form.classList.remove("form-fixed");
  //   }
  // }
  
  var owl = $("#owl");
  owl.owlCarousel({
    items: 1,
    navigation: true,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "<i class='fal fa-caret-left owlNav'></i>",
      "<i class='fal fa-caret-right owlNav'></i>",
    ],
    responsiveClass: true,
    responsive: {
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      1200: {
        items: 1,
        nav: false,
      },
      1600: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });


  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
  
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
  