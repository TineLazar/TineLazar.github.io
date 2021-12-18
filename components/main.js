$(document).ready(function () {
    $('#apgk-slideshow').load('/components/apgk_slideshow.html');
    $("#petra-slideshow").load("/components/petra_slideshow.html"); 

    document.getElementById('petra_click').addEventListener('click', function (event) {
        var div = document.getElementById('contentdiv');
        div.removeChild(div.firstChild);
        $("#petra").load("/components/petra.html"); 
            });

    document.getElementById('apgk_click').addEventListener('click', function (event) {
        var div = document.getElementById('contentdiv');
        div.removeChild(div.firstChild);
        $("#petra").load("/components/apgk.html"); 
            });

    document.getElementById('tk_click').addEventListener('click', function (event) {
        var div = document.getElementById('contentdiv');
        div.removeChild(div.firstChild);
        $("#petra").load("/components/timekeeper.html"); 
            });
});