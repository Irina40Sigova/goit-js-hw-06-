const liElem = document.querySelectorAll(".item");
liElem.length;
console.log("Number of categories:", liElem.length);


const getEachLi = liElem.forEach(elem =>{
    const elemTitle = elem.firstElementChild.textContent;
    console.log( "Category:" , elemTitle);
    const elemItem = elem.lastElementChild.children;
    console.log( "Elements:" , elemItem.length);
});








