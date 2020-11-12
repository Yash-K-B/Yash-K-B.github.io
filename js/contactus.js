$(window).on("load", function() {
    console.log("loading finished");
    setTimeout(function() {
        $("#contents").fadeIn();
        $("#load").fadeOut();
    }, 1000);

});

$('.heading').click(function() {
    if ($(this).hasClass('selected')) return;
    //retriving ids
    $prev_content_id = "#" + $('.selected').attr('id') + '-b';
    $content_id = "#" + $(this).attr('id') + "-b";

    //selecting header
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    //console.log($content_id);
    //TEST BLOCK

    $('.contactus-content-h').animate({
        scrollLeft: ($('.contactus-content-h').scrollLeft() + $(this).position().left + 30) - (($(window).width() - $(this).width()) / 2)
    }, 700);


    //TEST BLOCK END
    //hide previous data
    $(".card-contact-us").removeClass('bounce-in-fwd');
    $($prev_content_id).addClass('d-none');
    $($prev_content_id).removeClass('d-block');

    //show current element
    $($content_id).removeClass('d-none');
    $($content_id).addClass('d-block');
    $(".card-contact-us").addClass('bounce-in-fwd');


    $("a.icoFacebook").each(function() {
        $(this).toggleClass('rotate360deg');
        $(this).toggleClass('anti-rotate360deg');
        // console.log($(this).attr('class'));
    });


    //console.log($($content_id).attr('class'));
});

//roate animation on load (social links)
$(function() {
    $("a.icoFacebook").each(function() {
        $(this).toggleClass('anti-rotate360deg');
    });

});



$(document).ready(function() {
    if ($(document).scrollTop() > (window.innerHeight * 0.07)) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar").addClass("bg-info-1");
        $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
    }


    $(window).scroll(function() { // check if scroll event happened
        //console.log("on scroll " + window.innerHeight + "/" + $(document).scrollTop() + " " + ($(document).scrollTop() > window.innerHeight));
        if ($(document).scrollTop() > (window.innerHeight * 0.07)) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar").addClass("bg-info-1");
            $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar").addClass("bg-transparent");
            $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
        }
    });
});