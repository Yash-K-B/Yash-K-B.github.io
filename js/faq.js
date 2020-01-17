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