import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Producto } from '../models/producto';

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

  //consulta de producto por id
  getProductoxId(id: string) : Observable<any>{
    return this.http.get(this.url+'obtenerProductoxID/ '+ id)
  }

  //crear un producto
  postProduct(producto: Producto):Observable<any> {
    return this.http.post(this.url + '/crearProducto', producto )
  }

  //Actualizar producto 
  putProducto(producto: Producto): Observable<any>{
    return this.http.put(this.url + 'actualizarProducto', producto)
  }

}
