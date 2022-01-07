const categoriesLength = document.querySelectorAll(".item");
console.log(`Number of categories: `, categoriesLength.length);

const categoryAndElements = document.querySelectorAll(".item h2");
// console.log(categoryAndElements);

let titleEl = categoryAndElements[0];
console.log(`Category: ${titleEl.textContent}`);
let animalList = titleEl.nextElementSibling;
let animalListLength = animalList.childElementCount;
console.log(`Elements: ${animalListLength}`);

titleEl = categoryAndElements[1];
console.log(`Category: ${titleEl.textContent}`);
animalList = titleEl.nextElementSibling;
animalListLength = animalList.childElementCount;
console.log(`Elements: ${animalListLength}`);

titleEl = categoryAndElements[2];
console.log(`Category: ${titleEl.textContent}`);
animalList = titleEl.nextElementSibling;
animalListLength = animalList.childElementCount;
console.log(`Elements: ${animalListLength}`);
