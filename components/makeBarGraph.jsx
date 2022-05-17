import { Box } from "@mui/material";
import { Bar, Chart } from 'react-chartjs-2';
import React from "react";
//import constants from "../src/constants";
import constants from "../src/constantsEng";
import calculateBurden from "../src/calculateBurden";
// import { Chart as ChartJS, registerables } from 'chart.js';
// if(registerables){
// ChartJS.register(...registerables);
// }
import { Chart as ChartJS } from 'chart.js/auto';


const allTasks = constants.allTasks

const backgroundColorList = constants.backgroundColorList
const borderColorList = constants.borderColorList

const myBackColor = constants.myBackColor
const partnerBackColor = constants.partnerBackColor

const myBackColorBorder = constants.myBackColorBorder
const partnerBackColorBorder = constants.partnerBackColorBorder

const options = {
    scales: {
        x: {
            stacked: true,
          },
        y: {
            stacked: true
        },
        xAxes: [ // x軸設定
        {
        scaleLabel: { // 軸ラベル設定
            display: true,
            labelString: '2人',
          },
        },
        ],
      yAxes: [ // y軸設定
      {
        scaleLabel: {
          display: true,
          labelString: '時間',
        },
        ticks: { // 軸目盛設定
          beginAtZero: true,
          callback: function (value, index, values) {
            return '${value}(分)';
          },
        },
      },
    ],
    },
    title: {
        display: true,
        text: '結果'
    }
};




export default function MakeBarGraph(props){
    const datasets = [];
    //console.log(allTasks);
    //console.log(props);
    allTasks.map(c => {
        c.children.map(t => {
            //console.log(c.name);
            if (t.checked){
                let category = c.name;
                if (props.value.myTasks[t.name] || props.value.partnerTasks[t.name]){
                    //console.log(t.name);
                    if (props.value.myTasks[t.name]){
                        if (props.value.myTasks[t.name].participates){
                            //console.log(props.value.myTasks[t.name].category);
                            const dataset = {
                                label : t.name,
                                data : [calculateBurden(props.value.myTasks[t.name].effort, props.value.myTasks[t.name].duration), 0],
                                backgroundColor: myBackColor,
                                borderColor: myBackColorBorder,
                                borderWidth: 1,
                                stack: category,
                            };
                            datasets.push(dataset);
                        }
                    }
                    if (props.value.partnerTasks[t.name]){
                        if (props.value.partnerTasks[t.name].participates){
                            const dataset = {
                                label : t.name,
                                data : [0, calculateBurden(props.value.partnerTasks[t.name].effort, props.value.partnerTasks[t.name].duration)],
                                backgroundColor: partnerBackColor,
                                borderColor: partnerBackColorBorder,
                                borderWidth: 1,
                                stack: category,
                            };
                            datasets.push(dataset);
                        }
                    }
                }
            }
        })
    });
    const data = {labels: ["私","パートナー"]};
    data["datasets"] = datasets;
    



    return  (
      <Bar
       data={data} 
       options={{
        plugins: {
          legend: {
            display: false,
          },           
        },
        scales: {
            x: {
              stacked: true,
              ticks: {
                callback: function(label) {
                  return label
                }
              }
            },
            secondXAxis: {
              axis: 'x',
              labels: ['私', 'パートナー'],
              grid: {
                drawOnChartArea: false
              }
            }
          }
      }}
       width={50}
       height={50}
       />
    )
}