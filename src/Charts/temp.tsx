import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function TempChart({ forecast, day }) {
  const uData = [];
  const xLabels = [];

  forecast.forecast.forecastday[day].hour.forEach((element) => {
    xLabels.push(element.time.split(" ")[1]);
    uData.push(element.temp_c);
  });

  const labels = xLabels;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        tension: 0.3,
        pointRadius: 3,
        data: uData,
        borderColor: "white",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom" as const,
      },
      title: {
        display: false,
        text: "Temperature chart",
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
          callback: function (value) {
            return value + "°C"; // Add unit to y-axis ticks
          },
        },
      },
    },
  };

  return <Line options={options} data={data} />;
}
