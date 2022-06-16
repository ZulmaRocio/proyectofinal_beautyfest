import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  formulario:FormGroup;
 revisarcorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private fb:FormBuilder) { 
   this.formulario = this.fb.group({
     nombrelead: ['', Validators.required],
     correolead: ['', [Validators.required, Validators.pattern(this.revisarcorreo)]],
     telefonolead: ['', Validators.required]
      
   })

}

lead(){

  console.log (this.formulario)

}


  ngOnInit(): void {
  }
  


}
