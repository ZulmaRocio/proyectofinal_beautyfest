import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Factura } from '../../models/factura';
import { FacturaService } from '../../services/factura.service';

@Component({
  selector: 'app-crearfactura',
  templateUrl: './crearfactura.component.html',

})
export class CrearfacturaComponent implements OnInit {
  productForm: FormGroup;
  Factura :[]=[]

  constructor(private formfactura: FormBuilder,private _servicio: FacturaService) {
    this.productForm = this.formfactura.group({
        id_cliente : ['', Validators.required],
        nombre_cliente:  ['', Validators.required],
        fecha:  ['', Validators.required],
        valor_total:  ['', Validators.required],
      }
    )

   }

  ngOnInit(): void {
  }

  AgregarFactura() {
    const crearfactura:Factura ={
      id_cliente: this.productForm.get('id_cliente')?.value,
      nombre_cliente:this.productForm.get('nombre_cliente')?.value ,
      fecha: this.productForm.get('fecha')?.value,
      valor_total: this.productForm.get('valor_total')?.value ,
      estado: true
    }
  

  this._servicio.postFactura(crearfactura).subscribe(data=>{
console.log(data)
  },error => {
    console.log(error)
  })
}
}


