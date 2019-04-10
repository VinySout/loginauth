import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private db: AngularFireDatabase) { }

  insert(carro: Carro){
    this.db.list('carro').push(carro)
    .then((result: any) => {
      console.log(result.key);
    });
  }
  update(carro: Carro, key: string){
    this.db.list('carro').update(key, carro)
    .catch((erro: any) => {
      console.log(erro.key);
    });
  }
  getAll(){
    return this.db.list('carro')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
  delete(key: string){
     this.db.object(`carro/${key}`).remove();
  }
}
