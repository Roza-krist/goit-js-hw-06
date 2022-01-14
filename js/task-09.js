function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
let colorName = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  document.body.style.background = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
  console.log(colorName);
});
