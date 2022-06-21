import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../services/producto.service';
import swal from'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productForm: FormGroup;
  Producto :[]=[]
  

  constructor(private formProducto: FormBuilder,private _servicio:ProductoService, private route: Router) {
    this.productForm = this.formProducto.group({
        id_producto : ['', Validators.required],
        name:  ['', Validators.required],
        stock:  ['', Validators.required],
        costo:  ['', Validators.required],
        reservado: ['', Validators.required],
        imagen: ['', Validators.required]
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
      reservado: this.productForm.get('reservado')?.value,
      imagen: this.productForm.get('imagen')?.value
    }
  

  this._servicio.postProduct(crearProducto).subscribe(data=>{
  console.log(data);
  this.route.navigate(['/productos']);
  swal.fire('Gracias...', 'Su producto fue creado exitosamente.', 'success');
  },error => {
    console.log(error);
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se pudo almacenar el producto!'
    })
  })
    
  }

}
