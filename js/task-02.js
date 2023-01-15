const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elemUl = document.getElementById('ingredients');
console.log(elemUl);

const hasElemLi = ingredients => {
  return ingredients.map(ingredient => {
    const elemLi = document.createElement('li');
    elemLi.classList.add('item');
    elemLi.textContent = ingredient;
    return elemLi;
  })
};
 


const liElem = hasElemLi(ingredients);
 elemUl.append(... liElem);


  






