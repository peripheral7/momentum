const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const welcome = document.getElementById("welcome");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameValue = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameValue);
  //key-value
  showWelcome(usernameValue);
}

function showWelcome(username) {
  welcome.innerText = `${username} On Board`;
  welcome.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  showWelcome(savedUsername)
}
