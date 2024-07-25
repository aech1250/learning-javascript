const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("mySubmit");
const displaySub = document.getElementById("displaySubscription");
const displayPay = document.getElementById("displayPayment");

submitBtn.onclick = function(){

    if(myCheckBox.checked){
        displaySub.textContent = `You're subscribed.`;
    }else{
        displaySub.textContent = `You're not subscribed.`;
    }

    if(visaBtn.checked){
        displayPay.textContent = `You're paying with Visa.`;
    }else if(masterCardBtn.checked){
        displayPay.textContent = `You're paying with Master Card.`;
    }else if(payPalBtn.checked){
        displayPay.textContent = `You're paying with PayPal.`;
    }else{
        displayPay.textContent = `You must select a payment option.`
    }
}