import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  
  Producto12: any []=[]
  Total:any=[]
  Valor:any=[]
  Total2:any= 0;
  
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


comprar(){}
Agregar(indice:any){
  if (this.Total[indice]==null) {
    this.Total[indice]=1
    }
  else{
    this.Total[indice]++

  }
 this.Valor[indice]=parseInt(this.Producto12[indice].costo) * this.Total[indice];
    console.log(this.Total)
    console.log(this.Producto12[indice].costo)
    console.log(this.Total[indice])


  this.Total2 =  this.Total2+parseInt(this.Producto12[indice].costo)

}

}

