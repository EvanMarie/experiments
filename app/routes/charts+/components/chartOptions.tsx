export default function GetChartStyles({
  title = "Chart Title",
  indexAxis = "y" as const,
  gridLineColor = "rgba(255, 255, 255, 0.5)",
  textColor = "rgba(255, 255, 255, 1)",
  tickSize = 10,
}: {
  title?: string;
  indexAxis?: string;
  gridLineColor?: string;
  textColor?: string;
  tickSize?: number;
}) {
  const chartDefaults = {
    indexAxis: indexAxis,
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
            weight: "bold" as const,
            color: textColor,
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
            weight: "bold" as const,
            color: textColor,
          },
          padding: tickSize,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        display: true,
        labels: {
          color: gridLineColor,
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          size: 24,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return chartDefaults;
}
