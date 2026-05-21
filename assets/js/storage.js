function saveState() {
  localStorage.setItem(
    'erapor-state',
    JSON.stringify(AppState)
  )
}

function loadState() {

  const saved = localStorage.getItem('erapor-state')

  if(saved) {
    Object.assign(AppState, JSON.parse(saved))
  }

}
