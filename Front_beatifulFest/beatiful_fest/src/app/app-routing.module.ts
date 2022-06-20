import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import { ClienteComponent } from './Componentes/cliente/cliente.component';
import {ListarFacturasComponent} from './Componentes/listar-facturas/listar-facturas.component';
import { ListarProductosComponent } from './Componentes/Producto/listar-productos/listar-productos.component' ;

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'facturas', component: ListarFacturasComponent},
  {path: 'productos', component: ListarProductosComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
