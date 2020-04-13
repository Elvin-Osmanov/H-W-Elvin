$(document).ready(function () {
    var typed= new Typed('#typed', {
        loop:true,
        smartBackspace: false,
        typeSpeed: 100,
        backSpeed: 50,
        strings: ['Developer', 'Designer']
      });


      $(".icon").click(function(){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);

        

       
      })

      $('a.nav-link').on('click', function(event) {
        event.preventDefault();
        $('a.nav-link').each(function () {
            $(this).removeClass("main");
        })

        
        $(this).addClass("main");


        
        
        
    });

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // $(document).on("scroll", onScroll);
    // function onScroll(event){
    //     var scrollPos = $(document).scrollTop();
    //     $('#navbarNav a').each(function () {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
    //         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
    //             $('#navbarNav ul li a').removeClass("main");
    //             currLink.addClass("main");
    //         }
    //         else{
    //             currLink.removeClass("main");
    //         }
    //     });
    // }
    

    
});


