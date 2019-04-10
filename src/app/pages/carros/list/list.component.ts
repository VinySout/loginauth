import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroService } from '../shared/carro.service';
import { CarroDataService } from '../shared/carro-data.service';
import { Carro } from '../shared/carro';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  carros: Observable<any>;

  constructor(private carroService: CarroService, private carroDataService: CarroDataService) { }

  ngOnInit() {
    this.carros = this.carroService.getAll();
  }
  delete(key: string){
    this.carroService.delete(key);
  }
  edit(carro: Carro, key: string){
    this.carroDataService.changeCarro(carro, key);
  }

}
