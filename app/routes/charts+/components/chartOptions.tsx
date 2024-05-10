export default function GetChartStyles({
  title = "Chart Title",
  indexAxis = "y" as const,
  foregroundColor = "rgba(255, 255, 255, 0.5)",
  tickSize = 10,
}: {
  title?: string;
  indexAxis?: string;
  foregroundColor?: string;
  tickSize?: number;
}) {
  const chartDefaults = {
    indexAxis: indexAxis,
    responsive: true,

    scales: {
      x: {
        grid: {
          color: foregroundColor,
        },
        ticks: {
          color: foregroundColor,
          font: {
            size: tickSize,
            weight: "bold" as const,
          },
          padding: tickSize,
        },
      },
      y: {
        grid: {
          color: foregroundColor,
        },
        ticks: {
          color: foregroundColor,
          font: {
            size: tickSize,
            weight: "bold" as const,
          },
          padding: tickSize,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: foregroundColor,
        },
      },
      title: {
        display: true,
        text: title,
        color: foregroundColor,
      },
    },
  };
  return chartDefaults;
}
