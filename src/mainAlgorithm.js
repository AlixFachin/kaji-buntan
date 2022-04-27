
import constants from "../src/constants";
const allTasks = constants.allTasks

function DeleteFromArray(Array1,item){
    const Array2 = []
    for (let i=0; i < Array1.length; i++){
      if(Array1[i] !== item){
        Array2.push(Array1[i])
        //console.log(Array1[i]);
      }
    }
    return Array2;
}
  
function SumArray(Array1){
    return Array1.reduce((prev, cur) => cur + prev, 0);
}
  
function MaxArray(Array1){
    return Array1.reduce((prev, cur) => Math.max(prev, cur),0);
}
  
  
function isEFone(AliceUtility,BobUtility,AliceAllocation,BobAllocation){
    const AAU=[];
    const BAU=[];
    const ABU=[];
    const BBU=[];
    for (let i=0; i < AliceAllocation.length; i++){
      AAU.push(AliceUtility[AliceAllocation[i]]);
      BAU.push(BobUtility[AliceAllocation[i]]);
    }
    //console.log("AAU",AAU);
    //console.log("SumArray(AAU)",SumArray(AAU));
    //console.log("BAU",BAU);
    //console.log("SumArray(BAU)",SumArray(BAU));
    for (let i=0; i < BobAllocation.length; i++){
      ABU.push(AliceUtility[BobAllocation[i]]);
      BBU.push(BobUtility[BobAllocation[i]]);
    }
    //console.log("ABU",ABU);
    //console.log("SumArray(ABU)",SumArray(ABU));
    //console.log("BBU",BBU);
    //console.log("SumArray(BBU)",SumArray(BBU));
    //console.log("SumArray(AAU) >= SumArray(ABU) - MaxArray(ABU)",SumArray(AAU) >= SumArray(ABU) - MaxArray(ABU));
    //console.log("SumArray(BBU) >= SumArray(BAU)- MaxArray(BAU)",SumArray(BBU) >= SumArray(BAU)- MaxArray(BAU));
    return (SumArray(AAU) >= SumArray(ABU) - MaxArray(ABU) && SumArray(BBU) >= SumArray(BAU)- MaxArray(BAU));
    
}

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


function adjustedWinner(aliceUtility,bobUtility,taskList,currentTaskRepartition){
    let AliceAllocation = Array.from(Array(aliceUtility.length), (v, k) => k);
    let BobAllocation = [];
    let alist = [];
    for (let i=0; i < AliceAllocation.length; i++){
        //console.log(isString(key));
        alist.push([AliceAllocation[i], bobUtility[AliceAllocation[i]]/aliceUtility[AliceAllocation[i]]]);
    }
    alist.sort((a, b) => (b[1]-a[1]));
    let t = 0;
    for (let i=0; i < alist.length; i++){
        if(isEFone(aliceUtility,bobUtility,AliceAllocation,BobAllocation)==true){
            break;
        }
        if(t < alist.length){
            AliceAllocation = DeleteFromArray(AliceAllocation, alist[t][0]);
            BobAllocation.push(alist[t][0]);
            console.log(`AliceAllocation: ${AliceAllocation}, BobAllocation: ${BobAllocation}`);
            t++;
        }
    }

    const myTasks = {};
    const partnerTasks = {};

    for (let i of AliceAllocation) {
        let category = categoryShow(taskList[i]);
        myTasks[taskList[i]] = {
            participates: true,
            effort: currentTaskRepartition.myTasks[taskList[i]].effort,
            duration : currentTaskRepartition.myTasks[taskList[i]].duration,
            category : category,
        };
    }
    for (let i of BobAllocation) {
        let category = categoryShow(taskList[i]);
        partnerTasks[taskList[i]] = {
            participates: true,
            effort: currentTaskRepartition.partnerTasks[taskList[i]].effort,
            duration : currentTaskRepartition.partnerTasks[taskList[i]].duration,
            category : category,
        };
    }
    //console.log({ myTasks: myTasks, partnerTasks: partnerTasks})
    return { myTasks: myTasks, partnerTasks: partnerTasks};
}

function leastChangeAllocation(aliceUtility,bobUtility,aliceAllocation, bobAllocation,taskList,currentTaskRepartition){
    let aliceAllocationIndex = [];
    let bobAllocationIndex = [];
    for (let i=0; i < aliceAllocation.length; i++){
        let indexa = taskList.indexOf(aliceAllocation[i]);
        aliceAllocationIndex.push(indexa);
    }
    for (let i=0; i < bobAllocation.length; i++){
        let indexb = taskList.indexOf(bobAllocation[i]);
        bobAllocationIndex.push(indexb);
    }
    if(isEFone(aliceUtility,bobUtility,aliceAllocationIndex,bobAllocationIndex)){
        return currentTaskRepartition;
    }
    else{
        let AAU=[];
        let BAU=[];
        let ABU=[];
        let BBU=[];
        //console.log(aliceAllocation);
        for (let i=0; i < aliceAllocation.length; i++){
            let indexa = taskList.indexOf(aliceAllocation[i]);
            AAU.push(aliceUtility[indexa]);
            BAU.push(bobUtility[indexa]);
        }
        for (let i=0; i < bobAllocation.length; i++){
            let indexb = taskList.indexOf(bobAllocation[i]);
            ABU.push(aliceUtility[indexb]);
            BBU.push(bobUtility[indexb]);
        }
        if(SumArray(BBU) < SumArray(BAU) - MaxArray(BAU)){
            let alist = [];
            for (let i=0; i < aliceAllocation.length; i++){
                let indexa = taskList.indexOf(aliceAllocation[i]);
                alist.push([indexa, aliceUtility[indexa]/bobUtility[indexa]]);
            }
            alist.sort((a, b) => (a[1]-b[1]));
            aliceAllocation = DeleteFromArray(aliceAllocation, taskList[alist[0][0]]);
            bobAllocation.push(taskList[alist[0][0]]);
        }
        AAU=[];
        BAU=[];
        ABU=[];
        BBU=[];
        for (let i=0; i < aliceAllocation.length; i++){
            let indexa = taskList.indexOf(aliceAllocation[i]);
            AAU.push(aliceUtility[indexa]);
            BAU.push(bobUtility[indexa]);
        }
        for (let i=0; i < bobAllocation.length; i++){
            let indexb = taskList.indexOf(bobAllocation[i]);
            ABU.push(aliceUtility[indexb]);
            BBU.push(bobUtility[indexb]);
        }
        if(SumArray(AAU) < SumArray(ABU) - MaxArray(ABU)){
            let alist = [];
            for (let i=0; i < bobAllocation.length; i++){
                let indexb = taskList.indexOf(bobAllocation[i]);
                alist.push([indexb, bobUtility[indexb]/aliceUtility[indexb]]);
            }
            alist.sort((a, b) => (a[1]-b[1]));
            bobAllocation = DeleteFromArray(bobAllocation, taskList[alist[0][0]]);
            aliceAllocation.push(taskList[alist[0][0]]);
        }
        console.log(`AliceAllocation: ${aliceAllocation}, BobAllocation: ${bobAllocation}`);
        const myTasks = {};
        const partnerTasks = {};
        for (let task of aliceAllocation) {
            let category = categoryShow(task);
            myTasks[task] = {
                participates: true,
                effort: currentTaskRepartition.myTasks[task].effort,
                duration : currentTaskRepartition.myTasks[task].duration,
                category : category,
            };
        }
        for (let task of bobAllocation) {
            let category = categoryShow(task);
            partnerTasks[task] = {
                participates: true,
                effort: currentTaskRepartition.partnerTasks[task].effort,
                duration : currentTaskRepartition.partnerTasks[task].duration,
                category : category,
            };
        }
        //console.log({ myTasks: myTasks, partnerTasks: partnerTasks})
      return { myTasks: myTasks, partnerTasks: partnerTasks};
    }
}
  


export default function makeAliceBobUtility(allTasks, currentTaskRepartition){
    let aliceUtility = [];
    let bobUtility = [];
    let aliceAllocation = [];
    let bobAllocation = [];
    let taskList = [];
    for (let category of allTasks){
        for (let task of category.children){
            if (task.checked){
                const myTask1 = currentTaskRepartition['myTasks'][task.name];
                aliceUtility.push((myTask1.effort+1)*(11/(myTask1.duration+1)));
                const partnerTask1 = currentTaskRepartition['partnerTasks'][task.name];
                bobUtility.push((partnerTask1.effort+3)*(partnerTask1.duration+3));
                taskList.push(task.name);
                //console.log(myTask1);
                if (myTask1 && myTask1.participates){
                    aliceAllocation.push(task.name);
                }else if (partnerTask1 && partnerTask1.participates){
                    bobAllocation.push(task.name);
                }
            }
        }
    }

    console.log([aliceUtility, bobUtility, aliceAllocation, bobAllocation, taskList]);
    //console.log(currentTaskRepartition);
    let adjustedWinnerTaskRepartition = adjustedWinner(aliceUtility,bobUtility,taskList,currentTaskRepartition);

    let leastChangeAllocationTaskRepartition = leastChangeAllocation(aliceUtility,bobUtility,aliceAllocation, bobAllocation,taskList,currentTaskRepartition);
    //console.log("kkkk",[adjustedWinnerTaskRepartition, leastChangeAllocationTaskRepartition]);
    return [adjustedWinnerTaskRepartition, leastChangeAllocationTaskRepartition];
}

