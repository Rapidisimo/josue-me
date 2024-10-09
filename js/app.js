import {colorMode, checkLocalStorage, themeSwitcher} from './darkmode.js'

// Nav Elements
// const development = document.getElementById('development');
const design = document.getElementById('uidesign');
const ccreation = document.getElementById('ccreation');
const connect = document.getElementById('connect');
const toplink = document.getElementById('backToTop');
const darkmodeTheme = document.getElementById('darkmode');

// Smooth Scrolling for Nav
// development.addEventListener('click', e => {
//     e.preventDefault();
//     document.querySelector('.projects').focus();
//     document.getElementById('dev').scrollIntoView({ behavior: 'smooth' });
// });

design.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.designs').focus();
    document.getElementById('design').scrollIntoView({ behavior: 'smooth' });
});

ccreation.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.other-work').focus();
    document.getElementById('cc').scrollIntoView({ behavior: 'smooth' });
});

connect.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.email a').focus();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

toplink.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('header').focus();
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

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