import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  counter = 0;

  constructor() {
  }

  plusCounter() {
    this.counter++;
    console.log('Action #' + this.counter);
  }

}
