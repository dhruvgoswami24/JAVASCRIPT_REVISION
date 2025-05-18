const tasks = [];


function add(){
   let task1 = prompt("enter the task");
   tasks.push(task1);
   console.log(tasks);
}


function view(){

   console.log(tasks);
}


function markAsDone(){
   let task1 = Number(prompt("enter the task index"));
   let new1 = tasks[task1] + "  (done)";
   tasks[task1] = new1;
}

function del(){
   let task1 = Number(prompt("enter the task index"));
   tasks.splice(task1,1)
}
