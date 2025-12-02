AOS.init();

let burger = document.querySelector(".burger");
let menu = document.querySelector(".navbar");

burger.onclick =()=>{
    menu.classList.toggle("show");
}



function like(){
    let likeButton1 = document.querySelector("#heart1");
    let likeButton2 = document.querySelector("#heart2");
    let likeButton3 = document.querySelector("#heart3");
    let likeButton4 = document.querySelector("#heart4");
    let likeButton5 = document.querySelector("#heart5");
    let likeButton6 = document.querySelector("#heart6");

    likeButton1.onclick =()=>{
        likeButton1.classList.toggle("like");
    }

    likeButton2.onclick =()=>{
        likeButton2.classList.toggle("like");
    }
    likeButton3.onclick =()=>{
        likeButton3.classList.toggle("like");
    }
    likeButton4.onclick =()=>{
        likeButton4.classList.toggle("like");
    }
    likeButton5.onclick =()=>{
        likeButton5.classList.toggle("like");
    }
    likeButton6.onclick =()=>{
        likeButton6.classList.toggle("like");
    }
}
like();