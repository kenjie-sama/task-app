import { Component } from '@angular/core';
import { Tasks } from 'src/app/services/tasks.service';
import ITask from 'src/assets/scripts/interfaces/ITasks';

@Component({
  selector: 'app-task-list',
  styleUrls: ['./task-list.component.scss'],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  constructor(private tasks: Tasks) {}
  public readonly GetTasks: () => ITask[] = () => this.tasks.Tasks;
}
