/**
 * Created by C16Zachary.Todd on 4/20/2016.
 */


var center =  $('#center');
    center.each(function(){
        var height = document.getElementById("first_picture").clientHeight;
        $(center).css({
            height: height + 'px',
            width: 'auto',
            transform: 'scale(1.4)'
        });
    });

window.addEventListener("resize", resizeStuff);

function resizeStuff(){
    var center =  $('#center');
    center.each(function(){
        var height = document.getElementById("first_picture").clientHeight;
        $(center).css({
            height: height + 'px',
            width: 'auto',
            transform: 'scale(1.4)'
        });
    });
}
