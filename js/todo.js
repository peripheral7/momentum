const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = []; //array 에 하나씩 추가됨

function saveToDos(){
  localStorage.setItem("toDos", JSON.stringify(toDos)); //toDos라는 array를 value값에 저장함
  console.log(toDos)
}



function deleteTodo(event) {
  //버튼의 부모인 li를 제거
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {  //화면에 ToDo paint함(그림)
  const list = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteTodo);

  list.appendChild(span);
  list.appendChild(button);
  span.innerText = newTodo;
  toDoList.appendChild(list);
}

// 제출 시 호출되는 함수
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //이벤트 발생 시 value값을 newTodo에 저장

  toDoInput.value = "";//입력칸 비우기
  toDos.push(newTodo); //toDos array 에 추가하도록
  paintToDo(newTodo);  //화면에 그림
  saveToDos();  //로컬스토리지 저장하도록
}

toDoForm.addEventListener("submit", handleTodoSubmit);
