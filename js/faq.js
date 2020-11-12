$('.heading').click(function() {
    if ($(this).hasClass('selected')) return;
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
    $content_id = "#" + $(this).attr('id') + "-b";
    //console.log($content_id);

    //console.log($('.d-block').attr('id'));

    //hide previous data
    $('.d-block').addClass('d-none');
    $('.d-block').removeClass('d-block');

    //show current element
    $($content_id).removeClass('d-none');
    $($content_id).addClass('d-block');

    //console.log($($content_id).attr('class'));
});

$(document).ready(function() {
    if ($(document).scrollTop() > (window.innerHeight * 0.05)) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar").addClass("bg-info-1");
        $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
    }


    $(window).scroll(function() { // check if scroll event happened
        //console.log("on scroll " + window.innerHeight + "/" + $(document).scrollTop() + " " + ($(document).scrollTop() > window.innerHeight));
        if ($(document).scrollTop() > (window.innerHeight * 0.05)) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar").addClass("bg-info-1");
            $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar").addClass("bg-transparent");
            $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
        }
    });
});