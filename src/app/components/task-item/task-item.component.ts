import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../task'
import { faTimes, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task: Task;
  faTimes = faTimes;
  faPaintBrush = faPaintBrush;
   
  constructor() { }

  ngOnInit(): void {
  }

}
