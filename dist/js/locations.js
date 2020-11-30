/**
 * Created by C16Zachary.Todd on 5/14/2016.
 */



$(document).ready(function () {

    var circles = $(".locs");

    circles.click(function (event) {

        if (event.target.nodeName == "IMG") {
            navigate(event.target.title.toLowerCase());
        } else {
            navigate(event.target.textContent.toLowerCase());
        }

    });

});

$(document).ready(function () {

    var circles = $(".bottom");
    var title = document.getElementsByTagName("title")[0].innerHTML;
    title= title.substring(0,title.length-10);
    var text;
    circles.click(function (event) {

        if (event.target.nodeName == "IMG") {
            text = event.target.title;

            if (text == "Locations") {
                navigate(title + "_locations");
            } else if (text == "Buy Equipment") {
                navigate(title + "_buy");
            } else if (text == "Rent Equipment") {
                navigate(title + "_rent");
            } else if (text == "Get Connected") {
                navigate(title + "_connect");
            } else if (text == "Something Else?") {
                navigate(title + "_something");
            }

        } else {
            text = event.target.textContent;

            if (text == "Locations") {
                navigate(title + "_locations");
            } else if (text == "Buy Equipment") {
                navigate(title + "_buy");
            } else if (text == "Rent Equipment") {
                navigate(title + "_rent");
            } else if (text == "Get Connected") {
                navigate(title + "_connect");
            } else if (text == "Something Else?") {
                navigate(title + "_something");
            }
        }

    });

});



