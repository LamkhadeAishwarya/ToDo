import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class PrediklyTaskservice{

    AssignDate:Date=new Date('2024-01-01');
    Enddate:Date=new Date('2024-02-12');
    
    Discription:any;
    TaskList:any=[];
    constructor()
    {
        this.TaskList=
        [
            {
                taskid:1,name:" FirstTaskMeeting",AssignDate:this.AssignDate,Discription :"New",Enddate:this.Enddate,status:"new"
            }
        ];
    }

    public getAllTasks():any
    {
        const list=[];
        for(let i=0;i<this.TaskList.length;i++)
        {
            if(this.TaskList[i].status=='new')
            {
                  list.push( this.TaskList[i]);
            }
        }
        return list;
    }

    public AddTasks(task:any):any
    {
        this.TaskList.push({
            taskid:task.taskid,AssignDate:task.AssignDate,Discription :task.Discription,name:task.name,Enddate:task.Enddate,status:"new"
        });
    }



    public UpdateTasks(task:any):any
    {
        for(let i=0;i<this.TaskList.length;i++)
        {
            if(this.TaskList[i].taskid==task.taskid)
            {
                this.TaskList[i].Discription=task.Discription;
                this.TaskList[i].AssignDate=task.AssignDate;
                this.TaskList[i].name=task.name;
                this.TaskList[i].Enddate=task.Enddate;
                this.TaskList[i].status="new";
                break;
            }
        }
    }


    public deleteTasks(taskid:number)
    {
        let i=0;
        for(;i<this.TaskList.length;i++)
        {
            if(this.TaskList[i].taskid==taskid)
            {
              break;
            }
        }
        this.TaskList.splice(i,1);
    }
    completaskList:any=[];
    completedTask(taskid:number)
    {

        for(let i=0;i<this.TaskList.length;i++)
        {
            if(this.TaskList[i].taskid===taskid)
            {
                this.TaskList[i].status="done";
                break
            }
        }
       
    }
   
    getcompletedlist()
    {
        const list=[];
        for(let i=0;i<this.TaskList.length;i++)
        {
            if(this.TaskList[i].status=='done')
            {
                  list.push( this.TaskList[i]);
            }
        }
        return list;
    }
}