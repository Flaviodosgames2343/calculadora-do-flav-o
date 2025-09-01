const screen = document.getElementByld('answer');

const buttons = document.querySelectorAll('.calc-btn');

const historyBtn = document.getElementById('history-Btn');

const historyPanel = document.getElementById('history-panel');

const historyList = document.getElementById('history-list');

const closeHistory = document.getElementById('close-History');

const clearHistory = document.getElementById('clear-History');

const themeToggle = document.getElementById('Theme-Toggle');

function setTheme(mode) {
    document.documentElement.classList.toggle('dakr', mode === 'dark');

    themeToggle.setAttribute('aria-pressed', mode=== 'dark');

    localStorage.setItem('Theme', mode); 
}
setTheme(localStorage.getItem('Theme') || 'light');

themeToggle.onclick = () => {
    const newMode = document.documentElement.classList.contains('dark') ? 'light';


setTheme(newMode);
}