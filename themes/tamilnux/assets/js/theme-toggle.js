console.log('This is toggle theme js');

function toggleTheme() {
    const rootElement = document.documentElement;
    const currentTheme = rootElement.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    rootElement.classList.remove(`${currentTheme}-theme`);
    rootElement.classList.add(`${newTheme}-theme`);

    // Update the theme in localStorage (optional, so theme persists after refresh)
    localStorage.setItem('theme', newTheme);
  }

  // On page load, check if theme was previously set in localStorage
  (function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.remove(savedTheme === 'light' ? 'dark-theme' : 'light-theme');
      document.documentElement.classList.add(`${savedTheme}-theme`);
    }
  })();