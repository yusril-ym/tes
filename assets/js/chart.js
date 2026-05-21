let chartInstance

function initializeChart() {

  const ctx =
    document
      .getElementById('time-chart')
      ?.getContext('2d')

  if(!ctx) return

  if(chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [
        'Persiapan',
        'Instalasi',
        'Sinkronisasi'
      ],
      datasets: [{
        data: [10,20,30]
      }]
    }
  })

}
