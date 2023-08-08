const toggle = document.querySelector("#menuicon");
const mainNav = document.querySelector("#mainNav");
const nav = document.querySelector("#nav");

function toggleMenu(){
    mainNav.classList.toggle("active");
    if(toggle.classList.toggle("active")){
        toggle.querySelector("svg").classList.replace("fa-bars", "fa-xmark");
    }else{
        toggle.querySelector("svg").classList.replace("fa-xmark", "fa-bars")
    }
}

const mainBackground = document.querySelector(".bg");

window.addEventListener("scroll", function(){
    mainBackground.style.opacity = 1 - +window.pageYOffset/900;
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 130){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active")
    }
})

const accordionTitle = document.querySelectorAll(".accordion-title")

accordionTitle.forEach(item => {
    item.addEventListener("click", function(){
        item.classList.toggle("active");
        const accordionContent = item.nextElementSibling;
        if(accordionContent.style.height){
            accordionContent.style.height = null;
            item.querySelector("svg").classList.replace("fa-chevron-up", "fa-chevron-down")
        }else{
            accordionContent.style.height = accordionContent.scrollHeight + "px";
            item.querySelector("svg").classList.replace("fa-chevron-down", "fa-chevron-up")
        }
    })
})


const socialMedia = document.querySelector(".socialMedia");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 130){
        socialMedia.classList.add("active");
    }else{
        socialMedia.classList.remove("active");
    }
})