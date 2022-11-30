const wrapper = document.querySelector('.wrapper');
const todos = [];

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

//New Todo Header
const newTodoHeader = document.createElement('h1');
newTodoHeader.classList.add('new-todo-header')
newTodoHeader.innerText = 'Create a new To-Do';


//New Todo Forms
const newTodoForm = document.createElement('form');
newTodoForm.classList.add('new-todo-form');

//New To-do Title
const newTodoTitle = document.createElement('input');
newTodoTitle.classList.add('new-todo-title');
newTodoTitle.setAttribute('type', 'text');
newTodoTitle.setAttribute('name', 'New To-Do Title');
newTodoTitle.setAttribute('placeholder',  'Title: e.g Go to Gym');

//New To-do Description
const newTodoDescription = document.createElement('input');
newTodoDescription.classList.add('new-todo-description')
newTodoDescription.setAttribute('type', 'text');
newTodoDescription.setAttribute('name', 'New To-Do Description');
newTodoDescription.setAttribute('placeholder',  'Description: e.g Monday, Wednesday and Saturday');

//New Todo Due Date
const newTodoDueDateLabel = document.createElement("label");
newTodoDueDateLabel.classList.add('new-todo-duedate-label')
newTodoDueDateLabel.innerHTML = "Due Date";
const newTodoDueDate = document.createElement('input');
newTodoDueDate.classList.add('new-todo-date')
newTodoDueDate.setAttribute('type', 'date');
newTodoDueDate.setAttribute('name', 'New To-Do Due Date');

// New Todo Priority
const newTodoPriority = document.createElement('select');
newTodoPriority.classList.add('new-todo-priority');

const newTodoPriorityLabel = document.createElement("label");
newTodoPriorityLabel.classList.add('new-todo-priority-label');
newTodoPriorityLabel.innerHTML = "Priority";
let highPriority = document.createElement('option');
highPriority.value = 'High Priority';
highPriority.text = 'High';
newTodoPriority.appendChild(highPriority);

let lowPriority = document.createElement('option');
lowPriority.value = 'Low Priority';
lowPriority.text = 'Low';
newTodoPriority.appendChild(lowPriority);

//Create ToDo cancel button
const newTodoCancelButton = document.createElement("button");
newTodoCancelButton.classList.add('new-todo-cancel-button');
newTodoCancelButton.innerText = 'Cancel'

//Create Todo submit button
const newTodoSubmitButton = document.createElement("input");
newTodoSubmitButton.classList.add('new-todo-submit-button');
newTodoSubmitButton.setAttribute("type", "submit");
newTodoSubmitButton.setAttribute("value", "Add To-Do");

//Create containers for Due Date and Priority
const newTodoDueDateContainer = document.createElement('div');
newTodoDueDateContainer.classList.add('new-todo-duedate-container');
newTodoDueDateContainer.append(newTodoDueDateLabel, newTodoDueDate);

const newTodoPriorityContainer = document.createElement('div');
newTodoPriorityContainer.classList.add('new-todo-priority-container');
newTodoPriorityContainer.append(newTodoPriorityLabel, newTodoPriority)

newTodoForm.append(newTodoTitle, newTodoDescription, newTodoDueDateContainer, newTodoPriorityContainer, newTodoCancelButton, newTodoSubmitButton);
newTodoPopup.append(newTodoHeader, newTodoForm)
main.appendChild(newTodoPopup)

//Create sidebar items
const navItems = ['All', 'Today', 'Upcoming', 'Important'];



navItems.forEach(navItem => {
  renderSidebar(navItem);
})


//Create new Project Button
const newProjectButton = document.createElement('button');
newProjectButton.classList.add('new-task-button');
newProjectButton.innerText = 'Create Project';
sidebar.appendChild(newProjectButton);
wrapper.appendChild(sidebar)

//Create Project List
const projectList = document.createElement('ul');
projectList.classList.add('project-list');

const projects = ['Math', 'Gym'];

sidebar.appendChild(projectList);


//Create new Project Popup
const newProjectPopup = document.createElement('div');
newProjectPopup.classList.add('new-project-popup');

//New Project Header
const newProjectHeader = document.createElement('h1');
newProjectHeader.classList.add('new-project-header')
newProjectHeader.innerText = 'Create a new Project';


//New Project Form
const newProjectForm = document.createElement('form');
newProjectForm.classList.add('new-project-form');

//New Project Name
const newProjectName = document.createElement('input');
newProjectName.classList.add('new-project-name');
newProjectName.setAttribute('type', 'text');
newProjectName.setAttribute('id', 'new-project');
newProjectName.setAttribute('name', 'New Project name');
newProjectName.setAttribute('placeholder',  'Name: e.g Travel');
newProjectName.setAttribute('required', ''); //CHECK THIS

//Create Project cancel button
const newProjectCancelButton = document.createElement("button");
newProjectCancelButton.classList.add('new-project-cancel-button');
newProjectCancelButton.innerText = 'Cancel'

//Create Project submit button
const newProjectSubmitButton = document.createElement("input");
newProjectSubmitButton.classList.add('new-project-submit-button');
newProjectSubmitButton.setAttribute("type", "submit");
newProjectSubmitButton.setAttribute("value", "Add Project");

newProjectForm.append(newProjectHeader, newProjectName);
newProjectPopup.append(newProjectForm, newProjectCancelButton, newProjectSubmitButton)
main.appendChild(newProjectPopup)


//Create Footer
const footer = document.createElement('footer');
footer.classList.add('footer');
footer.innerText = 'Footer starts here';
wrapper.appendChild(footer);

//Create Overlay for Popup
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
wrapper.appendChild(overlay);

//----HTML construction ends Here

//---- Event Listeners Here

newTaskButton.addEventListener('click', () => {
  overlay.classList.add('active');
  newTodoPopup.classList.add('active');
})

newTodoCancelButton.addEventListener('click', () => {
  overlay.classList.remove('active');
  newTodoPopup.classList.remove('active');
})

newProjectButton.addEventListener('click', () => {
  overlay.classList.add('active');
  newProjectPopup.classList.add('active');
})

newProjectCancelButton.addEventListener('click', () => {
  overlay.classList.remove('active');
  newProjectPopup.classList.remove('active');
})

newProjectSubmitButton.addEventListener('click', e => {
  clearProjects();
  let newProject = document.querySelector('#new-project');
  console.log(newProject.value);
  projects.push(newProject.value)
  projects.forEach(project => {
    addNewProject(project)
  });;

})


//new-project

newProjectForm.addEventListener('keypress', e => {
  if (e.key === "Enter") {
    addNewProject(newProjectName);  
  }
});

//Event Listener End Here

//Functions Start Here

//Constructor Function for Notes
function note(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

//Clear Projects List
function clearProjects() {
  if (projectList) {
    while (projectList.firstChild) {
      projectList.removeChild(projectList.firstChild);
    }
  }
  
}


//Render Sidebar Items
function renderSidebar(item) {
  let listItem = document.createElement('li');
  let a = document.createElement('a');
  a.textContent = item;
  a.setAttribute('href',"#");
  listItem.appendChild(a);
  sidebarList.append(listItem);
  sidebar.appendChild(sidebarList);
}



//New Project Function
function addNewProject(name) {
  let newProject = document.createElement('li');
  let a = document.createElement('a');
  a.textContent = name;
  a.setAttribute('href',"#");
  newProject.appendChild(a);
  projectList.append(newProject);
}



  

  //let note = new note("ir compras", 'bananas', 'today', 'important');




//to make the button look like normal text 
//you can use CSS:
//button.link { background:none; border:none; 