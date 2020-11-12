$(document).ready(function() {
    if ($(document).scrollTop() > (window.innerHeight * 0.15)) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar").addClass("bg-info-1");
        $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
    }


    $(window).scroll(function() { // check if scroll event happened
        //console.log("on scroll " + window.innerHeight + "/" + $(document).scrollTop() + " " + ($(document).scrollTop() > window.innerHeight));
        if ($(document).scrollTop() > (window.innerHeight * 0.15)) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar").addClass("bg-info-1");
            $(".navbar").removeClass("bg-transparent"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar").addClass("bg-transparent");
            $(".navbar").removeClass("bg-info-1"); // if not, change it back to transparent
        }
    });
});