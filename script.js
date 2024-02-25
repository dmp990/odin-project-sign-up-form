const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const submit = document.querySelector("button");

// Turn autocomplete off for form
form.setAttribute("autocomplete", "off");

// Check if password and confirm password match
submit.addEventListener("click", (event) => {
  if (password.value !== confirm_password.value) {
      password.classList.add("error");
      confirm_password.classList.add("error");
      password.insertAdjacentHTML("afterend", "<p class=error-msg>*Passwords do not match</p>")
      event.preventDefault();
  } else {
    password.classList.remove("error");
    password.classList.remove("error");
  }
});
