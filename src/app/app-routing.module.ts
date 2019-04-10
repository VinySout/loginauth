import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EditComponent } from './pages/carros/edit/edit.component';
import { ListComponent } from './pages/carros/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/addCarro', pathMatch: 'full' },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'addCarro', component: EditComponent },
  { path: 'listaCarro', component: ListComponent },
  { path: '**', component: Error404Component }
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
