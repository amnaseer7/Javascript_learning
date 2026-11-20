const addtask=document.getElementById("addbtn")
const inputtask= document.getElementById("input-el")

let todoList=document.getElementById("todolist")
const task=[]


addtask.addEventListener("click", function(){
    task.push(inputtask.value)
    renderList(task[task.length-1])
    
})

function renderList(arr){

    let checkboxs=todoList.appendChild(document.createElement("input"));
    checkboxs.type= "checkbox";
    let span=document.createElement("span");
    span.textContent=arr;
    todoList.append(span);
    console.log(todoList)
   
}

console.log(todoList)
