

const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');


const onInputChange = (e) => {
 console.log(e.currentTarget.value);
 spanEl.textContent = e.currentTarget.value;
 if (e.currentTarget.value === "") {
    spanEl.textContent = "Anonymous"
}
};

inputEl.addEventListener('input',onInputChange);


