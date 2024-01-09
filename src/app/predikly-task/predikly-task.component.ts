import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder ,Validators} from '@angular/forms';
import{PrediklyTaskservice} from './prediklytask.service'
@Component({
  selector: 'app-predikly-task',
  templateUrl: './predikly-task.component.html',
  styleUrls: ['./predikly-task.component.css']
})
export class PrediklyTaskComponent implements OnInit {

  constructor(private fb:FormBuilder,private Prediklytaskservice:PrediklyTaskservice,private router:Router) { }

     ngOnInit(): void
      {
    this.getAllTasks();
    this.isNewList=true;

      }
      

  isNewList:boolean=true;
  TaskForm=this.fb.group({
    taskid:[,Validators.required],
    AssignDate:[,Validators.required],
    Discription:['New',Validators.required],
    name:['',Validators.required],
    Enddate:['',Validators.required]
   });

   isUpdatebtn:boolean=false;

   get taskid(){
    return this.TaskForm.get('taskid');
  }
  get AssignDate(){
    return this.TaskForm.get('AssignDate');
  }
  
  get Discription(){
    return this.TaskForm.get('Discription');
  }

  get name(){
    return this.TaskForm.get('name');
  }
  get Enddate(){
    return this.TaskForm.get('Enddate');
  }
  TaskList:any=[];


  getAllTasks(){
    this.isNewList=true;
    this.TaskList=[];
    this.TaskList=this.Prediklytaskservice.getAllTasks();
    }
  edit(task:any){

      this.isUpdatebtn=true;
      this.TaskForm.setValue({
        taskid:task.taskid,
        AssignDate:task.AssignDate,
        Discription:task.Discription,
        name:task.name,
        Enddate:task.Enddate
        
      });
      }
      


    delete(taskid:number){
      let result=confirm('Do you want to delete  this task id '+taskid+' ?');
      if(result==true)
      {
        this.Prediklytaskservice.deleteTasks(taskid);
        this.getAllTasks();
      }
    
    }
     saveData(){
      let task=this.TaskForm.value;
      if(!this.isUpdatebtn){
        this.Prediklytaskservice.AddTasks(task);
      }
     else{
        this.Prediklytaskservice.UpdateTasks(task);
        this.isUpdatebtn=false;
        
     }
     this.TaskForm.reset();
     this.getAllTasks();
    }
     
    completed(taskid: number) {
      this.Prediklytaskservice.completedTask(taskid);
    
      alert("Successfully Added To Completed Task List");
    this.getAllTasks();
  }

    clearForm()
  {
    this.TaskForm.reset();
    this.isUpdatebtn=false;
  }
 viewcompleted(){
    this.isNewList=false;
    this.TaskList=[];
   this.TaskList=this.Prediklytaskservice.getcompletedlist();
  }
}
