import '../scss/main.scss';

// Global Variables
const darkModeToggle = document.querySelector('[data-js="dark-mode-toggle"]');

// Setting the initial value of the "darkModeToggle", based on the value saved in the "localStorage"
darkModeToggle.checked = getLocalStorage().darkMode;

// Event Listener
darkModeToggle.addEventListener('change', changeTheme);

// Functions
function changeTheme() {
  const data = getLocalStorage();
  const checked = darkModeToggle.checked;

  data.darkMode = checked;
  htmlElement.setAttribute('data-dark-mode', checked);
  setLocalStorage(data);
}

function setLocalStorage(data) {
  localStorage.setItem(directory, JSON.stringify(data));
}
