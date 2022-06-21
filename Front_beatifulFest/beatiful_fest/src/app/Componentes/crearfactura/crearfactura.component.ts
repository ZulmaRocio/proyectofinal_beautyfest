import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Factura } from '../../models/factura';

@Component({
  selector: 'app-crearfactura',
  templateUrl: './crearfactura.component.html',

})
export class CrearfacturaComponent implements OnInit {
  productForm: FormGroup;

  constructor(private formfactura: FormBuilder) {
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
    console.log('a');
  }

}
