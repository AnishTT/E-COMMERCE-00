let user = document.querySelector("#user");
let form = document.querySelector(".form");

let submit = document.querySelector(".submit");
let c = 1;
user.addEventListener("click", () => {
    let one = document.querySelector(".container");
    if (c == 1) {
        form.style.scale = "1";
        one.style.opacity = "0.4"

        c = 0;
    }
    else {
        form.style.scale = "0";
        one.style.opacity = "1"

        c = 1;
    }
})

