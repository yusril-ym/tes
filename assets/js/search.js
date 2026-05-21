const searchInput = document.getElementById('search-input')

searchInput.addEventListener('keyup', () => {

  const keyword =
    searchInput.value.toLowerCase()

  document
    .querySelectorAll('section')
    .forEach(section => {

      const content =
        section.innerText.toLowerCase()

      if(content.includes(keyword)) {
        section.style.display = 'block'
      } else {
        section.style.display = 'none'
      }

    })

})
