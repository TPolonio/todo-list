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

//Create new Note popup

const newNotePopup = document.createElement('div');
newNotePopup.classList.add('new-note-popup')
newNotePopup.innerHTML = 'HI'

main.appendChild(newNotePopup)


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