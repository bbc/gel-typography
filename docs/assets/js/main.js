$(function() {
    var bold_active = false;

    // toggle the bold classes on or off
    $('#bold-toggle').on('click', function() {

        $('.gel-type-demo').each(function() {
            var $self = $(this),
                type_class = $(this).data('type-class');

            $(this).toggleClass('gel-' + type_class + ' gel-' + type_class + '-bold');
        });

        $(this).html() == 'Toggle Bold Off' ? $(this).html('Toggle Bold On') : $(this).html('Toggle Bold Off');

    });

    if(!Modernizr.touch) {
        $('#touch-toggle').html('Toggle Touch On');
    }

    // toggle the touch classes on or off
    $('#touch-toggle').on('click', function() {
        $('html').toggleClass('touch no-touch');

        $(this).html() == 'Toggle Touch Off' ? $(this).html('Toggle Touch On') : $(this).html('Toggle Touch Off');
    });

});
