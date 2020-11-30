/**
 * Created by C16Zachary.Todd on 5/14/2016.
 */
function moveRoundText(){
   var round = document.getElementById("round_text_holder");
    var header = document.getElementById("header");

    var text = $('#round_text_holder');
    //var round_rect = round.getBoundingClientRect();
    var head_rect = header.getBoundingClientRect();

    text.each( function (){
        $(this).css({

        });
    });



}

function resizeHeader(){
    var container=  $('#header');
    container.each(function(){
        $(container).css({

        });
    });
}

function resizeHolder(){

    var container=  $('#holder');
    container.each(function(){
        $(container).css({

        });
    });
}



var diffs = $('.difficulty');

diffs.each(function (){

    switch(this.innerHTML){
        case "EASY":
        this.style.color = '#00FF00';
        break;
        case "MODERATE":
        this.style.color = '#0000FF';
        break;
        case "HARD":
        this.style.color = '#FF0000';
        break;


    }

});
