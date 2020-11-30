
//button.onclick = function () {
//    var div = document.getElementById('popup');
//    if (div.style.display !== 'none') {
//        div.style.display = 'none';
//    }
//    else {
//        div.style.display = 'block';
//    }
//};




function navigate(name) {
    //f = new File(name + '.html');
    //if (f) {
    window.location = name + '.html';
    //} else {
    //    window.location = '../404.html';
    //}

    

}
function changeSearch(){
    document.getElementById("search_icon").src = "../img/search_inverted.png";
}

function changeBack(){
    document.getElementById("search_icon").src = "../img/search.png";
}

function inputFocus(i) {
    if (i.value == i.defaultValue) {
        i.value = "";
        i.style.color = "#000";
    }
}
function inputBlur(i) {
    if (i.value == "") {
        i.value = i.defaultValue;
        i.style.color = "#888";
    }
}










