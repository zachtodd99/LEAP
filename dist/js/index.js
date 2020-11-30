/**
 * Created by C16Zachary.Todd on 5/14/2016.
 */


function changeCenter(name) {

    var element = document.getElementsByClassName("center_circle");
    var element_text = document.getElementById("circle_text");
    var new_name = "../img/" + name + ".png";
    var newBackground = "../img/" + name + "_background.png";
    //switch(name){
    //    case "skiing":
    //    element_text.innerHTML = skiingDescription;
    //
    //    break;
    //    case "camping":
    //    element_text.innerHTML = campingDescription;
    //
    //    break;
    //    case "hiking":
    //    element_text.innerHTML = hikingDescription;
    //
    //    break;
    //    case "rock_climbing":
    //    element_text.innerHTML = rockClimbingDescription;
    //
    //    break;
    //    case "biking":
    //    element_text.innerHTML = bikingDescription;
    //
    //    break;
    //    case "kayaking":
    //    element_text.innerHTML = kayakingDescription;
    //
    //    break;
    //    case "rafting":
    //    element_text.innerHTML = raftingDescription;
    //
    //    break;
    //    case "fishing":
    //    element_text.innerHTML = fishingDescription;
    //    break;
    //}


    //element[0].style.display = "none";

    var background = document.getElementById("home");

    var container = $('#home');
    container.each(function () {
        $(container).css({
            backgroundImage: 'url(' + newBackground + ')'
        });
    });


    //element[0].style.backgroundImage = 'url(' + new_name + ')';


    //var fields = $('.circle'),
    //    container = $('#circle_display'),
    //    width = container.width();
    //fields.each(function () {
    //    var shift = width/6;
    //    $(this).css({
    //        transform: 'translateX(-110%)'
    //    });
    //    angle += step;
    //});

}
var count = 0;

var radius = 350; // radius of the circle
var fields = $('.circle'),
    container = $('#circle_display'),
    width = container.width(),
    height = container.height(),
    angle = 0,
    step = (2 * Math.PI) / fields.length;
fields.each(function () {
    var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2),
        y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
    //this.name = images[count];

    var name = this.id;
    if (this.id.charAt(this.id.length - 1) == '2') {
        name = this.id.substring(0, this.id.length - 1);
    }
    $(this).css({
        left: x + 'px',
        top: y + 'px',
        display: 'block',
        backgroundImage: 'url("../img/' + name + '.png")'
    });
    angle += step;

});


//make the circles navigate to their appropriate page based on their ID and change the background image when the circle is hovered over
$(document).ready(function () {

    var circles = $(".circle");

    circles.click(function (event) {
        navigate(event.target.id);
    });
    circles.mouseover(function (event) {
        changeCenter(event.target.id)
    });
});
