window.onload=()=>{

    
    let todoList = [];
    if(localStorage.getItem('todo')!=undefined){
        todoList = JSON.parse(localStorage.getItem('todo'));
        outputTask();
    }

    document.getElementById('add-task').onclick = ()=>{
        let task = document.getElementById('input').value;
        taskObject = {};
        if(task!=""){
            taskObject.todo = task;
            taskObject.check = false;
            taskObject.id = Math.ceil(Math.random()*100-10);
            let length = todoList.length;
            todoList[length] = taskObject;
            outputTask();
        }else{
            alert('You need to input your task');
        }
        localStorage.setItem('todo', JSON.stringify(todoList));
    }

    let gettedElem = document.activeElement().onclick(deleteTask());
    
  
    function outputTask(){
        let outputString = "";
        for( let key in todoList){
            if(todoList[key].check){
                outputString += '<input type="checkbox" checked></input>'
            }else{
                outputString += '<input type="checkbox">'
            }
            outputString += todoList[key].todo + '<hr>';
        }
        document.getElementById('output').innerHTML = outputString;
    }
    function deleteTask(){

        console.log(gettedElem);
    };
}