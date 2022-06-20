import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import { Producto } from '../models/producto';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

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

  //crear un producto
  postProduct(producto: Producto):Observable<any> {
    return this.http.post(this.url + '/crearProducto', producto )
  }


}
