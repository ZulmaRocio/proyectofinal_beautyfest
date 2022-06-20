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
        id_producto :new FormControl ('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        stock: new FormControl ('', [Validators.required]),
        costo: new FormControl ('', [Validators.required]),
        reservado: new FormControl( '', [Validators.required]),
      }
    )

   }

  ngOnInit(): void {
  }

  AgregarProducto() {
    console.log('a');
  }

}
