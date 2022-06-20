import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
    url ='http://localhost:4000/api/factura/'
  constructor(private http: HttpClient ) { }

  //consulta de todas las facturas
  getFacturas(): Observable<any> {
    return this.http.get(this.url + 'obtenerFactura' )
  }

  //consulta de factura por id
  getFacturaxId(id: string) : Observable<any>{
    return this.http.get(this.url+'obtenerFacturaxID/ '+ id)
  }

  //crear factura
  postFactura(factura: Factura):Observable<any> {
    return this.http.post(this.url + '/crearfactura', factura)
  }

  //Actualizar factura
  putFactura(factura: Factura): Observable<any>{
    return this.http.put(this.url + 'actualizarFactura', factura)
  }
}
