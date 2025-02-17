console.log('This is toggle theme js');

window.toggleTheme = function () {
  const rootElement = document.documentElement;
  const currentTheme = rootElement.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  rootElement.classList.remove(`${currentTheme}-theme`);
  rootElement.classList.add(`${newTheme}-theme`);

  // Update the theme in localStorage
  localStorage.setItem('theme', newTheme);
};
