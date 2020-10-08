


 function myFun(){
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
}



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



const mySkills =  document.getElementById('myskills');
// console.log(mySkills);
mySkills.addEventListener("click",()=>{
    let h1 = document.querySelector("#h1");
    let h2= document.querySelector("#h2");
    h1.innerHTML = "HTML5 + <span>CSS3</span> + JS";
    h2.innerHTML = "<span>Nodejs</span> + Expressjs + <span>Mongodb</span>";
});

const myproject =  document.getElementById('myproject');
// console.log(mySkills);
myproject.addEventListener("click",()=>{
    let h1 = document.querySelector("#h1");
    let h2= document.querySelector("#h2");
    h1.innerHTML = "";
    h2.innerHTML = "Ecommerce Websites + <span>Web Application</span> + BackEndWeb Application";
})

const myhobby =  document.getElementById('myhobby');
// console.log(mySkills);
myhobby.addEventListener("click",()=>{
    let h1 = document.querySelector("#h1");
    let h2= document.querySelector("#h2");
    h1.innerHTML = "EAT + SLEEP +<SPAN>CODE</SPAN> +REPEAT";
    h2.innerHTML = "";
})

const about =  document.getElementById('about');
// console.log(mySkills);
about.addEventListener("click",()=>{
    let h1 = document.querySelector("#h1");
    let h2= document.querySelector("#h2");
    h1.innerHTML = "DEVELOPER FROM PUNJAB";
    h2.innerHTML = "";
})

const contactme =  document.getElementById('contactme');
// console.log(mySkills);
contactme.addEventListener("click",()=>{
    let h1 = document.querySelector("#h1");
    let h2= document.querySelector("#h2");
    h1.innerHTML = "<span>8699594438 On Whatsapp</span>";
    h2.innerHTML = "<span>rc4329915@gmail.com</span>";
})



