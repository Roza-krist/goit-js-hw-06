const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", formLog);

function formLog(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields");
  }

  console.log(`{email: ${email.value}, password: ${password.value}}`);
  event.currentTarget.reset();
}
