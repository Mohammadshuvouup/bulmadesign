
let username = document.getElementById("uname");
let password = document.getElementById("pass");


function check(){
    
    if(username.value ==="Mohammad" && password.value==="123456"){
        setTimeout(function() {
            window.location = "../cal/calc.html" 
        });
    }
    else{
        alert("Invalid input");
    }

}

