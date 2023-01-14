
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btn.addEventListener('click', () => {
  const changeRandomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changeRandomColor;
  spanEl.textContent = changeRandomColor;
});


