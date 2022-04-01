"use strict"

import hero from './hero.js'
import navbar from './navbar.js'

const content = document.querySelector('#content');

content.append(navbar());
content.append(hero());

