import { Component, OnInit } from '@angular/core';
import {Principal} from './principal';
@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {
  public principal:Principal;
  public experiencia:Array<Principal>;
  constructor() { }

  ngOnInit() {
    this.experiencia = [new Principal(1,'Framework','Angular'),
    new Principal(2,'Framework','Laravel'),
    new Principal(3,'Frameword','TailWindCss'),
    new Principal(4,'Lenguaje','Php'),
    new Principal(5,'Lenguaje','JavaScript'),
    new Principal(6,'Lenguaje','Estudios básicos en Java'),
    new Principal(7,'Lenguaje','Lenguaje Html y Css'),
    new Principal(8,'Herramienta','Git'),
    new Principal(9,'Herramienta','Manejo avanzado de paquetería office(Word, Excel , PowerPoint')
    ]

}}
