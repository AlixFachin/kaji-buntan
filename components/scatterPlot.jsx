import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ScatterPlot(props) {
  const ref = useRef();
  const margin = 30;
  const jitter = 10;
  const graphWidth = props.width - 2 * margin;
  const graphHeight = props.height - 2 * margin;
  const xScale = d3.scalePoint([0, graphWidth]).domain([-1, 0, 1])
  const yScale = d3.scaleLinear([graphHeight, 0]).domain([0, 120])
  function genJitter() {
    return jitter * (Math.random() - 0.5);
  }
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.select("#xAxis").call(d3.axisBottom().scale(xScale));
    svg.select("#yAxis").call(d3.axisLeft().scale(yScale));
  });
  return (
    <svg width={props.width} height={props.height} ref={ref}>
      <g transform={`translate(${margin}, ${margin})`}>
        <g id="xAxis" transform={`translate(0, ${graphHeight})`}></g>
        <g id="yAxis"></g>
        {
          Object.keys(props.value.myTasks).map(k => props.value.myTasks[k]).filter(d => d.participates).map(d => {return <circle key={Math.random()} cx={xScale(d.effort) + genJitter()} cy={yScale(d.duration) + genJitter()} fill={props.myColor} r={10}></circle>})
        }
        {
          Object.keys(props.value.partnerTasks).map(k => props.value.partnerTasks[k]).filter(d => d.participates).map(d => {return <circle key={Math.random()} cx={xScale(d.effort) + genJitter()} cy={yScale(d.duration) + genJitter()} fill={props.partnerColor} r={10}></circle>})
        }
      </g>
    </svg>
  )
}