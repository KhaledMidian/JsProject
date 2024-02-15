////////////////////////////slider////////////////////////////////////////
var imgarr=[];
imgarr.push("./imgs/slider/1.jpg");
imgarr.push("./imgs/slider/2.jpg");
imgarr.push("./imgs/slider/3.jpg");
imgarr.push("./imgs/slider/4.webp");
imgarr.push("./imgs/slider/5.webp");
var i =0;
let slider= document.getElementsByClassName('slider');
function nextimg()
{
    
    if(i<4)
        {i++;}
    else
       { i=0;}
    slider[0].style.backgroundImage=`url(${imgarr[i]})`
}
var setint;
function start()
{
    
    clearInterval(setint);
    setint=setInterval(nextimg,3000);

}
if(slider.length > 0)
    {start();}

async function getTheData()
{
    let response = await fetch("http://localhost:3000/products");
    let data = await response.json();
    return data
}

let theWebData=await getTheData()

let category=0;

let productContainer = document.getElementById('productContainer');
    productContainer.innerHTML='';

    for (let i=0; i<theWebData[0].length; i++)
    {
        
           
            let card = document.createElement('div');
            card.classList.add('col', 'mb-4', 'mt-5', 'card-container');
            const cardContent = `
            <div class="card h-100 shadow rounded-4">
                <img id="${i}" src="${theWebData[0][i].image}" class="card-img-top rounded-top-4 product-img" alt="Product Image">
                <div class="card-body d-flex flex-column">
                <h5 class="card-title">${theWebData[0][i].name}</h5>
                <p class="card-text text-muted smaller-text">${theWebData[0][i].brand}</p>

                <span class="h5 mb-0 text-gray"> ${theWebData[0][i].price} $</span>
                <div class="flex-grow-1"></div> <!-- Spacer to push the button to the bottom -->
                <div class="mt-2 text-center">
                <button id="${i}" class="btn btn-outline-danger rounded-pill mb-3 add-to-cart">
                    <i class="fa fa-cart-plus me-2" aria-hidden="true"></i>Add to Cart
                </button>
              </div>
                </div>
            </div>
            `;
            card.innerHTML = cardContent;
            productContainer.appendChild(card);
    }

    let addToCartBtns=document.getElementsByClassName('btn btn-outline-danger rounded-pill mb-3 add-to-cart');
    for(let i=0;i<addToCartBtns.length;i++) {
        addToCartBtns[i].addEventListener('click',storeInlocal);
    }

    let cards=document.getElementsByClassName('card-img-top rounded-top-4 product-img');
    for(let i=0;i<cards.length;i++) {
        cards[i].addEventListener('click',function(){
            getresult(cards[i].id);
        });
    }
     


    function getresult(element)
{
    document.cookie="category ="+category;
    document.cookie="element ="+element;
    window.open("more_info.html","_self"); 
    
}

let moreinfobtns = document.getElementsByClassName('MoreInfo');
for (let i = 0; i<moreinfobtns.length; i++)
{
    moreinfobtns[i].addEventListener('click',function(){
        getresult(moreinfobtns[i].parentNode.parentNode.id);
    })
}


/////////////////////////////////////////////////////////////////////////////////////////////


function getCategoryProducts()
{
    let productContainer = document.getElementById('productContainer');
    productContainer.innerHTML='';
    category=this.id;

    for (let i=0; i<theWebData[this.id].length; i++)
    {
        
            let card = document.createElement('div');
            card.classList.add('col', 'mb-4', 'mt-5', 'card-container');
            const cardContent = `
            <div class="card h-100 shadow rounded-4">
                <img id="${i}" src="${theWebData[this.id][i].image}" class="card-img-top rounded-top-4 product-img" alt="Product Image">
                <div class="card-body d-flex flex-column">
                <h5 class="card-title">${theWebData[this.id][i].name}</h5>
                <p class="card-text text-muted smaller-text">${theWebData[this.id][i].brand}</p>

                <span class="h5 mb-0 text-gray"> ${theWebData[this.id][i].price} $</span>
                <div class="flex-grow-1"></div> <!-- Spacer to push the button to the bottom -->
                <div class="mt-2 text-center">
                <button id="${i}" class="btn btn-outline-danger rounded-pill mb-3 add-to-cart">
                    <i class="fa fa-cart-plus me-2" aria-hidden="true"></i>Add to Cart
                </button>
              </div>
                </div>
            </div>
            `;
            card.innerHTML = cardContent;
            productContainer.appendChild(card);
    }

    let addToCartBtns=document.getElementsByClassName('btn btn-outline-danger rounded-pill mb-3 add-to-cart');
    for(let i=0;i<addToCartBtns.length;i++) {
        addToCartBtns[i].addEventListener('click',storeInlocal);
    }

    let cards=document.getElementsByClassName('card-img-top rounded-top-4 product-img');
    for(let i=0;i<cards.length;i++) {
        cards[i].addEventListener('click',function(){
            getresult(cards[i].id);
        });
    }
}


    let categoriesbtns=document.getElementsByClassName('categoriesbtn');
    for(let i=0;i<categoriesbtns.length;i++) {
        categoriesbtns[i].addEventListener('click',getCategoryProducts);
    }

//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////

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

window.onscroll = function () 
{

if (backupbtn && document.body.scrollTop > 350 || document.documentElement.scrollTop > 350)
{
    backupbtn.style.display = "block";
    backupbtn.onclick = topFunction

}
else
{
    backupbtn.style.display = "none";

}
};



/////////////////////////////////////////////////////////////////////////

var Loginbtn = document.getElementById("Loginbtn");
var Loginbtn2 = document.getElementById("Loginbtn2");
function goToLogin()
{
    window.open("login.html", "_self");
}

Loginbtn.onclick = goToLogin
Loginbtn2.onclick = goToLogin

// /////////////////////////////////////////////////////////////////////////////

let cartlist = []
localStorage.cart=[];
var view_cart_number = document.getElementById("cartList");


function displayEmptyCartAlert() {
    Swal.fire({
        icon: 'warning',
        title: 'Empty Cart',
        text: 'Your cart is empty',
        confirmButtonText: 'OK'
    });
}


function openCart ()
{
    if (cartlist.length > 0){
        window.open("cart.html", "_self");
    }
    else{

        displayEmptyCartAlert();
    }
    
}
var cart = document.getElementById("cart");
if ( cart ){cart.onclick = openCart}

// /////////////////////////////////////////////////////////////////////////////



function storeInlocal()
{
    cartlist.push([category,this.id]);
    localStorage.cart=JSON.stringify(cartlist)
    view_cart_number.innerHTML= cartlist.length;
    this.disabled=true;
}
/////////////////////////////////////////////////////////////////////////////////////

let aboutUs = document.getElementById("aboutus");
aboutUs.addEventListener("click",function(){
    window.open("aboutus.html", "_self");
});

let aboutUs2 = document.getElementById("aboutus2");
aboutUs2.addEventListener("click",function(){
    window.open("aboutus.html", "_self");
});

////////////////////////////////////////////////////////////////////////////////////////
let contactus = document.getElementById("contactus");
contactus.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});

let contactus2 = document.getElementById("contactus2");
contactus2.addEventListener("click",function(){
    window.open("contactus.html", "_self");
});