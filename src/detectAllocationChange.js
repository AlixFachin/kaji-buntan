//import constants from "./constants";
import constants from "../src/constantsEng";
const allTasks = constants.allTasks



export default function detectAllocationChange(currentTaskRepartition, changedTaskRepartition){
  let changedTaskList = [];
  for (let c of allTasks){
    for (let task of c.children){
      if(currentTaskRepartition.myTasks[task.name].participates != changedTaskRepartition.myTasks[task.name].participates){
        changedTaskList.push(task.name);
      }
    }
  }
  if (changedTaskList.length == 0){
    return ['unchanged',changedTaskList];
  }else{
    return ['changed',changedTaskList];
  }
}