import { ChartOptions } from "chart.js";

export default function GetLineGraphStyles({
  title = "Chart Title",
  gridLineColor = "rgba(255, 255, 255, 0.5)",
  textColor = "rgba(255, 255, 255, 1)",
  tickSize = 10,
  pointStyle = "circle" as const, // Default point style
}: {
  title?: string;
  gridLineColor?: string;
  textColor?: string;
  tickSize?: number;
  pointStyle?:
    | "circle"
    | "cross"
    | "crossRot"
    | "dash"
    | "line"
    | "rect"
    | "rectRounded"
    | "rectRot"
    | "star"
    | "triangle";
}): ChartOptions {
  const lineGraphDefaults: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: gridLineColor,
        },
        ticks: {
          color: textColor,
          font: {
            size: tickSize,
            weight: "bold",
            family: "Arial", // Assuming Arial, adjust as needed
          },
          padding: tickSize,
        },
      },
      y: {
        grid: {
          color: gridLineColor,
        },
        beginAtZero: true,
        ticks: {
          color: textColor,
          font: {
            size: tickSize,
            weight: "bold",
            family: "Arial", // Assuming Arial, adjust as needed
          },
          padding: tickSize,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        display: true,
        labels: {
          color: textColor, // Corrected usage
          usePointStyle: true, // Ensures point styles are used in the legend
          pointStyle: pointStyle,
          font: {
            family: "Arial",
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
          family: "Arial",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return lineGraphDefaults;
}
