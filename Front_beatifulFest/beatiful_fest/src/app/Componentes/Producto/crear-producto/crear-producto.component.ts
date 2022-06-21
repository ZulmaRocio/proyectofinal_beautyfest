import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../services/producto.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productForm: FormGroup;
  Producto :[]=[]
  

  constructor(private formProducto: FormBuilder,private _servicio:ProductoService) {
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
    const crearProducto:Producto ={
      id_producto: this.productForm.get('id_producto')?.value,
      name:this.productForm.get('name')?.value ,
      stock: this.productForm.get('stock')?.value,
      costo: this.productForm.get('costo')?.value ,
      reservado: this.productForm.get('reservado')?.value
    }
  

  this._servicio.postProduct(crearProducto).subscribe(data=>{
console.log(data)
  },error => {
    console.log(error)
  })
    
  }

}
