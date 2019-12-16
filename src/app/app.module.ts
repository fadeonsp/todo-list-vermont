import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoriaComponent } from './categorias/create-categoria/create-categoria.component';
import { FormsModule } from "@angular/forms";
import { UpdateComponent } from './categorias/update/update.component';
import { DeleteCategoriaComponent } from './categorias/delete-categoria/delete-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CreateCategoriaComponent,
    UpdateComponent,
    DeleteCategoriaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
