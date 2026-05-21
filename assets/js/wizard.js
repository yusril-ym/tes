const nextButtons = document.querySelectorAll('.next-btn')
const prevButtons = document.querySelectorAll('.prev-btn')

function goToStep(step) {

  document
    .querySelectorAll('.step-panel')
    .forEach(panel => {
      panel.classList.add('hidden')
    })

  document
    .querySelector(`[data-content="${step}"]`)
    .classList.remove('hidden')

  document
    .querySelectorAll('.step-btn')
    .forEach(btn => {
      btn.classList.remove('active')
    })

  document
    .querySelector(`[data-step="${step}"]`)
    .classList.add('active')

  AppState.currentStep = step

  updateProgress()
  saveState()

}

nextButtons.forEach(btn => {

  btn.addEventListener('click', () => {

    const next = Number(btn.dataset.next)

    if(next > AppState.currentStep + 1) {
      showToast('Selesaikan langkah sebelumnya')
      return
    }

    AppState.completedSteps.push(AppState.currentStep)

    goToStep(next)

  })

})

prevButtons.forEach(btn => {

  btn.addEventListener('click', () => {

    goToStep(Number(btn.dataset.prev))

  })

})
