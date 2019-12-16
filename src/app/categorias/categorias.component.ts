import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { ResponseCategoria } from './categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  responseCategorias: ResponseCategoria;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.getCategorias()
    .subscribe(res => this.responseCategorias = res)
  }

}
