import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCategoria, ResponseCreate, RequestCreate, RequestUpdate, ResponseUpdate,  } from './categoria.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = "https://5cfa67ebf26e8c00146d0756.mockapi.io/categories";

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<ResponseCategoria> {
    return this.http.get<ResponseCategoria>(this.url);
  }

  createCategoria(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request );
  }
  getCategoria(id: string): Observable<ResponseCategoria> {
    const _url= `${this.url}/${id}`;
    return this.http.get<ResponseCategoria>(_url);
  }
  updateCategoria(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url= `${this.url}/${id}`;
    return this.http.put<ResponseUpdate>(_url, request );
  }
  deleteCategoria(id: string): Observable<any> {
    const _url= `${this.url}/${id}`;
    return this.http.delete<any>(_url);
  }
  
}
