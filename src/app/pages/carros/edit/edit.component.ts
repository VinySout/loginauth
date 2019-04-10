import { Component, OnInit } from '@angular/core';
import { Carro } from '../shared/carro';
import { CarroService } from '../shared/carro.service';
import { CarroDataService } from '../shared/carro-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  carro: Carro;
  key: string = '';
  constructor(private carroService: CarroService, private carroDataService: CarroDataService) { }
  
  ngOnInit() {
    this.carro = new Carro();
    this.carroDataService.currentCarro.subscribe(data => {
      if(data.carro && data.key){
        this.carro = new Carro();
        this.carro.marca = data.carro.marca;
        this.carro.modelo = data.carro.modelo;
        this.carro.cor = data.carro.cor;
        this.carro.placa = data.carro.placa;
        this.carro.dono = data.carro.dono;
        this.key = data.key;
      }
    });
  }
  onSubmit(){
    if(this.key){
      this.carroService.update(this.carro, this.key);
    }else{
      this.carroService.insert(this.carro);
    }

    this.carro = new Carro();
  }

}
