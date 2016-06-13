import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: 'dist/app.component.html',
  providers: [DataService]
})
export class AppComponent {
  title = 'Angular 2 Language Options';
  constructor(dataService){
    this.languages = dataService.getLanguages();
  }

  static get parameters() {
    return [[DataService]];
  }

}
