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
wrapper.appendChild(sidebar)



//to make the button look like normal text 
//you can use CSS:
//button.link { background:none; border:none; }