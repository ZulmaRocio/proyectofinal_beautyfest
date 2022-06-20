import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url ='http://localhost:4000/api/producto/'

  constructor(private http: HttpClient ) { }

  //consulta de todos los productos
  getProductos(): Observable<any> {
    return this.http.get(this.url + '/obtenerProducto' )
  }


}
