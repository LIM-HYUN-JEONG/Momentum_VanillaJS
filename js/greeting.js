const beforeLogin = document.querySelector("#before-login");
const namebox = document.querySelector("#nameBox");
const greeting = document.querySelector("#greeting");
const afterLogin = document.querySelector("#after-login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  beforeLogin.classList.add(HIDDEN_CLASSNAME);
  afterLogin.classList.remove(HIDDEN_CLASSNAME);
  const username = namebox.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello🤚🏻 ${username}`;
  afterLogin.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  beforeLogin.classList.remove(HIDDEN_CLASSNAME);
  namebox.focus();
  beforeLogin.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUsername);
}
