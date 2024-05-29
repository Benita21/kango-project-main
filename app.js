const menuicon =document.getElementById("menu")
const cut =document.getElementById("x")
const closeMe =document.getElementById("closeMe")
const form =document.getElementById("form")


menuicon.addEventListener('click',bringForm)
function bringForm(){
    event.preventDefault()
    console.log("clicked")
    form.style.display="block"
}
closeMe.addEventListener('click',removeForm)
function removeForm(){
    form.style.display="none"
}





