
import constants from "../src/constants";
const allTasks = constants.allTasks

import calculateBurden from "../src/calculateBurden";

function DeleteFromArray(Array1,item){
    const Array2 = []
    for (let i=0; i < Array1.length; i++){
      if(Array1[i] !== item){
        Array2.push(Array1[i]);
        //console.log(Array1[i]);
      }
    }
    return Array2;
}

function AddIntoArray(Array1,item){
    const Array2 = []
    for (let i=0; i < Array1.length; i++){
        Array2.push(Array1[i]);
    }
    Array2.push(item);
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
    for (let i=0; i < BobAllocation.length; i++){
      ABU.push(AliceUtility[BobAllocation[i]]);
      BBU.push(BobUtility[BobAllocation[i]]);
    }
    return (SumArray(AAU) - MaxArray(AAU) <= SumArray(ABU) && SumArray(BBU) - MaxArray(BBU) <= SumArray(BAU));

}

function isEF(AliceUtility,BobUtility,AliceAllocation,BobAllocation){
    const AAU=[];
    const BAU=[];
    const ABU=[];
    const BBU=[];
    for (let i=0; i < AliceAllocation.length; i++){
      AAU.push(AliceUtility[AliceAllocation[i]]);
      BAU.push(BobUtility[AliceAllocation[i]]);
    }
    for (let i=0; i < BobAllocation.length; i++){
      ABU.push(AliceUtility[BobAllocation[i]]);
      BBU.push(BobUtility[BobAllocation[i]]);
    }
    return (SumArray(AAU) <= SumArray(ABU) && SumArray(BBU) <= SumArray(BAU));
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


function makeTaskRepartiton(aliceTask, bobTask, currentTaskRepartition){
    let myTasks = {};
    let partnerTasks = {};

    for (let c of allTasks){
        for (let task of c.children){
            if (aliceTask.includes(task.name)){
                myTasks[task.name] = {
                    participates: true,
                    effort: currentTaskRepartition.myTasks[task.name].effort,
                    duration : currentTaskRepartition.myTasks[task.name].duration,
                    category : currentTaskRepartition.myTasks[task.name].category,
                };
            }
            else{
                myTasks[task.name] = {
                    participates: false,
                    effort: currentTaskRepartition.myTasks[task.name].effort,
                    duration : currentTaskRepartition.myTasks[task.name].duration,
                    category : currentTaskRepartition.myTasks[task.name].category,
                };
            }
        }
    }
    for (let c of allTasks){
        for (let task of c.children){
            if (bobTask.includes(task.name)){
                partnerTasks[task.name] = {
                    participates: true,
                    effort: currentTaskRepartition.partnerTasks[task.name].effort,
                    duration : currentTaskRepartition.partnerTasks[task.name].duration,
                    category : currentTaskRepartition.partnerTasks[task.name].category,
                };
            }
            else{
                partnerTasks[task.name] = {
                    participates: false,
                    effort: currentTaskRepartition.partnerTasks[task.name].effort,
                    duration : currentTaskRepartition.partnerTasks[task.name].duration,
                    category : currentTaskRepartition.partnerTasks[task.name].category,
                };
            }
        }
    }
    return [myTasks, partnerTasks]
}


function adjustedWinner(aliceUtility,bobUtility,taskList,currentTaskRepartition){
    let AliceAllocation = Array.from(Array(aliceUtility.length), (v, k) => k);
    let BobAllocation = [];
    let alist = [];
    for (let i=0; i < AliceAllocation.length; i++){
        //console.log(isString(key));
        alist.push([AliceAllocation[i], bobUtility[AliceAllocation[i]]/aliceUtility[AliceAllocation[i]]]);
    }
    alist.sort((a, b) => (a[1]-b[1]));
    let t = 0;
    for (let i=0; i < alist.length; i++){
        if(isEFone(aliceUtility,bobUtility,AliceAllocation,BobAllocation)==true){
            break;
        }
        if(t < alist.length){
            AliceAllocation = DeleteFromArray(AliceAllocation, alist[t][0]);
            BobAllocation.push(alist[t][0]);
            //console.log(`AliceAllocation: ${AliceAllocation}, BobAllocation: ${BobAllocation}`);
            t++;
        }
    }

    const aliceTask = [];
    for (let i of AliceAllocation) {
        aliceTask.push(taskList[i]);
    }
    const bobTask = [];
    for (let i of BobAllocation) {
        bobTask.push(taskList[i]);
    }

    let myTasks = {};
    let partnerTasks = {};
    [myTasks, partnerTasks] = makeTaskRepartiton(aliceTask, bobTask, currentTaskRepartition)
    //console.log("Output of the AW algorithm",{ myTasks: myTasks, partnerTasks: partnerTasks})
    return { myTasks: myTasks, partnerTasks: partnerTasks};
}


function improvedAdjustedWinner(aliceUtility,bobUtility,taskList,currentTaskRepartition){
    let ranNum = Math.random();
    let AliceAllocation = [];
    let BobAllocation = [];
    if (ranNum >= 0.5){
        AliceAllocation = Array.from(Array(aliceUtility.length), (v, k) => k);
        BobAllocation = [];
        let alist = [];
        for (let i=0; i < AliceAllocation.length; i++){
            //console.log(isString(key));
            alist.push([AliceAllocation[i], bobUtility[AliceAllocation[i]]/aliceUtility[AliceAllocation[i]]]);
        }
        alist.sort((a, b) => (a[1]-b[1]));
        let t = 0;
        for (let i=0; i < alist.length; i++){
            if(isEFone(aliceUtility,bobUtility,AliceAllocation,BobAllocation)==true){
                break;
            }
            if(t < alist.length){
                AliceAllocation = DeleteFromArray(AliceAllocation, alist[t][0]);
                BobAllocation.push(alist[t][0]);
                //console.log(`AliceAllocation: ${AliceAllocation}, BobAllocation: ${BobAllocation}`);
                t++;
            }
        }
        for (let i = t; i < alist.length; i++){
            const BAU=[];
            const BBU=[];
            let aAllocation = DeleteFromArray(AliceAllocation, alist[t][0]);
            let bAllocation = AddIntoArray(BobAllocation, alist[t][0]);
            for (let i=0; i < aAllocation.length; i++){
                BAU.push(bobUtility[aAllocation[i]]);
            }
            for (let i=0; i < bAllocation.length; i++){
                BBU.push(bobUtility[bAllocation[i]]);
            }
            if(SumArray(BBU) > SumArray(BAU)){
                break;
            }
            if(t < alist.length){
                AliceAllocation = DeleteFromArray(AliceAllocation, alist[t][0]);
                BobAllocation.push(alist[t][0]);
                //console.log(`AliceAllocation: ${AliceAllocation}, BobAllocation: ${BobAllocation}`);
                t++;
            }
        }
    }else{
        AliceAllocation = [];
        BobAllocation = Array.from(Array(bobUtility.length), (v, k) => k);
        let blist = [];
        for (let i=0; i < BobAllocation.length; i++){
            //console.log(isString(key));
            blist.push([BobAllocation[i], aliceUtility[BobAllocation[i]]/bobUtility[BobAllocation[i]]]);
        }
        blist.sort((a, b) => (a[1]-b[1]));
        let t = 0;
        for (let i=0; i < blist.length; i++){
            if(isEFone(aliceUtility,bobUtility,AliceAllocation,BobAllocation)==true){
                break;
            }
            if(t < blist.length){
                BobAllocation = DeleteFromArray(BobAllocation, blist[t][0]);
                AliceAllocation.push(blist[t][0]);
                //console.log(`AliceAllocation: ${AliceAllocation}, BobAllocation: ${BobAllocation}`);
                t++;
            }
        }
        for (let i = t; i < blist.length; i++){
            const ABU=[];
            const AAU=[];
            let aAllocation = AddIntoArray(AliceAllocation, blist[t][0]);
            let bAllocation = DeleteFromArray(BobAllocation, blist[t][0]);
            for (let i=0; i < bAllocation.length; i++){
                ABU.push(aliceUtility[bAllocation[i]]);
            }
            for (let i=0; i < aAllocation.length; i++){
                AAU.push(aliceUtility[aAllocation[i]]);
            }
            if(SumArray(AAU) > SumArray(ABU)){
                break;
            }
            if(t < blist.length){
                BobAllocation = DeleteFromArray(BobAllocation, blist[t][0]);
                AliceAllocation.push(blist[t][0]);
                //console.log(`AliceAllocation: ${AliceAllocation}, BobAllocation: ${BobAllocation}`);
                t++;
            }
        }
    }
    const aliceTask = [];
    for (let i of AliceAllocation) {
        aliceTask.push(taskList[i]);
    }
    const bobTask = [];
    for (let i of BobAllocation) {
        bobTask.push(taskList[i]);
    }
    let myTasks = {};
    let partnerTasks = {};
    [myTasks, partnerTasks] = makeTaskRepartiton(aliceTask, bobTask, currentTaskRepartition)
    //console.log("Output of the AW algorithm",{ myTasks: myTasks, partnerTasks: partnerTasks})
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
        if(SumArray(BBU)- MaxArray(BBU) > SumArray(BAU)){
            let alist = [];
            for (let i=0; i < bobAllocation.length; i++){
                let indexb = taskList.indexOf(bobAllocation[i]);
                alist.push([indexb, aliceUtility[indexb]/bobUtility[indexb]]);
            }
            alist.sort((a, b) => (a[1]-b[1]));
            bobAllocation = DeleteFromArray(bobAllocation, taskList[alist[0][0]]);
            aliceAllocation.push(taskList[alist[0][0]]);
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
        if(SumArray(AAU) - MaxArray(AAU) > SumArray(ABU)){
            let alist = [];
            for (let i=0; i < aliceAllocation.length; i++){
                let indexa = taskList.indexOf(aliceAllocation[i]);
                alist.push([indexa, bobUtility[indexa]/aliceUtility[indexa]]);
            }
            alist.sort((a, b) => (a[1]-b[1]));
            aliceAllocation = DeleteFromArray(aliceAllocation, taskList[alist[0][0]]);
            bobAllocation.push(taskList[alist[0][0]]);
        }
        //console.log(`AliceAllocation: ${aliceAllocation}, BobAllocation: ${bobAllocation}`);

        let myTasks = {};
        let partnerTasks = {};
        [myTasks, partnerTasks] = makeTaskRepartiton(aliceAllocation, bobAllocation, currentTaskRepartition)
        console.log("Output of the least exchange algorithm", { myTasks: myTasks, partnerTasks: partnerTasks})
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
                aliceUtility.push(calculateBurden(myTask1.effort, myTask1.duration));
                const partnerTask1 = currentTaskRepartition['partnerTasks'][task.name];
                bobUtility.push(calculateBurden(partnerTask1.effort, partnerTask1.duration));
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

    let adjustedWinnerTaskRepartition = improvedAdjustedWinner(aliceUtility,bobUtility,taskList,currentTaskRepartition);

    let leastChangeAllocationTaskRepartition = leastChangeAllocation(aliceUtility,bobUtility,aliceAllocation, bobAllocation,taskList,currentTaskRepartition);

    return [adjustedWinnerTaskRepartition, leastChangeAllocationTaskRepartition];
}

