var ctx = document.getElementById("chartBar");

var numSexe = document.getElementById('chartBar');
var numMale = numSexe.dataset.male;
var numFemale = numSexe.dataset.female;               // recupérer les donnés du front via attribut pers//

new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: '# of Votes',
            data: [numMale, numFemale],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// chart message //

var ctx = document.getElementById("doughnut");


var numRead = ctx.dataset.read;
var numNotRead = ctx.dataset.notread;
console.log(numNotRead);

new Chart(ctx, {

    type: 'doughnut',
    data: {
        labels: ['Read', 'Not read'],
        datasets: [{
            label: '# of Votes',
            data: [numRead, numNotRead],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


// chart orders //

var ctx = document.getElementById("chartpie");

new Chart(ctx, {

    type: 'pie',
    data: {
        labels: ['Read', 'Not read'],
        datasets: [{
            label: '# of Votes',
            data: [10, 34],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});