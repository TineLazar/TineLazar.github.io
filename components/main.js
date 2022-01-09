try{
    isComponentResourcesAlreadyIncluded; //this variable is flag of whether resources already loaded or not.
}
catch(e) {
    $(document).ready(function () {
        $('#apgk-slideshow').load('/components/apgk_slideshow.html');
        $("#petra-slideshow").load("/components/petra_slideshow.html"); 

        let pcl = document.getElementsByName('petra_click');
        
        for(var i = 0; i < pcl.length; i++)
        {
            pcl[i].addEventListener('click', function (event) {
            window.location.href='/petra.html'
            });
        }

        let acl = document.getElementsByName('apgk_click');
        
        for(var i = 0; i < acl.length; i++)
        {
            acl[i].addEventListener('click', function (event) {
            window.location.href='/apgk.html'
            });
        }

        document.getElementById('tk_click').addEventListener('click', function (event) {
            window.location.href='/timekeeper.html'
                });
    });
}