import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  contador = 0;

  constructor() {
  }

  adicionarContador() {
    this.contador++;
    console.log('Action #' + this.contador);
  }

}
