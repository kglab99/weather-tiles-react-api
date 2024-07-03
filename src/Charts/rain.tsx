import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  ); 

export default function RainChart({forecast, day}) {

    const uData = [];
    const xLabels = [];

    forecast.forecast.forecastday[day].hour.forEach((element) => {
    xLabels.push(element.time.split(" ")[1]);
    uData.push(element.chance_of_rain)
    });
    
    const options = {
        responsive: true,
        
        plugins: {
          legend: {
            display: false,
            position: 'bottom' as const,
          },
          title: {
            display: false,
            text: 'Temperature chart',
          },
        },
        scales: {
          x: {
            ticks: {
              color: "white",
              
            },
          },
          y: {
            ticks: {
              color: "white",
              callback: function(value) {
                return  value + "%";  // Add unit to y-axis ticks
              },
            },
          }
      
        }
      };
    
    const labels = xLabels;

    const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: '',
            data: uData,
            borderColor: 'white',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            stack: 'Stack 0'
          },
        ],
      };

  return (
    <Bar options={options} data={data} />
  );
}