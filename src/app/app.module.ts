import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './pages/header/header.component';
import { Error404Component } from './pages/error404/error404.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { EditComponent } from './pages/carros/edit/edit.component';
import { ListComponent } from './pages/carros/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Error404Component,
    CategoriasComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
