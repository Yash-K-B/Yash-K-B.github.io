$(window).bind("load", function() {
    console.log("loading finished");
    $("#load").fadeOut();
    $("#contents").fadeIn();

});


$('.event-header-lbtn').click(function() {

    $this = $('.event-header-content.active');
    //console.log($this.next().attr('class'));
    if ($this.prev().hasClass('event-header-content')) {
        $this.prev().toggleClass("active");
        $n_container_id = "#" + $this.prev().attr('id') + "-b";


    } else {
        $(".event-header-content").last().toggleClass("active");
        $n_container_id = "#" + $(".event-header-content").last().attr('id') + "-b";

    }
    console.log($n_container_id);
    $c_container_id = "#" + $this.attr("id") + "-b";
    $($c_container_id).toggleClass("selected");
    $($n_container_id).toggleClass("selected");
    $this.toggleClass("active");

});
$('.event-header-rbtn').click(function() {

    $this = $('.event-header-content.active');
    //console.log($this.next().attr('class'));
    if ($this.next().hasClass('event-header-content')) {
        $this.next().toggleClass("active");
        $n_container_id = "#" + $this.next().attr('id') + "-b";
    } else {
        $(".event-header-content").first().toggleClass("active");
        $n_container_id = "#" + $(".event-header-content").first().attr('id') + "-b";
    }
    console.log($n_container_id);
    $c_container_id = "#" + $this.attr("id") + "-b";
    $($c_container_id).toggleClass("selected");
    $($n_container_id).toggleClass("selected");
    $this.toggleClass("active");

});
$(function() {
    $(".dlg").dialog({
        autoOpen: false,
        hide: "explode",
        show: "explode",
        buttons: [{
            text: "close",
            tabIndex: -1,
            click: function() {
                $(this).dialog("close");
            }

            // Uncommenting the following line would hide the text,
            // resulting in the label being used as a tooltip
            //showText: false
        }],
        height: (window.innerHeight > 992) ? window.innerHeight * 0.8 : window.innerHeight * 0.7,
        width: (window.innerWidth > 992) ? window.innerWidth * 0.4 : ((window.innerWidth > 480) ? window.innerWidth * 0.65 : window.innerWidth * 0.9),
    });
    console.log(window.innerWidth);

    $(".opener").click(function() {
        $dialog_id = "#" + $(this).attr('id') + "-c";
        console.log($dialog_id);
        $(".dlg").dialog("close");
        $($dialog_id).dialog("open");
        console.log("hi");
    });
});

new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 100,
    mobile: true, // default
    live: true // default
}).init();
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