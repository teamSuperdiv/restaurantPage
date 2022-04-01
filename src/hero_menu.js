"use strict"

export default function menu() {
    const menu = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = "Fancy Menu";
    menu.appendChild(title);
    menu.classList.add('menu');
    
    return menu;
}



