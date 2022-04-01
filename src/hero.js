"use strict"

import caption from './hero_caption';
import menu from './hero_menu';
import contact from './hero_contact';

export default function hero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const navItems = Array.from(document.querySelectorAll('.listItem'));
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            if (item == navItems[0]) {
                hero.innerHTML = '';
                hero.appendChild(caption());
            } else if (item == navItems[1]) {
                hero.innerHTML = '';
                hero.appendChild(menu());
            } else if (item == navItems[2]) {
                hero.innerHTML = '';
                hero.appendChild(contact());
            }
        })
    })
    hero.appendChild(caption());
    
    return hero;
}