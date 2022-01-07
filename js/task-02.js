const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add("item");
  return ingredientsEl;
});

console.log(ingredientsItems);

ingredientsList.append(...ingredientsItems);
