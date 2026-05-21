const accordions = document.querySelectorAll('.accordion-toggle')

accordions.forEach(button => {

  button.addEventListener('click', () => {

    const content = button.nextElementSibling

    const expanded =
      button.getAttribute('aria-expanded') === 'true'

    button.setAttribute(
      'aria-expanded',
      !expanded
    )

    if(expanded) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }

  })

})
