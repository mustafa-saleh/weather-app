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

const WeatherChart = ({ labels, data, tickMax, tickStep }) => {
  const chartRef = useRef();
 
  useEffect(() => {
    new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: "#fef9cc",
            borderColor: "#fbe000",
            borderWidth: 1,
          },
        ],
      },
      options: {
        bezierCurve: false,
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
          bodyFontSize: 12,
          bodyFontFamily: "Roboto, Helvetica, Sans-Serif",
          bodyFontColor: "#666",
          displayColors: false,
          yAlign: "bottom",
          yPadding: 0,
          caretPadding: 6,
          callbacks: {
            title: function (tooltipItem, data) {
              return ""; //data['labels'][tooltipItem[0]['index']];
            },
            label: function (tooltipItem, data) {
              return `${data["datasets"][0]["data"][tooltipItem["index"]]}°`;
            },
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
                fontFamily: "Roboto, Helvetica, Sans-Serif",
                fontSize: 11,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
                suggestedMax: tickMax,
                stepSize: tickStep,
              },
            },
          ],
        },
      },
    });
  });

  return <canvas ref={chartRef} />;
};

export default WeatherChart;
