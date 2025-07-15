const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


function createTaskElement(taskText) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.style.background = "#ffc107";
  editButton.style.color = "#000";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.background = "#dc3545";
  deleteButton.style.color = "#fff";

  
  editButton.addEventListener("click", function () {
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;

    li.insertBefore(input, span);
    li.removeChild(span);
    editButton.textContent = "Save";

    editButton.addEventListener("click", function save() {
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      editButton.textContent = "Edit";
      editButton.removeEventListener("click", save);
    });
  });

  
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  actions.appendChild(editButton);
  actions.appendChild(deleteButton);

  li.appendChild(span);
  li.appendChild(actions);

  return li;
}


addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  const taskItem = createTaskElement(taskText);
  taskList.appendChild(taskItem);
  taskInput.value = "";
});
