function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function validatePhone(phone) {
    const phoneNumberRegex = /^01\d{9}$/;
    if (!phoneNumberRegex.test(phone)) {
        return false;}
    return true;
}


function displayWrongAlert() {
    Swal.fire({
        icon: 'warning',
        title: 'Invalid Email or Phone number',
        text: 'check your email or Phone number',
        confirmButtonText: 'OK'
    });
}


function displaysuccessAlert() {
    Swal.fire({
        icon: 'success',
        title: 'success',
        confirmButtonText: 'OK'
    });
}








let contact = document.getElementById("Contact-Us-btn");
let Reset = document.getElementById("Reset-btn");
let email = document.getElementById("email");
let phone = document.getElementById("Phone-Number");
let email_Error = document.getElementById("email-error");
let phone_Error = document.getElementById("phone-error");




if (phone){
    phone.addEventListener("blur",function(e)
    {
        if(validatePhone(e.target.value))
    {
        phone.style.borderColor="green";
        phone_Error.style.display="none";
    
    }
    else
    {
        phone.style.borderColor="red";
        phone_Error.style.display="block";
        phone_Error.style.color="red"
    
    }})
    }

    if (email) {
        email.addEventListener("blur",function(e)
        {
            if((validateEmail(e.target.value)))
        {
        
            email.style.borderColor="green";
            email_Error.style.display="none";
        }
        else
        {
            email.style.borderColor="red";
            email_Error.style.display="block";
            email_Error.style.color="red"
        
        }
        })
        }


if (contact) {
    contact.addEventListener("click",function(e)
    {
    if (validateEmail(email.value)&& validatePhone(phone.value))
    {
        email.style.borderColor="green";
        email_Error.style.display="none";
    
        phone.style.borderColor="green";
        phone_Error.style.display="none";
        displaysuccessAlert();
    }
    else if ( validatePhone(phone.value))
    {
        email.style.borderColor="red";
        email_Error.style.display="block";
        email_Error.style.color="red"
        displayWrongAlert();
    
    }
    else if(validateEmail(email.value))
    {
        phone.style.borderColor="red";
        phone_Error.style.display="block";
        phone_Error.style.color="red"
        displayWrongAlert();
    
    }
    else
    {
        email.style.borderColor="red";
        email_Error.style.display="block";
        email_Error.style.color="red";
        phone.style.borderColor="red";
        phone_Error.style.display="block";
        phone_Error.style.color="red";
        displayWrongAlert();
    }
    })
    }


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
