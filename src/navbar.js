"use strict"

const navItems = {
    1: "Home",
    2: "Menu",
    3: "Contact"
}

export default function navbar() {
    const navbar = document.createElement('div');
    const nav = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const listEl = document.createElement('li');
        listEl.classList.add('listItem');
        listEl.innerHTML = `${navItems[i+1]}`
        nav.appendChild(listEl);
    }
    navbar.classList.add('navbar');
    navbar.appendChild(nav);

    return navbar;
}