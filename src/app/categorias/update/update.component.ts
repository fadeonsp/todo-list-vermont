import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../categoria.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.categoriaService.getCategoria(this.id).subscribe(res => {
      
    });
  }
   update(){
     this.categoriaService.updateCategoria(this.id, this.request).subscribe(res => {
       alert(`Atualizado: ${res.updatedAt}, Nome: ${res.name}, Tipo: ${res.tipo}`);
     });
   }
}
