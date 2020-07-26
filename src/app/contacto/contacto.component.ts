import { Component, OnInit } from '@angular/core';
import {Contacto} from './contacto'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
public contacto:Contacto;

  constructor() {
    this.contacto = new Contacto("","","","","")

   }

   onSubmit(){
     console.log(this.contacto)
   }

  ngOnInit() {
  }

}
