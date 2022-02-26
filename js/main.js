
import { deleteElement } from "./view.js";
import { getHighPreorityTask } from "./view.js";
import { getLowPreorityTask } from "./view.js";
import { showElement } from "./view.js";
import { clearInput } from "./view.js";


export let STATUS ={
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO:"To Do",
}

export const PRIORITY = {
    HIGH:'high', 
    MEDIUM:'medium', 
    LOW:'low'
};

const DEFAULT_STATUS = 'To Do';
let  default_preority = '';

export let list = [
    {name:'create a post', status:STATUS.IN_PROGRESS, priority:PRIORITY.HIGH},
    
];
 

function changeStatus(task, status){
    if((list.findIndex(item => item.name === task)) > -1){
     list.find(item => item.name === task).status = status;
    } else{
        console.log('this task doesnt exist');
    }
}

function changePriority(task, priority){
    if((list.findIndex(item => item.name === task)) > -1){
     list.find(item => item.name === task).priority = priority;
    } else{
        console.log('this task doesnt exist');
    }
}

 export function addTask(task){
   list.push({name:task, status:DEFAULT_STATUS, priority:default_preority});

}

export function deleteTask(task){
    list.splice(list.findIndex(item => item.name === task), 1);
}



document.querySelector('.high_priority').addEventListener('click',function(){
    default_preority = PRIORITY.HIGH
    let task = getHighPreorityTask();
    addTask(task);
    showElement();
    clearInput();
});

document.querySelector('.low_priority').addEventListener('click',function(){
    default_preority = PRIORITY.LOW
    let task = getLowPreorityTask();
    addTask(task);
    showElement();
    clearInput();
});





console.log(list);


