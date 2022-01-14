const inputRef = document.querySelector("#validation-input");
const validValue = Number(inputRef.dataset.length);
console.log(validValue);

const inputLength = () => {
  inputRef.value.length === validValue
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
};

const inputFocus = () => {
  inputRef.classList.remove("valid", "invalid");
};
inputRef.addEventListener("blur", inputLength);
inputRef.addEventListener("focus", inputFocus);
