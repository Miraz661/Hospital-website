const load=document.querySelector(".loading")
const content=document.getElementsByTagName("main")[0]

function loadingfunc(){
    load.style.display = "none"
    content.style.display = "block"
}