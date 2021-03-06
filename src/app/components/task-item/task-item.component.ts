import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../task'
import { faTimes, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const tasker: any[] = [];

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  faPaintBrush = faPaintBrush;
  
  constructor() { }
  
  ngOnInit(): void {}
  
  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }
  
  onUpdate(){
    console.log('Update Requested');
  }
  
  Onclick(event: any, task: any){
    if(event.target.checked){
		tasker.push(task)
	}
	
	console.log(tasker);
  }

}
