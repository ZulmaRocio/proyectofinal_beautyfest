import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { HeaderComponent } from './components/header/header.component';
import { VitrinaComponent } from './components/vitrina/vitrina.component';

const routes: Routes = [
  {path: "navbar", component: HeaderComponent},
  {path: "", component: VitrinaComponent},
  {path: "contacto", component:ContactenosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
