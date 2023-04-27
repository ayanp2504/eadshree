$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Quality Specialist", "Business Technology Analyst", "Designer"],
        typeSpeed: 100,  // defining speed of the auto typing
        backSpeed: 60,   // deletion speed from the end
        loop: true       // all the values stated above will come in loop
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Quality Specialist", "Business Technology Analyst", "Designer"],
        typeSpeed: 100,   // defining speed of the auto typing
        backSpeed: 60,    // deletion speed from the end
        loop: true        // all the values stated above will come in loop
    });

    // owl carousel script for hobbies page
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,   // cards will come in loop
        autoplay: true, // auto scroll speed for owlCarousel is set true, default speed is 2 sec
        autoplayTimeOut: 5000,  //   Cards will auto slide in every 5 secs
        autoplayHoverPause: true, // When you hover on cards, autoplay will pause
        responsive: {             // slider will have 3 cards showing always
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});