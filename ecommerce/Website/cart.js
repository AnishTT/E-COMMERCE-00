let main = document.querySelector("#main");
    let cart1 = document.querySelector(".cart1");
    let close = document.querySelector(".close");
    let one = document.querySelector(".one");
    
    main.addEventListener('click',function(){
        // one.style.filter = "opacity(.3)"
            cart1.style.right="0";
            // document.querySelector("body").style.overflow= "hidden";

    })
    close.addEventListener("click", function(){
        cart1.style.right = "-999px";
        one.style.filter = "opacity(100)"
        // document.querySelector("body").style.overflow = "auto";  

        
    })

  
