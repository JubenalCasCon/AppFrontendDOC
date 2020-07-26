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
  public mostrarframework:number;
  public mostrarlenguaje:number;
  public mostrarherramienta:number;


parrafos:any[]=[

{
  contenido:"Hola y Muchas gracias por visitar mi sitio"
},

{
contenido:"Mi nombre es Benjamín Castañeda , soy Ingeniero en Informática por parte del Tecnológico Superior de Irapuato"
},

{
contenido:"Para comenzar una pequeña guia:"
},

{
  contenido:"El botón Pagina de Github te dirigirá al sitio donde se almacenan mis proyectos"
},

{
  contenido:"El apartado Diseño es un enlace a una carpeta  en Drive, donde podrás acceder y descargar mis diseños en  XD "
},

{
contenido:"Para finalizar , el apartado de documentación te dirigirá a otra carpeta en Drive"
},

{
contenido:"Encontrarás ahí detalles relacionados a cada uno de los proyectos como objetivos, lenguajes implementados , carpetas con contenido Bechmarking que tome como referencia para mi trabajo y algunas cocsas mas"  
},

{
contenido:""
},

{
contenido:"Por favor, no te detengas en esta parte , el menú superior te detallará mi experiencia , información sobre mi trabajo , además de accesos directos a cada uno de mis proyectos."
},

{
contenido:""
},

{
contenido:"Bienvenido y muchas Gracias"
}


];


  herramientas:any[]=[

{
  mensaje:"Página de Github",
  clase:"row-start-3 row-span-3 ",
  link:"https://github.com/JubenalCasCon?tab=repositories"
},

{
  mensaje:"Diseños",
  clase:"row-start-2  row-span-1",
  link:"https://drive.google.com/drive/u/0/folders/1NIj9kCLY0nMAg_vV6W7XZtcswD8MtET5"
},

{
  mensaje:"Documentación",
  clase:"row-start-1 row-span-3",
  link:"https://drive.google.com/drive/folders/168fgF4bp1raQFbSpURl4b-e4oO7y3a7Q?usp=sharing"
}

  ]

  constructor() { }

  ngOnInit() {
    this.mostrarframework=0;
    this.mostrarherramienta=0;
    this.mostrarlenguaje=0;



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

}

cambiarframework(valorFramework){
  this.mostrarframework=valorFramework;
}

cambiarlenguaje(valorlenguaje){
  this.mostrarlenguaje=valorlenguaje;
}

cambiarherramienta(valorherramienta){
  this.mostrarherramienta=valorherramienta;
}

}
