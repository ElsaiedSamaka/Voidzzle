import { useEffect, useState } from 'react';
// ApexCharts wont work for server component by default so we have to use dynamic import in order
// to lazely load it
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const CircularChart = ({ title, textColor, strokeColor }) => {
  const [series, setStateSeries] = useState([10]);
  const [options] = useState({
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        inverseOrder: true,
        startAngle: -130,
        endAngle: 130,
        offsetX: 0,
        offsetY: 10,
        hallow: {
          margin: 0,
          size: '0%',
          background: 'transparent',
          image: undefined,
          imageWidth: 150,
          imageHeight: 150,
          imageOffsetX: 0,
          imageOffsetY: 0,
          imageClipped: true,
          position: 'front',
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
        track: {
          show: true,
          startAngle: -130,
          endAngle: 130,
          background: '#f4f5f9',
          opacity: 0.9,
          margin: 0,
          strokeWidth: '100%',
        },
        dataLabels: {
          show: true,
          value: {
            show: true,
            fontSize: '28px',
            fontFamily: 'DM sans',
            fontWeight: 600,
            color: textColor,
            offsetY: 0,
            // TODO: add a custom formatter pipe for the following formatter function
            formatter: function (val) {
              if (val > 1000 && val < 999999) {
                return val / 1000 + 'k' + '%';
              } else if (val > 999999 && val < 9999999) {
                return val / 1000000 + 'm' + '%';
              } else if (val <= 1000 && val > 0) {
                return val + '%';
              } else {
                return val;
              }
            },
          },
        },
      },
    },
    fill: {
      type: 'solid',
      colors: [strokeColor],
      // if we ever needed to check over some value for fill colors we can use below code
      //   colors: [
      //     function ({ value, seriesIndex, w }) {
      //       if (value < 55) {
      //         return "#7E36AF";
      //       } else if (value >= 55 && value < 80) {
      //         return "#164666";
      //       } else {
      //         return "#D9534F";
      //       }
      //     },
      //   ],
    },
    stroke: {
      lineCap: 'round',
      curve: 'smooth',
      colors: ['#000'],
      width: 4,
    },
    labels: [''],
    title: {
      text: title,
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 20,
      floating: true,
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'DM sans',
        color: textColor,
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: true,
      shared: true,
      followCursor: true,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: 'dark',
      style: {
        fontSize: '12px',
        fontFamily: 'DM sans',
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName,
        },
      },
      z: {
        formatter: undefined,
        title: 'Size: ',
      },
      marker: {
        show: true,
      },
      items: {
        display: 'flex',
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
    },
    noData: {
      text: 'No Data',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#fff',
        fontSize: '20px',
        fontFamily: 'DM sans',
      },
    },
  });

  return (
    <div id="chart">
      <ApexChart
        options={options as any}
        series={series}
        type="radialBar"
        height={300}
      />
    </div>
  );
};

export default CircularChart;
