import "../styles/styles.scss";
import "./index.html"; 
import Data from "./data.json";
import Chart from "chart.js/auto";


(async function() {
    const chart = document.querySelector("#myChart");
    new Chart(chart, {
        type: 'bar',
        data: {
            labels: Data.map(row => row.day),
            datasets: [
                {
                    data: Data.map(row => row.amount),
                    backgroundColor: ['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)', '	hsl(8, 95%, 75%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)'], 
                    borderSkipped: false,
                    borderRadius: 5,
                }
            ]
        },
        options: {
            layout: {
                maintainAspectRatio: false,
                padding: {top: 20, },
            },
            scales: {
                x: {
                    border: {
                        display: false,
                      },
                    grid: {
                        display: false, // hide vertical grid lines
                        drawBorder: false,
                    },
                },
                y: {
                    display: false,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: "hsl(25, 47%, 15%)",
                    padding: 10,
                    xAlign: "center", 
                    yAlign: "bottom",
                    displayColors: false,
                    
                    callbacks: {
                        title: function(tooltipItems) {
                            return "";
                        },
                        label: function(context) {
                            let label = context.dataset.label || '';
                            console.log(context);
                            if (label) {
                                label += ": ";
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
        },
        layout: {
            padding: {
                bottom: 20
            }
        }
    });
})();





