const addNewTaskButton = document.querySelector(".add-new-task-button");
const addTaskButton=document.querySelector(".add-task-button")
const todoInputForm = document.querySelector(".input-form");
const form = document.querySelector("form");
const titleInputElement = document.querySelector("#title-input");
const dateInputElement = document.querySelector("#date-input");
const textAreaElement = document.querySelector("textarea");
const closeIconForTodoInputForm = document.querySelector(".container>div img");
const todosContainer = document.createElement("div");
todosContainer.classList.add("todos-container");
addNewTaskButton.insertAdjacentElement("afterend", todosContainer);
let todoNumber = 0;
const data = JSON.parse(localStorage.getItem("data")) || {};

for (const d in data) {
  console.log(d);
  console.log(data[d]);

  todosContainer.innerHTML += `

   <div class="todo">
    <div>
      <span class="title">Title:</span>
      <span>${data[d].title}</span>
    </div>
    <div>
      <span  <b> Date: </b> </span>
      <span>${data[d].data}</span>
    </div>
    <div>
      <span  class="" >Description:${data[d].description}</span>
      <span></span>
    </div>
    <div class="
    ">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  </div>;
 `;

}



function addTodoinTodoContainer() {
  ++todoNumber;

  const todo=document.createElement("div")
 todo.innerHTML=`
 

      <div>
    <span>Title:</span>
    <span>${titleInputElement.value}</span>
  </div>
  <div>
    <span>Date:</span>
    <span>${dateInputElement.value}</span>
  </div>
  <div>
    <span>Description:${textAreaElement.value}</span>
    <span></span>
  </div>
  <div>
    <button>Edit</button>
    <button>Delete</button>
  </div>
 

    
    
    `
    todosContainer.append(todo)

  data[todoNumber] = {
    title: `${titleInputElement.value}`,
    date: `${dateInputElement.value}`,
    description: `${textAreaElement.value}`,
  };

  localStorage.setItem("data", JSON.stringify(data));
  localStorage.getItem("data");

addClickEventListenerToDeleteButton(todo.querySelector(".delete-btn"))

 
}

function addClickEventListenerToDeleteButton(btn){
  console.log(btn);
  

}



addNewTaskButton.addEventListener("click",()=>{
addNewTaskButton.classList.add("hide")
todosContainer.classList.add("hide")
form.classList.add("show")


})
addTaskButton.addEventListener("click",(e)=>{
  // e.preventDefault()
  addNewTaskButton.classList.remove("hide")
  todosContainer.classList.remove("hide")

form.classList.remove("show")
e.preventDefault()
addTodoinTodoContainer()

})

// addNewTaskButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   todoInputForm.classList.toggle("show");
//   addNewTaskButton.classList.add("hide")
//   container.classList.toggle("change-border-color");
//   if (!todoInputForm.classList.contains("show")) {
//     todosContainer.classList.remove("hide");
//     addTodoinTodoContainer();
//   }
//   if (todoInputForm.classList.contains("show")) {
//     todosContainer.classList.add("hide");
//   }
// });

// closeIconForTodoInputForm.addEventListener("click", () => {
//   todoInputForm.classList.remove("show");
// });
