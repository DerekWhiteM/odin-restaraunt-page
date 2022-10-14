import './style.css';
import Contact from './pages/contact';
import Home from './pages/home';
import Menu from './pages/menu';

const content = document.getElementById('content');

function addNavigation() {

    function handleClick(element) {
        const page = document.querySelector('.page');
        page.innerHTML = null;
        page.appendChild(element);
    }

    function addLinkToHome() {
        const home = document.createElement('li');
        home.classList.add('navbar__item');
        const button = document.createElement('button');
        button.textContent = 'Home';
        button.onclick = () => handleClick(Home());
        home.appendChild(button);
        navbar.appendChild(home);
    }

    function addLinkToMenu() {
        const menu = document.createElement('li');
        menu.classList.add('navbar__item');
        const button = document.createElement('button');
        button.textContent = 'Menu';
        button.onclick = () => handleClick(Menu());
        menu.appendChild(button);
        navbar.appendChild(menu);
    }

    function addLinkToContact() {
        const contact = document.createElement('li');
        contact.classList.add('navbar__item');
        const button = document.createElement('button');
        button.textContent = 'Contact';
        button.onclick = () => handleClick(Contact());
        contact.appendChild(button);
        navbar.appendChild(contact);
    }

    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');
    addLinkToHome();
    addLinkToMenu();
    addLinkToContact();
    content.appendChild(navbar);
}

function addPageContent() {
    const page = document.createElement('div');
    page.classList.add('page');
    content.appendChild(page);
    page.appendChild(Home());
}

function createRestarauntApp() {
    addNavigation();
    addPageContent();
}

createRestarauntApp();