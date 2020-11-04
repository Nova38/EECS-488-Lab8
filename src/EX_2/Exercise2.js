window.addEventListener('load', function() {
    // Get the image elment
    let img = document.querySelector("#img_el");

    let img_arry = ['Image_1','Image_2','Image_3','Image_4','Image_5'];

    // Load the first image
    updateImage(0);

    //  The Next Button hander
    document.querySelector("#next").addEventListener('click',function () {
        updateImage(1);
    })

    //  The Back Button hander
    document.querySelector("#back").addEventListener('click',function () {
        updateImage(-1);
    })


    function updateImage(change_amount) {
        let current = img.alt;
        let img_num = img_arry.indexOf(current) + change_amount;
        
        if (img_num >= 5) {
            img_num  = 0;
        } else if (img_num < 0) {
            img_num  = 4;
        }
        
        img.alt = img_arry[img_num];
        img.src = img_arry[img_num]+'.png';
        // set the image properties
        img.width = 100;
        img.height = 100;


    }


})



