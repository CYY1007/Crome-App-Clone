const loginForm = document.querySelector("#logindiv")
const loginText = document.querySelector("#login-text")
const greetingdiv = document.querySelector("#greetingdiv")
const greetingText = document.querySelector("#greeting")
const updateshow = document.querySelector("#go-update")
const updateForm = document.querySelector("#update-name")
const updatebutton = document.querySelector("#update-submit")
const updateText = document.querySelector("#update-text")
const clock = document.querySelector("#clock")
const todoform = document.querySelector("#todo-form")


const USESRNAME_KEY = "username"
const CONCEAL = "conceal"


const handleLogin = (event) =>{
    event.preventDefault();
    const userName = loginText.value
    localStorage.setItem(USESRNAME_KEY,userName)
    loginForm.classList.add(CONCEAL)
    greeting(userName)
}
const handleUpdate = (event) =>{
    event.preventDefault()
    const userName = updateText.value
    localStorage.setItem(USESRNAME_KEY,userName)
    updateForm.classList.add(CONCEAL)
    updatebutton.classList.remove(CONCEAL)
    greetingText.classList.remove(CONCEAL)
    updateshow.classList.remove(CONCEAL)
    greeting(userName)
}

const handleShowUpdate = (event) =>{
    console.log("show update")
    event.preventDefault()
    localStorage.removeItem(USESRNAME_KEY)
    updateshow.classList.add(CONCEAL)
    updateForm.classList.remove(CONCEAL)
    greetingText.classList.add(CONCEAL)
    updatebutton.classList.add(CONCEAL)
    updateForm.addEventListener("submit",handleUpdate)
}
const greeting = (username) =>{
    greetingText.innerText = `Hello, ${username}`
    greetingdiv.classList.remove(CONCEAL)
    greetingText.classList.remove(CONCEAL)
    clock.classList.remove(CONCEAL)
    todobutton.classList.remove(CONCEAL)
    todoList.classList.remove(CONCEAL)
    updateshow.classList.remove(CONCEAL)
    updateshow.addEventListener("submit",handleShowUpdate)
}

const user = localStorage.getItem(USESRNAME_KEY)
console.log(user)
if (!user){
    loginForm.classList.remove(CONCEAL)
    loginForm.addEventListener("submit", handleLogin)
}else{
    greeting(user)
}
