window.addEventListener('load', function() {

    
    document.querySelector("#ver").addEventListener('click',function () {
        let pass = (document.getElementById("pass")).value
        let pass_ver = (document.getElementById("pass_ver")).value
        
        console.log(pass)
        console.log(pass_ver)

        let err = document.getElementById("error")
        err.innerHTML = ""

        if (pass === pass_ver){
            if (pass.length <= 8){
            err.innerHTML = "Passwords must be 8 or characters"

            }
        }else{
            err.innerHTML = "Passwords do not match"
        }
    
    })



})


