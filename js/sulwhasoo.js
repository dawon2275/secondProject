



$(function() {
    let header = $('header');
    let depth1 = $('.depth1');

    $('header').on('mouseover', function() {
        $(this).addClass('on'); 
        $(this).css('background', 'white')  
        $(this).css('transition', 'all 0.7s')  
        $('.inner').css('color', 'black')
        $('#section').css('color', 'black')
        $('.search ').css( 'filter', 'brightness(0)')

        $('.logo img').attr({
                src: "img/sulwhasoo_orange_logo.png"
        })

    })

    $('header').on('mouseleave', function() {
        $(this).removeClass('on'); 
        $(this).css('background', 'none')  
        $(this).css('transition', 'all 0.5s')  
        $('.inner').css('color', 'white')
        $('#section').css('color', 'white')
        $('.search ').css( 'filter', 'brightness(100)')

        $('.logo img').attr({
                src: "img/sulwhasoo_white_logo.png"
        })

    })

    


    $('.subYes').on('mouseover', function() {
        $(this).children('.depth1').stop().fadeIn(50)
        $(this).siblings('li').removeClass('on')        
    });

    $('.subYes').on('mouseleave', function() {
        $(this).children('.depth1').stop().fadeOut(50)
    });

});

