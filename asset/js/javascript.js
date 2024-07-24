$(document).ready(function() {
    $('[data-bs-toggle="collapse"]').on('click', function(event) {
        event.stopPropagation();
        var target = $(this).attr('href');
        $('.collapse').not(target).collapse('hide');
    });

    $(document).on('click', function() {
        $('.collapse').collapse('hide');
    });

    $('.collapse').on('click', function(event) {
        event.stopPropagation();
    });

    // Custom function to hide collapse when screen width is >= 992px
    function checkScreenWidth() {
        if ($(window).width() >= 992) {
            $('.collapse').collapse('hide');
        }
    }
    // Call the function on load and resize
    checkScreenWidth();
    $(window).on('resize', checkScreenWidth);
});