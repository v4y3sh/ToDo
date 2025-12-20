// grab the elements 
const todoInput = document.getElementById('todo-input');
const taskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

//add task array
let tasks = [];

//trim removes extra spaces
taskBtn.addEventListener('click', () => {
    const taskTest = todoInput.value.trim()
    if ( taskTest === "") return

    const newTask = {       //creating new object w 3 properties
        id: Date.now(),
        text: taskTest,
        completed: false,
    };
    tasks.push(newTask);
    todoInput.value ="" //clear input
    console.log(tasks);

});

