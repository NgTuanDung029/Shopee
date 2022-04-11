let count = 0;
const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const increAndDecre = document.querySelector('.incre-and-decre');
const payment=document.querySelector('.payment-1').value;
const price=document.querySelector('.price');
const c=document.querySelector('.text-checkbox-5-5');
const quantity=document.querySelector('.quantity');
sum=0;
let a=payment;

// js cho nut tang giam, tinh tien
btnAdd.addEventListener('click', () => {
    increAndDecre.value = parseInt(increAndDecre.value) + 1;
    sum=a*increAndDecre.value;
    let format=sum.toLocaleString('vi-VN',{
        styles:'currency',
        currency:'VND'
    })
    price.innerHTML=format;
    c.innerHTML=format;
    quantity.innerHTML=increAndDecre.value;
});

btnSubtract.addEventListener('click', () => {   
    if (increAndDecre.value > 1){
        increAndDecre.value = parseInt(increAndDecre.value) - 1;
        console.log(increAndDecre.value);
        sum=a*increAndDecre.value;
        let format=sum.toLocaleString('vi-VN',{
            styles:'currency',
            currency:'VND'
        })
    price.innerHTML=format;
    c.innerHTML=format;
    quantity.innerHTML=increAndDecre.value;
    }
});

// js cho nut mua hang
const btnbuy=document.querySelector('.btn-buy');
const notify=document.querySelector('.notify');
btnbuy.addEventListener('click',()=>{
    notify.innerHTML='Mua hàng thành công';
})

