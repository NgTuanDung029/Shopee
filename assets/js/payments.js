let count = 0;
const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const increAndDecre = document.querySelector('.incre-and-decre');

btnAdd.addEventListener('click', () => {
    increAndDecre.value = parseInt(increAndDecre.value) + 1;
    console.log(increAndDecre.value);
});

btnSubtract.addEventListener('click', () => {   
    if (increAndDecre.value > 1){
        increAndDecre.value = parseInt(increAndDecre.value) - 1;
        console.log(increAndDecre.value);
    }
});