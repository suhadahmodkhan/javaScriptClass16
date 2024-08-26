const card = document.getElementById("card1")
const cardMoney1 = parseFloat(document.getElementById("card-money1").innerText).toFixed(2)
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")
const addName = document.getElementById("add-name");
const cardName = document.getElementById("card-name1");
const cardName3 = document.getElementById("card-name3");
const totalPrice = document.getElementById("total-price")
const appleButton = document.getElementById("apply-button")
const coupon = document.getElementById("coupon-code")
const discountPrice = document.getElementById("discount-price")
const makePurchase = document.getElementById("make-purchase")
const goHome = document.getElementById("go-home")
goHome.addEventListener("click", function(){
    appleButton.setAttribute("disabled", true)
    addName.innerText = "";
    totalPrice.innerText = "00.00"
    discountPrice.innerText = "00.00"
    makePurchase.setAttribute("disabled" , true)
})
makePurchase.addEventListener("click" , function(){
    console.log("click make purchase")
})
let i = 0 ;
card.addEventListener("click" , function() {
// addName.innerText = cardName.innerText ;
const floatTotalPrice = parseFloat(totalPrice.innerText).toFixed(2)
totalPrice.innerText = parseFloat(cardMoney1) + parseFloat(floatTotalPrice) ;
    makePurchase.removeAttribute("disabled")
    if(parseFloat(totalPrice.innerText) > 200){
        console.log("true")
        appleButton.removeAttribute("disabled")
    }
    // i++ ;
    const p = document.createElement("p")
    p.innerText = i +"."+ cardName.innerText ;
    addName.appendChild(p);
})
card3.addEventListener("click" , function() {
// addName.innerText = cardName3.innerText ;
    // console.log("clicked")
    i++ ;
    const p = document.createElement("p")
    console.log(cardName3.innerText )
    p.innerText = i +"." + cardName3.innerText ;
    addName.appendChild(p);
    
})
appleButton.addEventListener("click", function () {
    console.log("clicked")
    if(coupon.value == "SELL200"){
        const discount =( parseInt(totalPrice.innerText) * 20) / 100;
        discountPrice.innerText = discount ;
        appleButton.setAttribute("disabled", true)
        console.log("discountPrice")
    }
    coupon.value = "";
})