import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  lstProductos: Producto[]=[];

  constructor(private productoService: ProductoService) { }


  ngOnInit(): void {
    this.consultarProductos();
  }

  consultarProductos() {
  
    this.productoService.getProductos().subscribe(data => {
    console.log(data);
    this.lstProductos = data;
    console.log(this.lstProductos);
  }, error=> {
    console.log(error);
  }
  )
  }

}
