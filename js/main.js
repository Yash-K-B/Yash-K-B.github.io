$(window).on("load", function() {
    console.log("loading finished");
    setTimeout(function() {
        $("#contents").fadeIn();
        $("#load").fadeOut();
    }, 1000);

});


/*

document.onload = function() {
    // var state = document.readyState;
    // if (state == 'interactive')
    //     document.getElementById('contents').style.display = "none";
    // else {
    //     setTimeout(function() {
    //         document.getElementById('interactive');
    document.getElementById('load').style.display = "none";
    document.getElementById('contents').style.display = "block";
    // }, 1000);
    //  }
}
*/

new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 100,
    mobile: true, // default
    live: true // default
}).init();
$(document).ready(function() {
    if ($(document).scrollTop() > window.innerHeight) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar").addClass("bg-info-1");
        $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
    }


    $(window).scroll(function() { // check if scroll event happened
        //console.log("on scroll " + window.innerHeight + "/" + $(document).scrollTop() + " " + ($(document).scrollTop() > window.innerHeight));
        if ($(document).scrollTop() > window.innerHeight) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar").addClass("bg-info-1");
            $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar").addClass("bg-transparent");
            $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
        }
    });
});