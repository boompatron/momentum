const todo = document.querySelector("#todo");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo input");
const TODO_KEYS = "todos"
let todo_archive = [];
function filterFunc(id){
    
}
function onclickDeleteButton(event){
    const p_li = event.target.parentElement;
    p_li.remove();
    todo_archive = todo_archive.filter((todo) => todo.id !== parseInt(p_li.id));
    localStorage.setItem(TODO_KEYS, JSON.stringify(todo_archive));
}

function saveLocalStorage(){
    localStorage.setItem(TODO_KEYS, JSON.stringify(todo_archive));
}

function paintToDo(o){
    const li = document.createElement("li");
    li.id = o.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    button.innerText = "❌";
    button.addEventListener("click", onclickDeleteButton);
    span.innerText = o.text;
    todoList.appendChild(li);
}

function toDoHandler(event){
    event.preventDefault();
    const getToDo = todoInput.value;
    todoInput.value = "";
    const newObj = {
        text:getToDo,
        id:Date.now(),
    };
    todo_archive.push(newObj);
    paintToDo(newObj);
    saveLocalStorage();
}
// function displaySavedTodos(item){
//     todo_archive.push(item);
//     paintToDo(item);
// }
todo.addEventListener("submit", toDoHandler);
const savedToDos = localStorage.getItem(TODO_KEYS);
if(savedToDos){
    const parsedToDo = JSON.parse(savedToDos);
    todo_archive = parsedToDo;
    //parsedToDO.foreach(displaySavedTodos);
    parsedToDo.forEach((paintToDo));
}
console.log(todo_archive);