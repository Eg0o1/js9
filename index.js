let bill = document.getElementById('bill-val');
let num = document.getElementById('num-val');
let tip = document.getElementById('tip-am');
let total = document.getElementById('tot');
let btn = document.querySelectorAll('.per-btn');
let resetBtn = document.querySelector('.rese');

bill.addEventListener("input", function(e) {
    tip.innerText = parseInt(bill.value).toFixed(2);
    total.innerText = tip.innerText 
})

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(e){
        tip.innerText = (bill.value * btn[i].value).toFixed(2);
        total.innerText = (parseFloat(tip.innerText) + parseFloat(bill.value)).toFixed(2)
        num.addEventListener("input", function() {
            tip.innerText = ((bill.value * btn[i].value) / num.value).toFixed(2)
            total.innerText = ((parseFloat(bill.value) + parseFloat(tip.innerText)) / num.value).toFixed(2)
        })
    })
}

resetBtn.addEventListener("click", function(){
    tip.innerText = "0.00";
    total.innerText = "0.00"
    bill.value = 0;
    num.value = 0;
})