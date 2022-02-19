const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //array 에 하나씩 추가됨

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos array를 value값에 저장함
}

//실패작
// (function readToDos(){ch
//   savedList = JSON.parse(localStorage.getItem("toDos"));
//   for(i=0;i<savedList.length;i++){
//     savedTodo = savedList[i]
//     paintToDo(savedTodo)
//   }
// })();

function deleteTodo(event) {
  //버튼의 부모인 li를 제거
  const li = event.target.parentElement;
  // console.log(li.id)

  // console.log(toDos);
  // console.log(typeof li.id) - string
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();  //로컬스토리지 저장!!
}

function paintToDo(newTodo) {
  //화면에 ToDo paint함(그림)
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deleteTodo);

  list.appendChild(span);
  list.appendChild(button);
  span.innerText = newTodo.text; //newTodoObj 객체에서 text
  toDoList.appendChild(list);
}

// 제출 시 호출되는 함수
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //이벤트 발생 시 value값을 newTodo에 저장

  toDoInput.value = ""; //입력칸 비우기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //toDos array 에 배열 추가
  paintToDo(newTodoObj); //화면에 그림
  saveToDos(); //로컬스토리지 저장하도록
  // console.log(toDos)
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodDos = localStorage.getItem(TODOS_KEY);

if (savedTodDos !== null) {
  const parsedToDos = JSON.parse(savedTodDos); //배열로.
  toDos = parsedToDos; //리로딩시 배열 업데이트 - 빈배열X
  parsedToDos.forEach((item) => paintToDo(item));
}
