document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasklist = document.getElementById('task-list');

    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText != '') {
            const li = document.createElement('li');
            li.innerHTML = 
            `<span>${taskText}</span>
            <button class="delete-btn">Delete</button>`;

            tasklist.appendChild(li);

            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });
            li.addEventListener('click',() => (
                li.classList.toggle('completed')
            ))

            newTaskInput.value = '';
        }
    };

    addTaskBtn.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addtask();
        }
    })

})