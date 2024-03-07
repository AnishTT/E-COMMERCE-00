let counter = 1;
let two = document.querySelector(".reviews");

function add(){
    const textArea = document.getElementById("text").value;
    if(textArea!=""){
        const newComment = document.createElement("div");
        newComment.classList.add("comment-section");
        two.appendChild(newComment);

        const para = document.createElement("p");
        para.innerHTML = textArea;
        newComment.appendChild(para);

        const likeBtn = document.createElement("button");
        likeBtn.innerText = "Like";


        newComment.appendChild(likeBtn);

        document.getElementById("text").value ="";

        counter++;
        document.getElementById("counter").innerHTML = counter;

    }
    else{
        alert("Please write something to add");
    }
}





