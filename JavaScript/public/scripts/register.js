import { register } from "./funcs/auth.js";

const registerBtn = document.querySelector("#register__btn");
registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log('first')
  register();
});
window.addEventListener('load',()=>{
  fetch(`http://127.0.0.1:3000/app/users`)
  .then(res=>console.log(res));
})