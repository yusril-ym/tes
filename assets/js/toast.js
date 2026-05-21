function showToast(message) {

  const toast = document.createElement('div')

  toast.className = 'toast'
  toast.innerText = message

  document
    .getElementById('toast-container')
    .appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 3000)

}
