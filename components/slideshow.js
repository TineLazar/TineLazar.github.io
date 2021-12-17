var timeout = null;
var slideIndex= 0;
showSlides(null);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

if(n !=null)
{
    clearTimeout(timeout)
    slideIndex = n
}
else{
    slideIndex++;
}

if (slideIndex > slides.length) {slideIndex = 1}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
timeout = setTimeout(showSlides, 5000);
}

function StopSlideshow()
{
clearTimeout(timeout);
}

function RestartSlideShow()
{
showSlides(null);
}