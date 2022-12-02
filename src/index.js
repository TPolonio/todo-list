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
wrapper.appendChild(main);

//Create current Project/All header on main
const currentProjectTitle = document.createElement('h1');
setTimeout(() => {
  renderProjectHeader();
}, 100);

//Create To-Dos Container
const todoContainer = document.createElement('div');
todoContainer.classList.add('todo-container');
main.appendChild(todoContainer);

//Create new Todo Button
const newTodoButton = document.createElement('button');
newTodoButton.classList.add('new-todo-button');
newTodoButton.innerText = '+';
main.appendChild(newTodoButton);

//Create Main Todos List
const todoList = document.createElement('div');
todoList.classList.add('todo-list');
main.appendChild(todoList);

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
newTodoTitle.setAttribute('id', 'new-todo');
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
let navItems = ['All', 'Today', 'Upcoming', 'Important'];
navItems.forEach(navItem => {
  renderSidebar(navItem);
})

//Default to All Todos
setTimeout(() => {
  const defaultProject  = document.querySelector('#all');
  defaultProject.classList.add('active');
}, 10);

sidebarList.addEventListener('click', e => {
  Array.from(document.querySelectorAll('a.active')).forEach(li => li.classList.remove('active'));
  if (e.target.tagName.toLowerCase ='li') {
      e.target.classList.add('active');
      renderProjectHeader();
  }
})


//Create new Project Button
const newProjectButton = document.createElement('button');
newProjectButton.classList.add('new-project-button');
newProjectButton.innerText = 'Create Project';
sidebar.appendChild(newProjectButton);
wrapper.appendChild(sidebar)

//Create project Delete Button
const projectDeleteButton = document.createElement('button');
projectDeleteButton.classList.add('project-delete-button');
projectDeleteButton.innerText = 'Delete Project';
sidebar.appendChild(projectDeleteButton)

//Create Project List
const projectList = document.createElement('ul');
projectList.classList.add('project-list');

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
newProjectName.setAttribute('placeholder',  'Name: e.g Travel')
newProjectName.setAttribute('maxLength', 12);

//Create Project cancel button
const newProjectCancelButton = document.createElement("button");
newProjectCancelButton.classList.add('new-project-cancel-button');
newProjectCancelButton.innerText = 'Cancel'

//Create Project submit button
const newProjectSubmitButton = document.createElement("input");
newProjectSubmitButton.classList.add('new-project-submit-button');
newProjectSubmitButton.setAttribute("type", "submit");
newProjectSubmitButton.setAttribute("value", "Add Project");

let projects = ['Math', 'Gym'];
projects.forEach(project => {
  renderProjects(project)
})

projectList.addEventListener('click', e => {
  Array.from(document.querySelectorAll('a.active')).forEach(li => li.classList.remove('active'));
  if (e.target.tagName.toLowerCase ='li') {
      e.target.classList.add('active');
      renderProjectHeader();
  }
})

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


projectDeleteButton.addEventListener('click', () => {
  let activeProject = document.querySelector('.active');
  console.log(activeProject.outerText);
  console.log(projects)
  projects = projects.filter(function(project) {
    console.log(project)
    return project !== activeProject.outerText;
  })
  console.log(projects)
  clearProjects();
  projects.forEach(project => {
    renderProjects(project)
  })
});


newTodoButton.addEventListener('click', () => {
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
  projects.push(newProject.value)
  projects.forEach(project => {
    renderProjects(project);
  });
  overlay.classList.remove('active');
  newProjectPopup.classList.remove('active');;
})

/*newTodoSubmitButton.addEventListener('click', e => {
  e.preventDefault();
  clearTodos();
  let newTodo = document.querySelector('#new-todo');
  todos.push(newTodo.value)
  todos.forEach(todo => {
    addNewTodo(todo);
  })


  overlay.classList.remove('active');
  newTodoPopup.classList.remove('active');;
})
*/
newTodoForm.addEventListener('submit', e => {
  e.preventDefault();
  let newTodo = new todo(
    newTodoTitle.value,
    newTodoDescription.value,
    newTodoDueDate.value,
    newTodoPriority.value);
  
  overlay.classList.remove('active');
  newTodoPopup.classList.remove('active');

  const newTodoContainer = document.createElement('div')
  newTodoContainer.classList.add('todo-container');

  const newTodoDiv = document.createElement('div');
  newTodoDiv.classList.add('todo-item')

  const colapsibleDescription = document.createElement('div');
  colapsibleDescription.classList.add('colapsible');

  newTodoDiv.append(newTodo.title, newTodo.dueDate, newTodo.priority);
  colapsibleDescription.append(newTodo.description);

  newTodoContainer.append(newTodoDiv,colapsibleDescription)

  createExpandButton();
  createDeleteButton();

  const expandButton = document.querySelector('.expand-button')
  const todoDeleteButton = document.querySelector('.todo-delete-button')
  
  todoList.append(newTodoContainer);

  
  setTimeout(() => {
    todoDeleteButton.addEventListener('click', e => {
      todoList.removeChild(newTodoContainer)
      todoDeleteButton.style.display = 'none'
      expandButton.style.display = 'none'
    })
  }, 100);

  
})

//Event Listener End Here

//Functions Start Here

//Constructor Function for Notes
function todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function project(name) {
    this.name = name;
    this.todos = [];
  
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
  a.id = (item.toLowerCase());
  a.setAttribute('href',"#");
  listItem.appendChild(a);
  sidebarList.append(listItem);
  sidebar.appendChild(sidebarList);
}


//Render project items
function renderProjects(name) {
  let newProject = document.createElement('li');
  let a = document.createElement('a');
  a.textContent = name;
  a.setAttribute('href',"#");
  newProject.appendChild(a);
  projectList.append(newProject);
  sidebar.appendChild(projectList);
}

//Clear Todos List
function clearTodos() {
  if (todoList) {
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
  }
}

//Render Main Items
function renderMain(item) {
  let listItem = document.createElement('li');
  let a = document.createElement('a');
  a.textContent = item;
  a.setAttribute('href',"#");
  listItem.appendChild(a);
  todoList.append(listItem);
  main.appendChild(todoList);
}



//New Todo Function
function addNewTodo(name) {
  let newTodoLi = document.createElement('li');
  let a = document.createElement('a');
  a.textContent = name;
  a.setAttribute('href',"#");
  newTodoLi.appendChild(a);
  todoList.append(newTodo);
}


function renderProjectHeader() {
  currentProjectTitle.innerText = document.querySelector('.active').innerText;
  currentProjectTitle.classList.add('current-project-title');
  todoContainer.appendChild(currentProjectTitle)
  }

function createExpandButton() {
  const expandButton = document.createElement('button');
  expandButton.classList.add('expand-button')
  expandButton.innerText = 'Details'
  const newTodoContainer= document.querySelector('.todo-container')
  newTodoContainer.append(expandButton)
}

function createDeleteButton() {
  const todoDeleteButton = document.createElement('button');
  todoDeleteButton.classList.add('todo-delete-button')
  todoDeleteButton.innerText = 'Delete'
  const newTodoContainer= document.querySelector('.todo-container')
  newTodoContainer.append(todoDeleteButton)
}