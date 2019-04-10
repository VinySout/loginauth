import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carro } from './carro';

@Injectable({
  providedIn: 'root'
})
export class CarroDataService {
  private carroSource = new BehaviorSubject({ carro: null, key: '' });
  currentCarro = this.carroSource.asObservable();

  constructor(){}

  changeCarro(carro: Carro, key: string) {
    this.carroSource.next({carro: carro, key: key});
  }
}
