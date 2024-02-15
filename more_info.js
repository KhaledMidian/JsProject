async function getTheData()
{
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    return data
}
let theWebData=await getTheData()


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
document.getElementsByClassName("MoreInfoImg")[0].src=theWebData[getCookie("category")][getCookie("element")]["image"];
console.log(document.getElementsByClassName("goodInfo")[0].children[1])
document.getElementsByClassName("goodInfo")[0].children[0].innerHTML=theWebData[getCookie("category")][getCookie("element")]["name"];
document.getElementsByClassName("categoriesGoodInfo")[0].children[0].innerHTML="Brand : "+theWebData[getCookie("category")][getCookie("element")]["brand"];
document.getElementsByClassName("categoriesGoodInfo")[0].children[1].innerHTML="Description : "+theWebData[getCookie("category")][getCookie("element")]["description"];
document.getElementsByClassName("categoriesGoodInfo")[0].children[2].innerHTML="Price : "+theWebData[getCookie("category")][getCookie("element")]["price"] +"$";

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

///////////////////////////////////////////////////////////////////////////

var Loginbtn = document.getElementById("Loginbtn");
var Loginbtn2 = document.getElementById("Loginbtn2");
function goToLogin()
{
    window.open("login.html", "_self");
}

Loginbtn.onclick = goToLogin
Loginbtn2.onclick = goToLogin

/////////////////////////////////////////////////////////////////////////////

let contactus = document.getElementById("contactus");
contactus.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});

let contactus2 = document.getElementById("contactus2");
contactus2.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});