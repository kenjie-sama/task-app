import { Component } from '@angular/core';

@Component({
  template: `<button>{{ text }}</button>`,
  styles: [
    `
      button {
        background-color: cyan;
      }
    `,
  ],
})
export class SimpleButton {
  public width: string = 'auto';
  public height: string = 'auto';
  public text: string = 'Button';
  public color: string = 'cyan';
}
