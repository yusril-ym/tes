const themeToggle =
  document.getElementById('theme-toggle')

function toggleTheme() {

  document.documentElement.classList.toggle('dark')

  localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  )

}

themeToggle.addEventListener('click', toggleTheme)

window.addEventListener('DOMContentLoaded', () => {

  const savedTheme = localStorage.getItem('theme')

  if(savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  }

})
