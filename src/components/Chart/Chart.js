import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const totalMaximum = Math.max(...props.dataPoints.map((i) => i.value));
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
