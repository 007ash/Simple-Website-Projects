const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    li.style.backgroundColor = li.classList.contains("completed")
      ? "#d1ffd1"   
      : "#f4f4f4";
  });

  li.addEventListener("dblclick", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  input.value = "";
}
