const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Save todos
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render todos
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${todo.text}</span>
      <div class="actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
        <button class="toggle">${todo.completed ? "Undo" : "Done"}</button>
      </div>
    `;

    // Edit
    li.querySelector(".edit").addEventListener("click", () => {
      const newText = prompt("Edit task:", todo.text);
      if (newText) {
        todos[index].text = newText;
        saveTodos();
        renderTodos();
      }
    });

    // Delete
    li.querySelector(".delete").addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    // Toggle complete
    li.querySelector(".toggle").addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    todoList.appendChild(li);
  });
}

// Add todo
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text) {
    todos.push({ text, completed: false });
    saveTodos();
    renderTodos();
    todoInput.value = "";
  }
});

// Initial render
renderTodos();
