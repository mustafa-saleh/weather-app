import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

Chart.pluginService.register({
  beforeRender: function (chart) {
    if (chart.config.options.showAllTooltips) {
      chart.pluginTooltips = [];
      chart.config.data.datasets.forEach(function (dataset, i) {
        chart.getDatasetMeta(i).data.forEach(function (sector, j) {
          chart.pluginTooltips.push(
            new Chart.Tooltip(
              {
                _chart: chart.chart,
                _chartInstance: chart,
                _data: chart.data,
                _options: chart.options.tooltips,
                _active: [sector],
              },
              chart
            )
          );
        });
      });

      // turn off normal tooltips
      chart.options.tooltips.enabled = false;
    }
  },
  afterDraw: function (chart, easing) {
    if (chart.config.options.showAllTooltips) {
      if (!chart.allTooltipsOnce) {
        if (easing !== 1) return;
        chart.allTooltipsOnce = true;
      }

      // turn on tooltips
      chart.options.tooltips.enabled = true;
      Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
        tooltip.initialize();
        tooltip.update();
        tooltip.pivot();
        tooltip.transition(easing).draw();
      });
      chart.options.tooltips.enabled = false;
    }
  },
});

const WeatherChart = (props) => {
  const chartRef = useRef();

  useEffect(() => {
    const areaChartRef = chartRef.current.getContext("2d");
    areaChartRef.canvas.height = "120";

    new Chart(areaChartRef, {
      type: "line",
      data: {
        labels: [
          "1 AM",
          "4 AM",
          "7 AM",
          "10 AM",
          "1 PM",
          "4 PM",
          "7 PM",
          "10 PM",
        ],
        datasets: [
          {
            data: [31, 30, 37, 30, 30, 33, 37, 35],
            backgroundColor: "#fef9cc",
            borderColor: "#fbe000",
            borderWidth: 1,
          },
        ],
      },
      options: {
        showAllTooltips: true,
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        tooltips: {
          backgroundColor: "white",
          caretSize: 0,
          bodyFontSize: 14,
          bodyFontColor: "#666",
          displayColors: false,
          yAlign: "bottom",
          yPadding: 0,
          caretPadding: 6,
          callbacks: {
            title: function (tooltipItem, data) {
              return ""; //data['labels'][tooltipItem[0]['index']];
            }
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: "#666",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
                suggestedMax: 50,
                stepSize: 1,
              },
            },
          ],
        },
      },
    });
  });

  return (
    <div>
      <canvas id="areaChart" ref={chartRef} />
    </div>
  );
};

export default WeatherChart;
