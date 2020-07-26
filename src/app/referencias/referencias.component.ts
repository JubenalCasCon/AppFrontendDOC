import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {


secciones: Array<string>=["Primera","Segunda", "Tercera" , "Cuarta" , "Quinta"]  

  


imagenprueba:any="assets/imagenes/cabecera.jpg"
imagendeprueba:any="assets/imagenes/rsz_portada.jpg"
sactiimagen:any="assets/imagenes/Sacti.jpg"
descargaimagen:any="assets/imagenes/UniversidadGuanajuato2.jpg"
descargada:any="assets/imagenes/11.jpg"

actividades:any[]=
[

{
  tipo:"Desarrollo, paginas web , diseño, implementación"

},

{
  tipo:"Desgloce"
}
]
  
instituciones:any[]=
[
{
  lugar:"Universidad de Guanajuato",
  periodo:"Junio 2017 Junio 2018",
  accion:"Mantenimiento Preventivo y correctivo a  equipos de Computo",
    accion2:"Desarrollo de SI para control de Inventarios",
    resena:"Mi estancia en la Universidad de Guanajuato se dio inicialmente como apoyo a uno de mis profesores ,  realizando principalmente actividades de mantenimiento a equipos de computo dentro de la Institución.Posteriormente a razón de  mis residencias profesionales , tuve una estancia de 1 año en el que desarrollé un SI enfocado al control de Inventarios, usando como entorno de desarrollo código HTML, Css, Php y mysql.",
    imagen1:"assets/imagenes/ug1.jpg",
    imagen2:"assets/imagenes/ug2.jpg",
    imagen3:"assets/imagenes/ug3.jpg",
    imagen4:"assets/imagenes/ug4.jpg",
    imagen5:"assets/imagenes/ug5.jpg",
    nombre:"Ug"
    
},

{
  lugar:"Sacti centro de Negocios Los Mochis Sin",
  periodo:"Marzo 2019 Marzo 2020",
  accion:"*Desarollo de SI con web design",
    accion2:"*Mantenimiento Preventivo y Correctictivo a Equipos de Computo",
    accion3:"*Planificación y control de proyecto de software",
    resena:"Ingrese  como parte del programa de capacitación de Jóvenes construyendo el futuro.Trabajé en el departamento de programación , apoyando en el desarollo de diferentes proyectos. Consolidé de mis conocimientos en Html y Css , agregando además el usoUML para el modelado proyectos de Software ,tecnologías git, github, con base en Angular(La herramienta de la empresa), diseño de algoritmos , POO y Bootstrap.",
    imagen1:"assets/imagenes/sacti1.jpg",
    imagen2:"assets/imagenes/sacti2.jpg",
    imagen3:"assets/imagenes/sacti3.jpg",
    imagen4:"assets/imagenes/sacti4.jpg",
    imagen5:"assets/imagenes/sacti5.jpg",
    nombre:"Sacti"
},

{
  lugar:" Inocisa Los Mochis",
  periodo:"Enero 2015-Julio 2015 Enero2019-Actualidad ",
  accion:"*Automatización de Procesos rutinarios en la empresa por medio de herramientas web",
    accion2:"*Mantenimiento Preventivo y Correctictivo a Equipos de Computo",
    accion3:"*Desarrollo de página web de la empresa con la cooperacion del departamentod de Marketing y publicidad  ",
    resena:"*Ingrese en 2015 , Empecé  en el área de recepción , mantenimiento a equipos de computo y atomatizando procesos con el uso de las Tics. Dejé la Institución en 2016 y regresé en 2019 , Mis actividades ahora son  en el área del desarrollo de la empresa , usando el framework Angular para desarrollar los proyectos.",
    imagen1:"assets/imagenes/1.jpg",
    imagen2:"assets/imagenes/2.jpg",
    imagen3:"assets/imagenes/3.jpg",
    imagen4:"assets/imagenes/4.jpg",
    imagen5:"assets/imagenes/5.jfif",
    nombre:"Inocisa"
    
}

]




  constructor() { }

  ngOnInit() {

    
  }

}
