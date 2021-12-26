$(document).ready(function () {
    $('#apgk-slideshow').load('/components/apgk_slideshow.html');
    $("#petra-slideshow").load("/components/petra_slideshow.html"); 

    document.getElementById('petra_click').addEventListener('click', function (event) {
        window.location.href='/petra.html'
            });

    document.getElementById('apgk_click').addEventListener('click', function (event) {
        window.location.href='/apgk.html'
            });

    document.getElementById('tk_click').addEventListener('click', function (event) {
        window.location.href='/timekeeper.html'
            });
});