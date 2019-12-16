import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { CreateCategoriaComponent } from './categorias/create-categoria/create-categoria.component';
import { UpdateComponent } from './categorias/update/update.component';
import { DeleteCategoriaComponent } from './categorias/delete-categoria/delete-categoria.component';


const routes: Routes = [

  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/create', component: CreateCategoriaComponent},
  {path: 'categorias/update:id', component: UpdateComponent},
  {path: 'categorias/delete:id', component: DeleteCategoriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
