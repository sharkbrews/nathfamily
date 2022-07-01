/*** TABLE OF CONTENTS
======================================================
    0 / general
    1 / menu toggle
    2 / dropdown
    3 / call the slick functions
    4 / all the  feather icons function
    6 / call  Lazy function
    7 /  call  Typed function
    8 /  call  StickySidebar function
    9 /  call perfect-scrollbar function
    =================================================== ***/
$(function () {
    ("use strict");

        // ============================= menu toggle
        $(".menu-toggle-icon").on("click", function () {
            $(".mb-overlay").addClass("mb-visible");
        });
        $(".mb-overlay-bg , .c").on("click", function () {
            $(".mb-overlay").removeClass("mb-visible");
        });

                // ============================= menu toggle
                $(".add_to_cart_toggle").on("click", function () {
                    $(".add_to_cart_menu").toggleClass("block");
                });
    
        // ================= dropdown
        $('.has-dropdown-m').on("click",function(e) {
            e.preventDefault();
          let $this = $(this);
        
          if ($this.next().hasClass('show')) {
              $this.next().removeClass('show');
              $this.next().slideUp(350);
          } else {
              $this.parent().parent().find('li .dropdown-mobile').removeClass('show');
              $this.parent().parent().find('li .dropdown-mobile').slideUp(350);
              $this.next().toggleClass('show');
              $this.next().slideToggle(350);
          }
      });

    // =============================  menu toggle
    $(".menu_icon").on("click", function () {
        $(".menu_elements").toggleClass("is_active");
        $(this).toggleClass("menu_icon_active");

    });

    // =============================  call  Typed function
    var typed = new Typed(".typed", {
        strings: ["digitals", "websites", "brands"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity,
        backDelay: 1500,
        showCursor: true,
        offset: 0,

    });

    // ============================  call the slick functions
    $('.work-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.market_slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.testi-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.blog-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.feautures-boxes-slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.clients-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
});

$(".has-submenu").on({
    mouseenter: function () {
        $(".sub-nav", this).addClass("visible");
    },
    mouseleave: function () {
        $(".sub-nav", this).removeClass('visible');
    }
});


$(document).ready(function () {
    var count = 0;
    var counter = setInterval(function () {
        if (count < 101) {
            $('.count').text(count + '%');
            $('.loader').css('width', count + '%');
            count++;
        }
        else {
            clearInterval(counter);
        }
    }, 30);
});


// ============================  5/ call  perfect-scrollbar function

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span></span>");
    $("#hours").html(hours + "<span></span>");
    $("#minutes").html(minutes + "<span></span>");
    $("#seconds").html(seconds + "<span></span>");

}

setInterval(function () { makeTimer(); }, 1000);



        // ============================ 3/ call the slick functions
        $('.reviews_slick').slick({
            infinite: true,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
            dots: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        });




/////////////////////////////////////////
// var background = {}
  
// background.initializr = function (){
  
//   var $this = this;
   

 
//   //option
//   $this.id = "background_css3";
//   $this.style = {bubbles_color:"#00715D",stroke_width:0, stroke_color :"black"};
//   $this.bubbles_number = 16;
//   $this.speed = [1500,8000]; //milliseconds
//   $this.max_bubbles_height = $this.height;
//   $this.shape = false // 1 : circle | 2 : triangle | 3 : rect | false :random
  
//   if($("#"+$this.id).lenght > 0){
//     $("#"+$this.id).remove();
//   }
//   $this.object = $("<div style='z-inde:-1;margin:0;padding:0; overflow:hidden;position:absolute;bottom:0px' id='"+$this.id+"'> </div>'").appendTo("body");
  
//   $this.ww = $(window).width()
//   $this.wh = $(window).height()
//   $this.width = $this.object.width($this.ww);
//   $this.height = $this.object.height($this.wh);
  
  
//   $("body").prepend("<style>.shape_background {transform-origin:center; width:80px; height:80px; background: "+$this.style.bubbles_color+"; position: absolute}</style>");
  
  
//   for (i = 0; i < $this.bubbles_number; i++) {
//       $this.generate_bubbles()
//   }
  
// }
 

//  background.generate_bubbles = function() {
//    var $this = this;
//    var base = $("<div class='shape_background'></div>");
//    var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1,3));
//    if(shape_type == 1) {
//      var bolla = base.css({borderRadius: "50%"})
//    }else if (shape_type == 2){
//      var bolla = base.css({width:0, height:0, "border-style":"solid","border-width":"0 40px 69.3px 40px","border-color":"transparent transparent "+$this.style.bubbles_color+" transparent", background:"transparent"}); 
//    }else{
//      var bolla = base; 
//    }    
//    var rn_size = $this.rn(.8,1.2);
//    bolla.css({"transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", top:$this.wh+100, left:$this.rn(-60, $this.ww+60)});        
//    bolla.appendTo($this.object);
//    bolla.transit({top: $this.rn($this.wh/2,$this.wh/2-60), "transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", opacity: 0},$this.rn($this.speed[0],$this.speed[1]), function(){
//      $(this).remove();
//      $this.generate_bubbles();
//    })
     
//   }


// background.rn = function(from, to, arr) {
// if(arr){
//         return Math.random() * (to - from + 1) + from;
// }else{
//   return Math.floor(Math.random() * (to - from + 1) + from);
// }
//   }
// background.initializr()










////////////////////////////particle
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#00715d","#B8E986","#f18417","#FFD300","#edb11f"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000"
        }
      },
      "opacity": {
        "value": 0.5211089197812949,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8.017060304327615,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 12.181158184520175,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#c8c8c8",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });