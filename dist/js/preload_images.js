/**
 * Created by Zach on 5/23/2016.
 */
//TO BE USED ON THE MAIN PAGE ONLY
function preload(images){
    $(images).each(function(){
        (new Image()).src = this;

    });
}

//put all the names for the images in this array


var image_array = {};
var count = 0;
$('.circle').each(function(){
    image_array[count] = this.id + "_background.png";
    count++;
});
preload(image_array);
