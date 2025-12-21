// grab the elements 
const todoInput = document.getElementById('todo-input');
const taskBtn = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

//add task array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];    //if nothing to parse, then acts like empty array

tasks.forEach( (task) => renderTask(task));

//trim removes extra spaces
taskBtn.addEventListener('click', () => {
    const taskTest = todoInput.value.trim()
    if ( taskTest === "") return

    const newTask = {       //creating new object w 3 properties
        id: Date.now(),     // bad idea to use array-index ids as after adding or deleting tasks, index changes
        text: taskTest,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks();            //can be seen under Application heading
    todoInput.value ="" //clear input
    console.log(tasks);

});

function saveTasks (){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//read from local storage nd render into DOM

function renderTask(task){
    console.log(task);
}