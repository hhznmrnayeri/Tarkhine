import { register } from "./funcs/auth.js";

const registerBtn = document.querySelector("#register__btn");
registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log('first')
  register();
});