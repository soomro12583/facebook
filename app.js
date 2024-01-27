const container = document.querySelector(".container"),
privacy = container.querySelector(".privacy"),
arrowBack = container.querySelector(".arrow-back");


privacy.addEventListener("click", e =>{
    container.classList.add("active");
});
//arrowBack.addEventListener("click", e =>{
   // container.classList.remove("active");
//})