import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    tipo: ''
  }

  response: ResponseCreate

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {

  }
  salvar(){
    this.categoriaService.createCategoria(this.request).subscribe(res => {
      this.response = res;
    });
  }

}
