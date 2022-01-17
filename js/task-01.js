const categoriesLength = document.querySelectorAll(".item");
console.log(`Number of categories: `, categoriesLength.length);

const categoryAndElements = document.querySelectorAll(".item h2");
// console.log(categoryAndElements);

categoryAndElements.forEach((element) => {
  console.log("Category:", element.textContent);
  console.log("Elements:", element.nextElementSibling.children.length);
});
