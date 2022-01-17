const fontSizeControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = fontSizeControl.value + "px";
fontSizeControl.addEventListener("input", (event) => {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
  console.log(`${event.currentTarget.value}px`);
});
