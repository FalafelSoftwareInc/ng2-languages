import { Injectable } from '@angular/core'

@Injectable()
export class DataService {
  getLanguages(): string[] {
    return ['ES5','ES6','TypeScript','Dart','Elm','CoffeeScript', 'Etc'];
  }
}
