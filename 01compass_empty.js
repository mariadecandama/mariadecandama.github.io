//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
        
         //text_area.textContent = compassHeading;

         if(compassHeading > 315 || compassHeading < 45) {
                text_area.textContent = "To the Novelist, an empty sleeper.";
        }

        if(compassHeading >= 45 && compassHeading < 135) {
                text_area.textContent = "To the Echo, a traitor Lily.";
        }

        if(compassHeading >= 135 && compassHeading < 225) {
                text_area.textContent = "To the Spasm, a mask.";
        }

        if(compassHeading >= 225 && compassHeading < 315) {
                text_area.textContent = "To the Whisky, a goodbye.";
        }

        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


