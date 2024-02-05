$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
   
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
     
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      
      $("html").css("scrollBehavior", "smooth");
    });
  
    
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("show");
      $(".menu-btn i").toggleClass("show");
    });
  

    var typed = new Typed(".typing", {
      strings: ["A Creative Trailblazer", "a Tech Alchemist", "Undergraduate in Computer Science","AI Explorer","Passionate Learner"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["A Creative Trailblazer", "a Tech Alchemist", "Undergraduate in Computer Science","AI Explorer","Passionate Learner"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  });