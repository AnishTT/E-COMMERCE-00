let title = document.querySelector(".form-title");
let submit1 = document.querySelector(".submit");
let signUp = document.querySelector("#signUp");
let container1 = document.querySelector(".input-container1");
let signupLink = document.querySelector(".signup-link");

signUp.addEventListener("click",()=>{
    title.innerHTML = "Create an Account";
    submit1.innerText = "Sign up";
    container1.style.display = "block";
    signupLink.innerText = " "
})