function fixMargin(left) {
    $(this).css("left", left);
}

var currentLoc = 0;


$(document).ready(function () {

    $('#right_button').click(function () {
        var transitionSize = document.body.clientWidth;

        if (currentLoc < 4) {
            currentLoc++;


            $(".inner").animate({left: -transitionSize * currentLoc}, 400, fixMargin(-transitionSize * currentLoc));

            $('#left_button').prop('disabled', true);
            $('#right_button').prop('disabled', true);
            setTimeout(function () {
                $('#left_button').prop('disabled', false);
                $('#right_button').prop('disabled', false);
            }, 500);
        } else {

            currentLoc = 0;

            $(".inner").animate({left: 0}, 400, fixMargin(0));
        }

    });

    $('#left_button').click(function () {
        var transitionSize = document.body.clientWidth;
        if (currentLoc > 0) {
            currentLoc--;

            $(".inner").animate({left: -transitionSize * currentLoc}, 400, fixMargin(-transitionSize * currentLoc));

            $('#right_button').prop('disabled', true);
            $('#left_button').prop('disabled', true);
            setTimeout(function () {
                $('#left_button').prop('disabled', false);
                $('#right_button').prop('disabled', false);
            }, 500);
        } else {
            currentLoc = 4;


            $(".inner").animate({left: -transitionSize * 4}, 400, fixMargin(-transitionSize * 4));
        }
    });


});
$(window).resize(function () {
    var transitionSize = document.body.clientWidth;

    //respace the individual elements of the slider
    $('.slideshow_item').css({

        float: 'left',
        width: transitionSize

    });

    //move the inner slider so the current location is centered
    $(".inner").animate({left: -transitionSize * currentLoc}, 0, fixMargin(-transitionSize * currentLoc));

});
