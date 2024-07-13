document.querySelector('.add-btn').addEventListener('click', function() {
            const todoInput = document.querySelector('.todo-input');
            const todoText = todoInput.value.trim();

            if (todoText !== '') {
                const todoList = document.querySelector('.todo-list');
                const li = document.createElement('li');

                li.innerHTML = `
                    <span>${todoText}</span>
                    <input type="text" class="edit-input" style="display:none;">
                    <button class="complete-btn">Complete</button>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                `;
                todoList.appendChild(li);

                todoInput.value = '';

                li.querySelector('.complete-btn').addEventListener('click', function() {
                    li.classList.toggle('completed');
                });

                li.querySelector('.edit-btn').addEventListener('click', function() {
                    const editInput = li.querySelector('.edit-input');
                    const span = li.querySelector('span');
                    const isEditing = editInput.style.display === 'inline';

                    if (isEditing) {
                        span.textContent = editInput.value;
                        editInput.style.display = 'none';
                        span.style.display = 'inline';
                        this.textContent = 'Edit';
                    } else {
                        editInput.value = span.textContent;
                        editInput.style.display = 'inline';
                        span.style.display = 'none';
                        this.textContent = 'Save';
                    }
                });

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
