let images = document.querySelectorAll(".image");

images.forEach((image) => {
    image.addEventListener("click", () => {
        location.href = "addTocart.html";
    });
});
