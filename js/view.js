import { list } from "./main.js";
import { STATUS } from "./main.js";
import { PRIORITY } from "./main.js";
import { addTask } from "./main.js";

const ADDET_TASK_ITEM = `
<div class="checkbox">
<label class="check">
<input type="checkbox" class="task_done" name="checkbox">
<span class="check_box"></span>
</label>
</div>
<div class="text_task">
<p></p>
</div>
<div class="btn_delete" oncklick="deleteTask()"></div>
`;



 function createElement(){
    let addTask = document.createElement('div');
    addTask.className = 'addet_task_item';
    addTask.innerHTML = ADDET_TASK_ITEM;
 
   return addTask;
}

 export function getHighPreorityTask(){
    return document.querySelector('#input_high').value;
}

export function getLowPreorityTask(){
    return document.querySelector('#input-low').value;
}



function deleteTask(event){
    event.currentTarget.parentNode.remove();
}
 
export function deleteElement(){
    let buttonDelete = document.querySelectorAll('.btn_delete');
    for(let btn of buttonDelete){
        btn.addEventListener('click', deleteTask);   
    }
}


export function showElement(){
    let newElement = createElement();
    newElement.querySelector('p').textContent = list[list.length-1].name;

    if(list[list.length - 1].priority === PRIORITY.HIGH ){
        document.querySelector('.high-section').append(newElement);
        deleteElement();
    } else if (list[list.length - 1].priority === PRIORITY.LOW){
        document.querySelector('.low_section').append(newElement);
        deleteElement();
    }    
    
}

export function clearInput(){
    document.querySelector('#input-low').value = '';
    document.querySelector('#input_high').value = '';
}



