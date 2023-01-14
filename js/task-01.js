const liElem = document.querySelectorAll(".item");
liElem.length;
console.log("Number of categories:", liElem.length);


const getEachLi = liElem.forEach(elem =>{
    console.log( "Category:" , elem.firstElementChild.textContent);
    console.log( "Elements:" , elem.querySelectorAll('li').length);
});





