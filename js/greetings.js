const login = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
// const loginInput = login.querySelector("input");
const loginButton = login.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginHandler(event){
    event.preventDefault();
    const username = loginInput.value;
    login.classList.toggle(HIDDEN_CLASSNAME);
    console.log(username);
    beginWithGreetings(username);
    localStorage.setItem(USERNAME_KEY, username);
}

login.addEventListener("submit", onLoginHandler);

const savedUserName = localStorage.getItem(USERNAME_KEY);

function beginWithGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

if (savedUserName === null){    
    // show from
    login.classList.remove(HIDDEN_CLASSNAME);
    login.addEventListener("submit", onLoginHandler);
}else{
    // show greeting
    beginWithGreetings(savedUserName);
}