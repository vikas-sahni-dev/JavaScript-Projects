const addNewTaskButton = document.querySelector(".add-new-task-button");
const addTaskButton = document.querySelector(".add-task-button");
const form = document.querySelector("form");
const titleInputElement = document.querySelector("#title-input");
const dateInputElement = document.querySelector("#date-input");
const descriptionTextAreaElement = document.querySelector("textarea");
const closeIconForTodoInputForm = document.querySelector("form img");
const todosContainer = document.querySelector(".todos-container");

const data = JSON.parse(localStorage.getItem("data")) || {};
let todoNumber = +Object.keys(data)[Object.keys(data).length - 1] || 0;
console.log(todoNumber);

let i = +Object.keys(data)[Object.keys(data).length-1]||0;


const todoDataArr = Object.values(data);
todoDataArr.forEach((todoData) => {
  // console.log(todoData);
  addTodoinTodoContainer(
    todoData.id,
    todoData.title,
    todoData.date,
    todoData.description
  );
});



function showHomePage(){
  form.classList.remove("show");
  addNewTaskButton.classList.remove("hide");
  todosContainer.classList.remove("hide");

}
function showForm(){
  addNewTaskButton.classList.add("hide");
  todosContainer.classList.add("hide");
  form.classList.add("show");
}









function addTodoinTodoContainer(id, title, date, description) {
  const todo = document.createElement("div");
  todo.classList.add(id);

  todo.innerHTML = `
  <div>
    <span>Title:</span>
    <span>${title}</span>
  </div>
  <div>
    <span>Date:</span>
    <span>${date}</span>
  </div>
  <div>
    <span>Description:</span>
    <span>${description}</span>
  </div>
  <div>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  </div>
  
    `;
  todosContainer.appendChild(todo);

  addClickEventListenerToDeleteButton(todo.querySelector(".delete-btn"));
  addClickEventListenerToEditButton(todo.querySelector(".edit-btn"));
}

function addClickEventListenerToDeleteButton(deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    const todo = deleteBtn.parentElement.parentElement;
    delete data[todo.classList[0]];
    localStorage.setItem("data", JSON.stringify(data));
    todo.remove();
  });
}
function addClickEventListenerToEditButton(editBtn) {
  editBtn.addEventListener("click", () => {
   showForm()
    addTaskButton.innerText = "Update Task";
    const todoNum = editBtn.parentElement.parentElement.classList[0];
    console.log(data[todoNum]);
  });
}

addNewTaskButton.addEventListener("click", showForm)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  ++todoNumber;
  console.log("todo-Number", todoNumber);

  addTodoinTodoContainer(
    ++i,
    titleInputElement.value,
    dateInputElement.value,
    descriptionTextAreaElement.value
  );
  data[todoNumber] = {
    id: i,
    title: titleInputElement.value,
    date: dateInputElement.value,
    description: descriptionTextAreaElement.value,
  };

  localStorage.setItem("data", JSON.stringify(data));
showHomePage()
  form.reset();
});



closeIconForTodoInputForm.addEventListener("click",()=>{
 showHomePage()

})
