



const btnMin = document.querySelector('button[data-action=decrement]');

const btnMax = document.querySelector('button[data-action=increment]');

const result = document.getElementById('value');



let counterValue = 0;

const handleClickPlus = () => {
    result.textContent = counterValue +=1
};

const handleClickMinus =  () => {
    result.textContent = counterValue -=1
};

btnMin.addEventListener('click', handleClickMinus);
btnMax.addEventListener('click', handleClickPlus); 

