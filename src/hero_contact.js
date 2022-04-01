"use strict"

export default function contact() {
    const contact = document.createElement('div');
    const title = document.createElement('h1');
    contact.classList.add('contact');
    title.textContent = "Contact Information";
    contact.appendChild(title);

    return contact;
}