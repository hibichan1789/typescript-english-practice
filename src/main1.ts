// gemini practice #1
type TaskStatus = "idle"|"running"|"completed";
interface Task{
  id:number;
  title:string;
  status:TaskStatus;
}

function updateStatus(targetTask:Task, status:TaskStatus):string{
  targetTask.status = status;
  return `Task ${targetTask.id} is now ${targetTask.status}`;
}

const sampleTask:Task = {id:1, title:"sample sample", status:"running"};

console.log(updateStatus(sampleTask, "completed"));

/*
The Task interface has three properties.
These are id (number), title (string), and status (TaskStatus).
The TaskStatus type has three options.
These are idle, running, and completed.
The updateStatus function takes a targetTask (Task) and a status (TaskStatus).
It updates targetTask's status to a new status and returns updated Task's information.

receive or take引数に取る
 */