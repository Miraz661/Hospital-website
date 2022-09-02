const load=document.querySelector(".loading")
const content=document.getElementsByTagName("main")[0]

function loadingfunc(){
    load.style.display = "none"
    content.style.display = "block"
}



const navBar = document.querySelector(".navBar")
const menusection = document.querySelector(".menuSection")

window.addEventListener('scroll',function(){
    if(this.scrollY>50){
        navBar.classList.add("sticky")
        // menusection.style.top="-2px"
    }else{
        navBar.classList.remove("sticky")
        // menusection.style.top="27px"
    }
})




const navMenuBar = document.querySelector(".navMenuBars")
var menusectionCounter=0
navMenuBar.addEventListener("click",()=>{
    if(menusectionCounter==0){
        menusection.style.display="block"
        menusectionCounter=1
    }else{
        menusection.style.display="none"
        menusectionCounter=0
    }
})