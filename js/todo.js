const toDoForm = document.getElementById("todo-form");
const toDoInput = document.getElementById("input-area");
const toDoList = document.getElementById("todo-list");
const checkBtn = document.createElement("input");

const CHECKED = "checked";
const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function isCheck() {
  const checked = checkBtn.checked;
  console.log(checked);
  localStorage.setItem("CHECKED", checked);
  checkMark();
}

function checkMark() {
  const checkStatus = localStorage.getItem("CHECKED");
  console.log(checkStatus);
  if (checkStatus === "false") {
    checkBtn.setAttribute("checked", true);
  } else if (checkStatus === "true") {
    checkBtn.setAttribute("checked", false);
  }
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  checkBtn.setAttribute("type", "checkbox");

  checkBtn.id = "checkBtn";
  const label = document.createElement("label");
  label.setAttribute("for", "checkBtn");
  checkBtn.addEventListener("click", isCheck);
  checkBtn.onclick = function () {
    li.classList.toggle("done");
  };
  span.innerText = newToDo.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteToDo);
  li.prepend(label);
  li.prepend(checkBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
  isCheck();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = "";
  questionArea.classList.add(HIDDEN);
  todoArea.classList.remove(HIDDEN);
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

const todoArea = document.getElementById("todo-area");
const questionArea = document.getElementById("question-area");

const HIDDEN = "hidden";

if (savedToDos == null) {
  questionArea.classList.remove(HIDDEN);
  toDoInput.focus();
} else if (savedToDos !== null && savedToDos.length > 2) {
  todoArea.classList.remove(HIDDEN);
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
} else if (savedToDos.length == 2) {
  todoArea.classList.add(HIDDEN);
  questionArea.classList.remove(HIDDEN);
  toDoInput.focus();
}
