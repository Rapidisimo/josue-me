import {colorMode, checkLocalStorage, themeSwitcher} from './darkmode.js'

const darkmodeTheme = document.getElementById('darkmode');

// Closes the Nav when clicking on an item on mobile view
const nav = document.querySelector('UL');
const home = document.querySelector('#jr');

nav.addEventListener('click', () => {
    let checkbox = document.querySelector('.nav-toggle');
    checkbox.checked = false;
})

home.addEventListener('click', () => {
    let checkbox = document.querySelector('.nav-toggle');
    checkbox.checked = false;
})

//Set current localStorage
checkLocalStorage()