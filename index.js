
let button = document.querySelector(".btn");
let modal = document.querySelector(".modal");
let backdrop = document.querySelector(".backdrop");



const btnClickHandler = () =>{
    modal.style.display = "block";
    backdrop.style.display="block";
}

const backDropClickHandler = () =>{
    modal.style.display = "none";
    backdrop.style.display = "none";
}

button.addEventListener("click",btnClickHandler);
backdrop.addEventListener("click",backDropClickHandler);



