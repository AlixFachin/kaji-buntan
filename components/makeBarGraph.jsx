import { Box } from "@mui/material";
import { Bar, Chart } from 'react-chartjs-2';
import React from "react";
import constants from "../src/constants";
// import { Chart as ChartJS, registerables } from 'chart.js';
// if(registerables){
// ChartJS.register(...registerables);
// }
import { Chart as ChartJS } from 'chart.js/auto';


const allTasks = constants.allTasks

const backgroundColorList = constants.backgroundColorList
const borderColorList = constants.borderColorList

function categoryShow(task){
    let category;
    for (let categoryObject of allTasks) {
        for (let taskObject of categoryObject.children) {
            if (taskObject.name == task){
                category = categoryObject.name;
            }
        }
    }
    return category;
}




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



// const backgroundColorList = {
//     '料理' : 'rgba(255, 99, 132, 0.2)',
//     '掃除' : 'rgba(75, 192, 192, 0.2)',
//     'ベッド' : 'rgba(54, 162, 235, 0.2)',
//     '子供' : 'rgba(153, 102, 255, 0.2)',
//     'ペット' : 'rgba(201, 203, 207, 0.2)'
// }
// const borderColorList = {
//     '料理' :'rgb(255, 99, 132)',
//     '掃除' : 'rgb(75, 192, 192)',
//     'ベッド' :'rgb(54, 162, 235)',
//     '子供' : 'rgb(153, 102, 255)',
//     'ペット' :'rgb(201, 203, 207)'
// }

export default function MakeBarGraph(props){
    const allTasks = constants.allTasks;
    const datasets = [];
    allTasks.map(c => {
        c.children.map(t => {
            //console.log(t);
            let category = categoryShow(t.name);
            if (props.value.myTasks[t.name] || props.value.partnerTasks[t.name]){
                //console.log(t.name);
                if (props.value.myTasks[t.name]){
                    if (props.value.myTasks[t.name].participates){
                        //console.log(props.value.myTasks[t.name].category);
                        const dataset = {
                            label : t.name,
                            data : [props.value.myTasks[t.name].duration, 0],
                            backgroundColor: backgroundColorList[category],
                            borderColor:borderColorList[category],
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
                            data : [0, props.value.partnerTasks[t.name].duration],
                            backgroundColor: backgroundColorList[category],
                            borderColor:borderColorList[category],
                            borderWidth: 1,
                            stack: category,
                        };
                        datasets.push(dataset);
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
       options={options}
       width={50}
       height={50}
       />
    )
}