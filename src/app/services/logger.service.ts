import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Logger {
  public WriteCount(count: number): void {
    console.log(count);
  }
}
