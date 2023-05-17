import { Component, Input } from '@angular/core';
import ITask from 'src/assets/scripts/interfaces/ITasks';
import { StringUtil } from 'src/assets/scripts/classes/StringUtil';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss'],
})
export class TaskButtonComponent {
  @Input() public index: number = 0;

  @Input() public task: ITask = {
    title: '',
    description: '',
    date: '',
    isReminded: false,
  };

  public GetTitle(): string {
    return StringUtil.ToTitleCase(this.task.title, false);
  }

  public GetDescription(): string {
    return StringUtil.ToSentenceCase(this.task.description, false);
  }

  public OnToggleTask(): void {
    this.task.isReminded = !this.task.isReminded;
  }
}
