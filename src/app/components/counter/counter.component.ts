import { Component } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
})
export class Counter {
  public title: string = 'Counter';
  public count: number = 0;
  constructor(private logger: Logger) {}

  public OnLogCount(): void {
    this.logger.WriteCount(this.count);
    this.count++;
  }
}