import { Component } from '@angular/core';

import { BaseWrapper } from 'capacitorbase/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private basePlugin: BaseWrapper;
  private message: string;

  constructor() {
    this.basePlugin = new BaseWrapper();
    this.message = 'Test Value';
  }

  testPlugin(forceError?: boolean): void {
    this.basePlugin
      .echo({ value: this.message })
      .then((result: any) => {
        if (forceError) {
          throw new Error('Something went wrong!')
        }
        alert(`Test Plugin OK:\n\n${result.value}`);
      })
      .catch((error: any) => {
        alert(`Test Plugin KO:\n\n${error}`);
      });
  }
}
