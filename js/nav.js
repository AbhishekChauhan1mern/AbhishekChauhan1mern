let nav_bar=document.getElementById('nav_bar')
let ham =document.getElementById('ham')

let change=()=>{
    ham.classList.toggle('fa-x')
    nav_bar.classList.toggle('change')
}


// form js
let input=document.getElementById('name')
let email=document.getElementById('email')
function buy(){
    alert("Your detail is submit sucessfully")
    localStorage.setItem("name",input.value)
    localStorage.setItem("email",email.value)

}
let form = document.getElementById('form')
function tap(){
  
form.style.display="flex"
}
function del(){
    form.classList.remove("form_c")
}