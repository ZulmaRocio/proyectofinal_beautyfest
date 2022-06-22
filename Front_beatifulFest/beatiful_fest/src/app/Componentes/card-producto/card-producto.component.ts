import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  
  Producto12: Producto[]=[]
  
  constructor(private Producto1:ProductoService) { }

  ngOnInit(): void {
    this.consultarProductos()
  }

  consultarProductos() {
  
    this.Producto1.getProductos().subscribe(data => {
    this.Producto12 = data;
    console.log(this.Producto12);
  }, error=> {
    console.log(error);
  }
  )
  }


}
