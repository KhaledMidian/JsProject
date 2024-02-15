function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function validatePassword(password) {

    if (password.length < 8) {return false;}
    if (!/[A-Z]/.test(password)) {return false;}
    if (!/[a-z]/.test(password)) {return false;}
    if (!/\d/.test(password)) {return false;}
    if (!/[^a-zA-Z0-9]/.test(password)) {return false;}
    return true;
}

function displayWrongAlert() {
    Swal.fire({
        icon: 'warning',
        title: 'Invalid Email or Password',
        text: 'check your email or password',
        confirmButtonText: 'OK'
    });
}

function displaysuccessAlert() {
    Swal.fire({
        icon: 'success',
        title: 'Signup Success',
        confirmButtonText: 'OK'
    });
}



var email = document.getElementById("Email");
var Pass = document.getElementById("password");
var Confirmpassword = document.getElementById("Confirmpassword");
let Confirmbtn = document.getElementById("signUpConfirm");



if (email) {
email.addEventListener("blur",function(e)
{var errormsg=document.getElementById("EmailErorr");
    if((validateEmail(e.target.value)))
{

    email.style.borderColor="green";
    errormsg.style.display="none";
}
else
{
    email.style.borderColor="red";
    errormsg.style.display="block";
    errormsg.style.color="red"

}
})
}


if (Pass){
Pass.addEventListener("blur",function(e)
{var errormsg=document.getElementById("passwordErorr");
    if(validatePassword(e.target.value))
{
    Pass.style.borderColor="green";
    errormsg.style.display="none";

}
else
{
    Pass.style.borderColor="red";
    errormsg.style.display="block";
    errormsg.style.color="red"

}})
}



if (Confirmpassword){
    Confirmpassword.addEventListener("blur",function(e)
    {var errormsg=document.getElementById("ConfirmpasswordErorr");
        if(Pass.value==Confirmpassword.value)
    {
        Confirmpassword.style.borderColor="green";
        errormsg.style.display="none";
    
    }
    else
    {
        Confirmpassword.style.borderColor="red";
        errormsg.style.display="block";
        errormsg.style.color="red"
    
    }})
    }


////////////////////////////////////////////////////////////////


if (Confirmbtn && Confirmpassword){
Confirmbtn.addEventListener("click",function(e)
{var errormsg1=document.getElementById("EmailErorr");
    var errormsg3=document.getElementById("ConfirmpasswordErorr");
    var errormsg2=document.getElementById("passwordErorr")

if(validateEmail(email.value)&& (validatePassword(Pass.value))&&(Confirmpassword.value == Pass.value))
{
    email.style.borderColor="green";
    errormsg1.style.display="none";

    Pass.style.borderColor="green";
    errormsg2.style.display="none";

    Confirmpassword.style.borderColor="green";
    errormsg3.style.display="none";
    displaysuccessAlert()
}
else if ( validatePassword(Pass.value)&& (Confirmpassword.value == Pass.value))
{
    email.style.borderColor="red";
    errormsg1.style.display="block";
    errormsg1.style.color="red"

    displayWrongAlert();

}
else if (validateEmail(email.value)&& validatePassword(Pass.value))
{
    Confirmpassword.style.borderColor="red";
    errormsg3.style.display="block";
    errormsg3.style.color="red"
    displayWrongAlert();

}

else
{
    email.style.borderColor="red";
    errormsg1.style.display="block";
    errormsg1.style.color="red";
    Pass.style.borderColor="red";
    errormsg2.style.display="block";
    errormsg2.style.color="red";
    Confirmpassword.style.borderColor="red";
    errormsg3.style.display="block";
    errormsg3.style.color="red";
    displayWrongAlert();

}
})
}
////////////////////////////////////////////////////////////////////////////////
var homebtn= document.getElementById("home");
var homebtn2= document.getElementById("home2");

function goToHome()
{
    window.open("view.html", "_self");
}

homebtn.onclick = goToHome
homebtn2.onclick = goToHome


let aboutUs = document.getElementById("aboutus");
aboutUs.addEventListener("click",function(){
    window.open("aboutus.html", "_self");
});

let aboutUs2 = document.getElementById("aboutus2");
aboutUs2.addEventListener("click",function(){
    window.open("aboutus.html", "_self");
});


let contactus = document.getElementById("contactus");
contactus.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});

let contactus2 = document.getElementById("contactus2");
contactus2.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});
