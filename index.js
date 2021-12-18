$(document).ready(function () {
    $('#header').load('./components/header.html');
    $("#Footer").load("./components/footer.html"); 
});

$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('#content').load('./components/main.html');
    }
});
 
 // ----------Hide navbar when scrolling----------
 var navLinks = document.getElementById("navLinks");

 function showMenu()
 {
    document.getElementById('navLinks').style.right = "0";
 }

 function hideMenu()
 {
    document.getElementById('navLinks').style.cssText = "right:-200";
 }

 // ---------- navigate the page----------
 function GoToAbout()
 {
    $('#content').load('./components/main.html', function() {
        document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
    });   
 }

 function GoToProjects()
 {
    $('#content').load('./components/main.html', function() {
     document.getElementById('Projects').scrollIntoView({behavior:"smooth"});
    });   
 }

 function GoToResume()
 {
    $('#content').load('./components/main.html', function() {
     document.getElementById('Resume').scrollIntoView({behavior:"smooth"});
    });   
 }

 function GoToContact()
 {  
     var resume = document.getElementById('Resume');
     var contact = document.getElementById('Contact');

     if(!resume)
     {
        $('#content').load('/components/main.html', function() {
            contact = document.getElementById('Contact');
            contact.scrollIntoView({behavior:"smooth"});
        })
     }
     else{
        contact.scrollIntoView({behavior:"smooth"});
     }
    //  window.scrollTo(0,document.body.scrollHeight);
 }
 
 // ----------Change fon color based on location ----------
 var prevScrollPos = 0;

 window.onscroll = function() {
     var currentScrollPos = window.pageYOffset;

     var navlinkels = document.getElementsByName("navlink")

     var linkcolor = "#fff"
     if (currentScrollPos >= 0.97*document.getElementById("header").clientHeight)
     {
         linkcolor = "#000000";
     }

     for(var i = 0; i < navlinkels.length; i++) 
         {
             navlinkels[i].style.color = linkcolor;
         }
 }           