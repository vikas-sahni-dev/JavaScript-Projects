const addNewTaskButton = document.querySelector(".add-new-task-button");
const todoInputForm = document.querySelector(".todo-input-form");
const container = document.querySelector(".container");
const titleInputElement=document.querySelector(".title-input")
const dateInputElement=document.querySelector(".date-input")
const textAreaInputElement=document.querySelector("textarea")

const closeIconForTodoInputForm = document.querySelector(
  ".todo-input-form img"
);
const todosContainer = document.createElement("div");
todosContainer.classList.add("todos-container")
addNewTaskButton.insertAdjacentElement("afterend",todosContainer)



function addTodoinTodoContainer(){
    // const todosContainer=document.createElement("div")
    todosContainer.innerHTML+=`
 <div>

      <div>
    <span>Title:</span>
    <span>${titleInputElement.value}</span>
  </div>
  <div>
    <span>Date:</span>
    <span>${dateInputElement.valuee}</span>
  </div>
  <div>
    <span>Description:${textAreaInputElement.value}</span>
    <span></span>
  </div>
  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
 </div>

    
    
    `



    

}
addNewTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  todoInputForm.classList.toggle("show");
  container.classList.toggle("change-border-color");
if(!todoInputForm.classList.contains("show")){
addTodoinTodoContainer()


}
});

closeIconForTodoInputForm.addEventListener("click", () => {
  todoInputForm.classList.remove("show");
});
