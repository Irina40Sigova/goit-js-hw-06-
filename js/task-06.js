
const inputEl = document.getElementById('validation-input');
const length = Number(inputEl.dataset.length);



const onInputBlur = (e) => {
    inputEl.classList.add( 'invalid');
    if (e.currentTarget.value.length === length){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
    }
   };

   inputEl.addEventListener('blur', onInputBlur);

