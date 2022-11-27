const wrapper = document.querySelector('.wrapper');

//Create home page

const header = document.createElement('header');
header.classList.add('header');
header.innerText = 'Todo List';
wrapper.appendChild(header);

//Create Sidebar

const sidebar = document.createElement('nav');
sidebar.classList.add('sidebar');

const sidebarList = document.createElement('ul');
sidebarList.classList.add('sidebar-list');


//Create main (where current notes go)
const main = document.createElement('main');
main.classList.add('main');
main.innerText = 'Main starts here';
wrapper.appendChild(main);


//Create current Project/All header on main

const currentProjectTitle = document.createElement('h1');
currentProjectTitle.classList.add('current-project-title');
currentProjectTitle.innerText = 'current project placeholder';
main.appendChild(currentProjectTitle)


//Create new Task Button

const newTaskButton = document.createElement('button');
newTaskButton.classList.add('new-task-button');
newTaskButton.innerText = 'Create task';
main.appendChild(newTaskButton);

//Create new Todo popup

const newTodoPopup = document.createElement('div');
newTodoPopup.classList.add('new-todo-popup');
newTodoPopup.innerHTML = 'HI';

//New Todo Header
const newTodoHeader = document.createElement('h1');
newTodoHeader.innerText = 'Create a new To-Do'
newTodoPopup.appendChild(newTodoHeader)

//New Todo Forms

const newTodoForm = document.createElement('form');

//New To-do Title
const newTodoTitle = document.createElement('input');
newTodoTitle.setAttribute('type', 'text');
newTodoTitle.setAttribute('name', 'New To-Do Title');
newTodoTitle.setAttribute('placeholder',  'Title: e.g Go to Gym');


//New To-do Description
const newTodoDescription = document.createElement('input');
newTodoDescription.setAttribute('type', 'text');
newTodoDescription.setAttribute('name', 'New To-Do ti');
newTodoDescription.setAttribute('placeholder',  'Description: e.g Monday, Wednesday and Saturday');

//New Todo  Due Date
const newTodoDueDate = document.createElement('input')
newTodoDueDate.setAttribute('type', 'date');
newTodoDueDate.setAttribute('name', 'New To-Do Due Date');

// New Todo Priority

const newTodoPriority = document.createElement('select');
newTodoPriority.classList.add('new-todo-priority');

const newTodoPriorityLabel = document.createElement("label");
newTodoPriorityLabel.innerHTML = "Priority";
let highPriority = document.createElement('option');
highPriority.value = 'High Priority';
highPriority.text = 'High';
newTodoPriority.appendChild(highPriority);


let lowPriority = document.createElement('option');
lowPriority.value = 'Low Priority';
lowPriority.text = 'Low';
newTodoPriority.appendChild(lowPriority);



//Create submit button
const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");

newTodoForm.append(newTodoTitle, newTodoDescription, newTodoPriorityLabel, newTodoPriority, newTodoDueDate, submitButton);

newTodoPopup.appendChild(newTodoForm)
main.appendChild(newTodoPopup)


//Create sidebar items
const navItems = ['All', 'Today', 'Upcoming', 'Important'];

navItems.forEach(navItem => {
    let listItem = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = navItem;
    a.setAttribute('href',"#");
    listItem.appendChild(a);
    sidebarList.appendChild(listItem);
});



sidebar.appendChild(sidebarList);


//Create new Project Button:

const newProjectButton = document.createElement('button');
newProjectButton.classList.add('new-task-button');
newProjectButton.innerText = 'Create Project';
sidebar.appendChild(newProjectButton);

wrapper.appendChild(sidebar)


//Create Footer
const footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerText = 'Footer starts here';
wrapper.appendChild(footer);



//Constructor Function for Notes

function note(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}
  //let note = new note("ir compras", 'bananas', 'today', 'important');




//to make the button look like normal text 
//you can use CSS:
//button.link { background:none; border:none; }