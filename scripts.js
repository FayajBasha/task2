document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('input');
    taskContent.type = 'text';
    taskContent.value = taskText;
    taskContent.setAttribute('readonly', true);

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '✏️';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '🗑️';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = '✅';

    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(taskItem);

    document.getElementById('new-task').value = '';

    editBtn.addEventListener('click', function() {
        if (editBtn.innerHTML === '✏️') {
            taskContent.removeAttribute('readonly');
            taskContent.focus();
            editBtn.innerHTML = '💾';
        } else {
            taskContent.setAttribute('readonly', true);
            editBtn.innerHTML = '✏️';
        }
    });

    deleteBtn.addEventListener('click', function() {
        document.getElementById('task-list').removeChild(taskItem);
    });

    completeBtn.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });
});
