const hide = document.querySelector(".hide");
const ul =  document.querySelector(".navbar");
const icons =  document.querySelector(".icons");


hide.addEventListener("click",()=>{
    if(ul.style.display === "block"){
        ul.style.display = "none";
        // icons.style.display = "block";
    }else{
        ul.style.display = "block";
        // icons.style.display = "block";
    }
});