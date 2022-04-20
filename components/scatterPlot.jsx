import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ScatterPlot(props) {
  const ref = useRef();
  const margin = 20;
  const graphWidth = props.width - 2 * margin;
  const graphHeight = props.height - 2 * margin;
  const xScale = d3.scalePoint([0, graphWidth]).domain([-1, 0, 1])
  const yScale = d3.scaleLinear([0, graphHeight]).domain([0, 120])
  useEffect(() => {
    const svg = d3.select(ref.current);
    console.log(svg);
    svg.select("#xAxis").call(d3.axisBottom().scale(xScale));
    svg.select("#yAxis").call(d3.axisLeft().scale(yScale));
  });
  return (
    <svg width={props.width} height={props.height} ref={ref}>
      <g transform={`translate(${margin}, ${margin})`}>
        <g id="xAxis" transform={`translate(0, ${graphHeight})`}></g>
        <g id="yAxis"></g>
        {
          Object.keys(props.value.myTasks).filter(d => d.participates).map(d => {return <circle cx={xScale(d.effort)} cy={yScale(d.duration)} fill="#FF0000" r={10}></circle>})
        }
        {
          Object.keys(props.value.partnerTasks).filter(d => d.participates).map(d => {return <circle cx={xScale(d.effort)} cy={yScale(d.duration)} fill="#0000FF" r={10}></circle>})
        }
      </g>
    </svg>
  )
}