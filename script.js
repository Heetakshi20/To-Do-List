document.querySelector('.add-btn').addEventListener('click', function() {
  const todoInput = document.querySelector('.todo-input');
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
      const todoList = document.querySelector('.todo-list');
      const li = document.createElement('li');
      li.innerHTML = `${todoText} <button class="delete-btn">Delete</button>`;
      todoList.appendChild(li);

      todoInput.value = '';

      li.querySelector('.delete-btn').addEventListener('click', function() {
          todoList.removeChild(li);
      });
  }
});

document.querySelector('.todo-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
      document.querySelector('.add-btn').click();
  }
});