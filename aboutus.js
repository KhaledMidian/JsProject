var homebtn= document.getElementById("home");
var homebtn2= document.getElementById("home2");

function goToHome()
{
    window.open("view.html", "_self");
}

homebtn.onclick = goToHome
homebtn2.onclick = goToHome

let contactus = document.getElementById("contactus");
contactus.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});

let contactus2 = document.getElementById("contactus2");
contactus2.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});