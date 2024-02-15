async function getTheData()
{
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    return data
}
let theWebData=await getTheData()
let products =JSON.parse(localStorage.cart);
let productsContainer=document.getElementById("products");


function minus()
{
    
    if((parseFloat(allprice.innerHTML))>0)
    {
        this.parentNode.children[4].innerHTML--;

         allprice.innerHTML=(parseFloat(allprice.innerHTML)-this.parentNode["price"]).toFixed(2);
    }
   if (this.parentNode.children[4].innerHTML<1)
    {
        this.parentNode.style.display="none";
    }

}

function plus()
{
    this.parentNode.children[4].innerHTML++;
    allprice.innerHTML=(parseFloat(allprice.innerHTML)+this.parentNode["price"]).toFixed(2);
}

let allprice=document.getElementById("allprice");

var p=0;
for(var i=0 ;i< products.length ;i++) {
    var img=document.createElement("img");
    img.src=theWebData[products[i][0]][products[i][1]]["image"];
    img.style="width: 60%;height: 200px;border-radius: 10px;align-self: center;";
    var nam=document.createElement("h4");
    nam.style="display: block;"
    nam.innerHTML="Name : "+theWebData[products[i][0]][products[i][1]]["name"];
    var price=document.createElement("h4");
    price.style.display="block";
    p+=parseFloat(theWebData[products[i][0]][products[i][1]]["price"]);
    price.innerHTML="Price : "+theWebData[products[i][0]][products[i][1]]["price"] + "$";
    var decrease=document.createElement("button");
    decrease.innerHTML="-"
    decrease.style="width: 30px;inline-block; border-radius: 20%; margin :10px;";
    decrease.onclick=minus;
    var quantity=document.createElement("h4");
    quantity.style.display="inline-block";
    quantity.innerHTML=1;
    var increase=document.createElement("button");
    increase.style="width: 30px;inline-block; border-radius:20%;margin :10px;";
    increase.innerHTML="+"
    increase.onclick=plus;
    var card=document.createElement("div");
    card.append(img);
    card.append(nam);
    card.append(price);
    card.append(decrease);
    card.append(quantity);
    card.append(increase);
    productsContainer.append(card)
    card.style="width: 27%; border-radius: 10px; display: inline-block; margin: 15px; text-align: center;";
    card["price"]=parseFloat(theWebData[products[i][0]][products[i][1]]["price"]);
}
allprice.innerHTML=p;
//////////////////////////////////////////////////////////////////////////////
var homebtn= document.getElementById("home");
var homebtn2= document.getElementById("home2");

function goToHome()
{
    window.open("view.html", "_self");
}

homebtn.onclick = goToHome
homebtn2.onclick = goToHome
////////////////////////////////////////////////////////////////////////////
var backupbtn= document.getElementById("backup");
function topFunction() {
    document.documentElement.scrollTop = 0;
  }
if (backupbtn)
{
    backupbtn.onclick = topFunction

}

/////////////////////////////////////////////////////////////////////////////

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
