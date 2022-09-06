import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UlService } from 'src/app/service/ul.service';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-taks',
  templateUrl: './add-taks.component.html',
  styleUrls: ['./add-taks.component.css']
})
export class AddTaksComponent implements OnInit {
@Output() onAddTask: EventEmitter<Task>= new EventEmitter();
text:string="";
day:string="";
reminder:boolean=false;
showAddTask: boolean = false;
subscription?:Subscription;

  constructor(
    private ulService:UlService
  ) {
    this.subscription = this.ulService.onToogle().subscribe(value => this.showAddTask=value)

   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.text.length === 0){
      alert("Agregue una tarea");
      return
    }
    const {text,day,reminder}= this
    const newTask = {text,day,reminder}
  
    this.onAddTask.emit(newTask);
  }

}
