import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productForm: FormGroup;

  
  constructor(private formProducto: FormBuilder) {
    this.productForm = this.formProducto.group({
        id_producto : ['', Validators.required],
        name:  ['', Validators.required],
        stock:  ['', Validators.required],
        costo:  ['', Validators.required],
        reservado: ['', Validators.required],
      }
    )

   }

  ngOnInit(): void {
  }

  AgregarProducto() {
    console.log('a');
  }

}
