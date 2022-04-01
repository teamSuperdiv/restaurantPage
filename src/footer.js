"use strict"

export default function hero() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = '© teamSuperdiv'

    return footer;
}