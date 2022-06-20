import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DetalleFactura, detalle_factura } from '../models/detalle_factura';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {
  url ='http://localhost:4000/api/detalle_factura/'

  constructor(private http: HttpClient ) { }

  //consulta de todos los detalles
  getdetalle_facturas(): Observable<any> {
    return this.http.get(this.url + '/obtenerDetalle' )
  }

 //consulta de detalle por id
  getdetallexId(id: string) : Observable<any>{
  return this.http.get(this.url+'obtenerdetallexID/ '+ id)
}
  //crear detalle
  postDetalleFactura(detalle_factura: DetalleFactura):Observable<any> {
    return this.http.post(this.url + '/crearDetalleFactura', detalle_factura )
  }

  //Actualizar detalle
  putDetalleFactura(detalle_factura: DetalleFactura): Observable<any>{
    return this.http.put(this.url + 'actualizarDetalleFactura', detalle_factura)
  }

  
}
