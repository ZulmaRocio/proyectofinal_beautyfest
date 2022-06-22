import { Component, OnInit } from '@angular/core';
import { Factura } from '../../models/factura';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-listar-facturas',
  templateUrl: './listar-facturas.component.html',
  styleUrls: ['./listar-facturas.component.css']
})
export class ListarFacturasComponent implements OnInit {

  Factura12: Factura[]=[]
  
  constructor(private Factura1:FacturaService ) { }

  ngOnInit(): void {
    this.consultarProductos();
  }

  consultarProductos() {
  
    this.Factura1.getFacturas().subscribe(data => {
    this.Factura12 = data;
    console.log(this.Factura12);
  }, error=> {
    console.log(error);
  }
  )
  }

}
