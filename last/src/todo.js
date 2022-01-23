const todobutton = document.querySelector("#fill-todo-button")
const gotoTodo = document.querySelector("#go-make-todo")
const makeTodoButton = document.querySelector("#go-make-todo input")
const todoForm = document.querySelector("#make-todo")
const todoText = document.querySelector("#make-todo input:first-child")
const todoSubmit = document.querySelector("#make-todo input:last-child")
const todoList = document.querySelector("#tododiv")

let toDos = []

const   TODOS_KEY = "todos"

const saveToDos = ()=>{
    console.log("operating saveToDos")
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const submitEdit = (event) =>{
    event.preventDefault()
    const target = event.target.parentNode
    const oldId = target.id
    const newTodoObj = {
        text : document.querySelector("#use-next-event input:first-child").value,
        id : Date.now()
    }
    target.removeChild(target.childNodes[1])
    target.childNodes[0].innerText = newTodoObj.text
    target.id = newTodoObj.id
    console.log("after liId : ",target.id)
    const button = document.createElement("button")
    button.innerText = "◾"
    button.addEventListener("click",todoOption)
    const toChange = toDos.findIndex((todo) => todo.id == oldId)
    toDos[toChange].text = newTodoObj.text
    toDos[toChange].id = newTodoObj.id
    target.appendChild(button)
    saveToDos()
}

const handleDeleteTodo = (event) =>{
    const target = event.target.parentElement
    toDos = toDos.filter(toDo => toDo.id !== parseInt(target.id))
    target.remove()
    saveToDos()
}

const handleEditTodo = (event) =>{
    target = event.target.parentNode
    target.removeChild(target.childNodes[1])
    target.removeChild(target.childNodes[1])
    const editform = document.createElement("form")
    editform.id="use-next-event"
    editform.style.display = "inline-block"
    const inputText = document.createElement("input")
    inputText.type = "text"
    inputText.placeholder = "new todo"
    const finishEdit = document.createElement("input")
    finishEdit.type="submit"
    finishEdit.value = "edit"
    editform.addEventListener("submit",submitEdit)
    editform.appendChild(inputText)
    editform.appendChild(finishEdit)
    target.appendChild(editform)
}

const todoOption = (event)=>{
    const target = event.target.parentNode
    const toDelete = target.childNodes[1]
    target.removeChild(toDelete)
    const deleteButton = document.createElement("button")
    deleteButton.innerText="delete"
    deleteButton.addEventListener("click",handleDeleteTodo)
    const editButton = document.createElement("button")
    editButton.innerText = "edit"
    editButton.addEventListener("click",handleEditTodo)
    target.appendChild(editButton)
    target.appendChild(deleteButton)
}

const paintTodo = (newTodo)=>{
    const list = document.createElement("li")
    list.id=newTodo.id
    const spn = document.createElement("span")
    spn.style.color="white"
    list.appendChild(spn)
    spn.innerText = newTodo.text
    todoList.appendChild(list)
    const button = document.createElement("button")
    button.innerText = "◾"
    button.addEventListener("click",todoOption)
    list.appendChild(button)
}

const handleTodoSubmit = (event) =>{
    event.preventDefault();
    const newTodo = todoText.value
    todoText.value = ""
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos()
}

const handleMaketodos = (event) =>{
    console.log(toDos)
    todoForm.classList.remove(CONCEAL)
    todoForm.addEventListener("submit",handleTodoSubmit)
}

const handleTodos = (event) =>{
    if (!toDos.length){
        gotoTodo.classList.remove(CONCEAL)
        makeTodoButton.addEventListener("click",handleMaketodos)
    }
    else{
        gotoTodo.removeChild(gotoTodo.children[0])
        gotoTodo.classList.remove(CONCEAL)
        makeTodoButton.addEventListener("click",handleMaketodos)
    }
}

todobutton.addEventListener("click",handleTodos)

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos)
    toDos = parsedTodos
    parsedTodos.forEach(paintTodo)
}    