import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataPointValue = Math.max(...dataPointValues) // spread operator pulls out all values from the dataPointValues array ino the MAth.max() method

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPointValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
