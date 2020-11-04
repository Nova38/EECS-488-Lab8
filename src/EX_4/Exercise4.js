window.addEventListener('load', function() {

    
    document.querySelector("#update").addEventListener('click',function () {
        //get the dummy text element
        let par = document.getElementById("dummy"); 
        let div = document.getElementById("div_dummy"); 
        console.log("clicked")
        // Get the border values
        let border_red = parseInt((document.getElementById("border_red")).value);
        let border_green = parseInt((document.getElementById("border_green")).value);
        let border_blue = parseInt((document.getElementById("border_blue")).value);
        let border_width = parseInt((document.getElementById("border_width")).value);

        // Update boarder values
        par.style.borderColor = "rgb("+ [border_red,border_green,border_blue].join(',') + ")";
        
        
        switch (border_width) {
            case 0:
                par.style.borderWidth = "thin";
                par.style.borderStyle = "solid";
                break;
            case 1:
                par.style.borderWidth = "medium";
                par.style.borderStyle = "solid";

                break;
            case 2:
                par.style.borderWidth = "thick";
                par.style.borderStyle = "solid";
                break;
            default:
                par.style.borderStyle = "unset";
                break;
        }


        // Get the backgroud values
        let background_red = parseInt((document.getElementById("background_red")).value);
        let background_green = parseInt((document.getElementById("background_green")).value);
        let background_blue = parseInt((document.getElementById("background_blue")).value);
        let background_width = parseInt((document.getElementById("background_width")).value);
        
        par.style.backgroundColor = "rgb("+ [background_red,background_green,background_blue].join(',') + ")";
        


    })



})


