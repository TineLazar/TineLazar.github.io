try{
    isComponentResourcesAlreadyIncluded; //this variable is flag of whether resources already loaded or not.
}
catch(e) {
    function Slideshow(){
        this.slideindex = 0;
        this.timer = null;
        this.slides = null;
        this.dots = null;

        this.showslide = function(n){

            for (i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = "none";
            }

            for (i = 0; i < this.dots.length; i++) {
                this.dots[i].style.backgroundColor = "#bbb";
            }

            if(n !=null)
            {
                this.slideindex = n;
            }
            else{
                this.slideindex++;
            }

            if (this.slideindex >= this.slides.length) {this.slideindex = 0}

            this.slides[this.slideindex].style.display = "block";
            this.dots[this.slideindex].style.backgroundColor = "#717171";
        }

        this.showthisslide = function(n)
        {
            this.stopslideshow();
            this.slideindex = n;
            this.showslide(n);
        }

        this.findelements = function(slides, dots)
        {
            this.slides = document.getElementsByClassName(slides);
            this.dots = document.getElementsByClassName(dots);
        }

        this.stopslideshow = function(){
            if(this.timer != null)
            {
                clearInterval(this.timer);
            }
        }

        this.startslideshow = function(n)
        {
            this.timer = setInterval(() => {
                this.showslide(n);
            }, 5000);
        }

        this.changeslide = function(n)
        {
            this.stopslideshow();
            this.slideindex += n;
            this.showslide(this.slideindex);
        }

        this.init = function(slides, dots){
            this.findelements(slides, dots);
            this.slides[0].style.display = "block";
            this.dots[0].style.backgroundColor = "#717171";
            this.startslideshow(null);
        }
    }
}