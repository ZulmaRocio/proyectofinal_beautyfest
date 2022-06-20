import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ClienteComponent } from './Componentes/cliente/cliente.component';
import { ListarFacturasComponent } from './Componentes/listar-facturas/listar-facturas.component';
import { ListarProductosComponent } from './Componentes/Producto/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './Componentes/Producto/crear-producto/crear-producto.component';
import { CardProductoComponent } from './Componentes/card-producto/card-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClienteComponent,
    ListarFacturasComponent,
    ListarProductosComponent,
    CrearProductoComponent,
    CardProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
