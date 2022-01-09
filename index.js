try{
    isComponentResourcesAlreadyIncluded; //this variable is flag of whether resources already loaded or not.
}
catch(e) 
{
        $(document).ready(function () {
            $('#header').load('./components/header.html', function()
            {
                if(['apgk','petra','timekeeper'].some(v => document.URL.includes(v)))
                {
                    HideElementsByName("maincontent");
                };
            });
            
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
        try
        {
            document.getElementById('Projects').scrollIntoView({behavior:"smooth"});
        }
        catch(ex)
        {
            $('#content').load('./components/main.html', function() {
                document.getElementById('Projects').scrollIntoView({behavior:"smooth"});
            }); 
        }
    }

    function GoToResume()
    {
        try
        {
            document.getElementById('Resume').scrollIntoView({behavior:"smooth"});
        }
        catch(ex)
        {
            $('#content').load('./components/main.html', function() {
                document.getElementById('Resume').scrollIntoView({behavior:"smooth"});
            });   
        }
    }

    function GoToContact()
    {  
        var resume = document.getElementById('Resume');
        var contact = document.getElementById('Contact');

        if(document.URL.includes("index"))
        {
            if(!resume)
            {
                $('#content').load('/components/main.html', function() {
                    contact.scrollIntoView({behavior:"smooth"});
                })
            }
        }

        contact.scrollIntoView({behavior:"smooth"});     
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

    function HideElementsByName(name)
    {
        let el = document.getElementsByName(name);
        for (i = 0; i < el.length; i++) {
            el[i].style.display = "none";   
        }
    }
}
