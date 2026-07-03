const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert('Please add task first!');
        return;
    }

    const listItem = document.createElement('li');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style.marginLeft = '10px';

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    })




    listItem.innerText = taskText;

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    

    taskInput.value = "";
   

})


