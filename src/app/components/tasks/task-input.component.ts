import { Component, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/services/tasks.service';
import ITask from '../../../assets/scripts/interfaces/ITasks';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInput {
  public constructor(private tasks: Tasks) {}
  public title: string = '';
  public description: string = '';
  public date: string = '';

  public OnSubmit(): void {
    this.tasks.Tasks.push({
      title: this.title,
      description: this.description,
      date: this.date,
      isReminded: false,
    });
    alert('Added new Task');
  }
}
