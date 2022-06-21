import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { ClienteComponent } from './Componentes/cliente/cliente.component';
import {ListarFacturasComponent} from './Componentes/listar-facturas/listar-facturas.component';
import { CrearProductoComponent } from './Componentes/Producto/crear-producto/crear-producto.component' ;
import { CardProductoComponent } from './Componentes/card-producto/card-producto.component';
import { CrearfacturaComponent } from './Componentes/crearfactura/crearfactura.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'facturas', component: ListarFacturasComponent},
  {path: 'productos', component: CrearProductoComponent},
  {path: 'crearfactura', component: CrearfacturaComponent},
  {path: '', component: CardProductoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
