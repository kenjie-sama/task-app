import { Component, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/services/tasks.service';
import ITask from '../../../../assets/scripts/interfaces/ITasks';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { DateString } from 'src/assets/scripts/classes/DateString';
import { StringUtil } from 'src/assets/scripts/classes/StringUtil';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInputComponent {
  public constructor(private tasks: Tasks) {}
  @Output() submitTaskEvent: EventEmitter<ITask> = new EventEmitter<ITask>();

  public OnSubmit(
    titleComponent: HTMLInputElement,
    descriptionComponent: HTMLInputElement,
    dateComponent: HTMLInputElement,
    isRemindedComponent: MatSlideToggle
  ): void {
    const title: string = titleComponent.value.trim();
    const dsrcp: string = descriptionComponent.value.trim();

    console.log(title);
    console.log(dsrcp);

    if (title === '') {
      titleComponent.focus();
      return;
    }

    if (dsrcp === '') {
      descriptionComponent.focus();
      return;
    }

    if (dateComponent.value === '') {
      dateComponent.focus();
      return;
    }

    this.tasks.Tasks.push({
      title: StringUtil.ToTitleCase(title),
      description: StringUtil.ToSentenceCase(dsrcp),
      date: new DateString(dateComponent.valueAsDate as Date).GetMMMDDYYYY(),
      isReminded: isRemindedComponent.checked,
    });
  }
}
