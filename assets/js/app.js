window.addEventListener('DOMContentLoaded', () => {

  loadState()

  initializeChart()

  const reqCheckboxes =
    document.querySelectorAll('.req-checkbox')

  reqCheckboxes.forEach(checkbox => {

    checkbox.addEventListener('change', () => {

      const allChecked =
        [...reqCheckboxes]
          .every(item => item.checked)

      const wizard =
        document.getElementById('wizard')

      if(allChecked) {

        wizard.classList.remove('disabled-section')

        document
          .getElementById('req-status')
          .innerHTML = '✅ Sistem siap instalasi'

        showToast('Semua persyaratan terpenuhi')

      } else {

        wizard.classList.add('disabled-section')

      }

      saveState()

    })

  })

})

function updateProgress() {

  const percent =
    Math.round(
      (AppState.completedSteps.length / 4) * 100
    )

  document
    .getElementById('progress-bar')
    .style.width = percent + '%'

  document
    .getElementById('progress-text')
    .innerText = percent + '%'

}
