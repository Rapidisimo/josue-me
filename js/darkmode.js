const darkmodeTheme = document.getElementById('darkmode');
const siteBody = document.querySelector('body');
let colorMode = '';

function checkLocalStorage() {
    if(localStorage.getItem('Theme') === 'lightMode') {
        console.log('Light theme is stored');
        colorMode = 'lightMode';
        themeSwitcher(false);
    }else if(localStorage.getItem('Theme') === 'darkMode') {
        console.log('Dark theme is stored');
        colorMode = 'darkMode';
        themeSwitcher(true);
    } else {
        console.log('Stored default light theme')
        localStorage.setItem('Theme', 'lightMode')
        colorMode = 'lightMode';
    }
    console.log(colorMode)
}
checkLocalStorage()

function themeSwitcher(mode) {
    if(mode) {
    siteBody.className = 'darkmode';
    darkmodeTheme.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
    `;
    localStorage.setItem('Theme', 'darkMode')
    colorMode = 'darkMode';
    } else {
        siteBody.className = '';
        darkmodeTheme.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-stars" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path d="M19 11h2m-1 -1v2" />
        </svg>
        `;
        localStorage.setItem('Theme', 'lightMode')
        colorMode = 'lightMode';
    }
}

darkmodeTheme.addEventListener('click', () => {
    if(colorMode === 'lightMode') {
        themeSwitcher(true)
    } else{themeSwitcher(false)}
});

export {siteBody, colorMode, checkLocalStorage, themeSwitcher}