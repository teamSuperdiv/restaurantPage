"use strict"

import hero from './hero.js';
import navbar from './navbar.js';
import footer from './footer.js';

const content = document.querySelector('#content');

content.append(navbar());
content.append(hero());
content.append(footer());

