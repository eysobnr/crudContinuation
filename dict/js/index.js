window.addEventListener('load', () => {
    getTotalParticipants()
    getTotalMale()
    getTotalFemale()
    getFinishedRemarks()
    getSummaryRemarks()
})


function getTotalParticipants() {

    $.ajax({
        url: './php/getTotalParticipants.php',
        method: 'POST',
        data: {},
        dataType: 'json',
        success: (response) => {
            $.each(response, (key, value) => {
                document.querySelector('#totalParticipants').innerHTML = value.totalParticipants
            })
        }
    })

} 


function getTotalMale() {

    $.ajax({
        url: './php/getTotalMale.php',
        method: 'POST',
        data: {},
        dataType: 'json',
        success: (response) => {
            $.each(response, (key, value) => {
                document.querySelector('#totalMale').innerHTML = value.totalMale
            })
        }
    })

} 


function getTotalFemale() {

    $.ajax({
        url: './php/getTotalFemale.php',
        method: 'POST',
        data: {},
        dataType: 'json',
        success: (response) => {
            $.each(response, (key, value) => {
                document.querySelector('#totalFemale').innerHTML = value.totalFemale
            })
        }
    })

} 

function getFinishedRemarks() {

    $.ajax({
        url: './php/getFinishedRemarks.php',
        method: 'POST',
        data: {},
        dataType: 'json',
        success: (response) => {
            $.each(response, (key, value) => {
                document.querySelector('#finishedRemarks').innerHTML = value.finishedRemarks
            })
        }
    })

} 


function getSummaryRemarks() {

    let xValue = []
    let yValue = []

    $.ajax({
        url: './php/getSummaryRemarks.php',
        method: 'POST',
        data: {},
        dataType: 'json',
        success: (response) => {

            $.each(response, (key, value) => {
                xValue.push(value.remarks)
                yValue.push(value.remarksCount)
            })

            const labels = xValue
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Summary of Remarks',
                    data: yValue,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)'
                      ],
                    borderWidth: 1
                }]
            }

            const config = {
                type: 'bar',
                data: data,
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                },
              };

              let chartCanvas = new Chart(
                document.querySelector('#myChart'),
                config
              )

        }
    })

}

